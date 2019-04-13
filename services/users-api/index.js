const express = require('express');
const data = require('./db.json');

const app = express();
const port = 8088;

app.get('/*', (req, res) => {
    res.send(data);
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
