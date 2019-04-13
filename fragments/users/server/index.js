const express = require('express');
const serverRender = require('../client/server-root').default;

const app = express();
const port = 8082;

function renderFullPage(html, state) {
    return `
        <div id="users-root">${html ? html : ''}</div>
        <script>
            window.__USERS_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')};
        </script>
    `;
}

app.use(express.static('build'));

app.get('/*', async (req, res) => {
    const { html, state } = await serverRender(req);

    res.writeHead(200, {
        jslink: `/client.js`,
        csslink: `/client.css`,
        'Content-Type': 'text/html'
    });
    res.end(renderFullPage(html, state));
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
