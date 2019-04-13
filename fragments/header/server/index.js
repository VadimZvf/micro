const express = require('express');
const serverRender = require('../client/server-root').default;

const app = express();
const port = 8081;

function renderFullPage(html) {
    return `<div id="root">${html ? html : ''}</div>`;
}

app.use(express.static('build'));

app.get('/*', (req, res) => {
    const html = serverRender(req);

    res.writeHead(200, {
        jslink: `/client.js`,
        csslink: `/client.css`,
        'Content-Type': 'text/html'
    });
    res.end(renderFullPage(html));
});

/* eslint-disable no-console */
app.listen(port, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
    }
});
/* eslint-enable no-console */
