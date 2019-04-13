const express = require('express');

const app = express();
const port = 8089;

const user = {
    login: 'admin',
    password: 'test'
};

app.get('/login', (req, res) => {
    if (req.body.login === user.login && req.body.password === user.password) {
        res.send({ token: 'test-token' });
    } else {
        res.sendStatus(401);
    }
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
