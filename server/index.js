const express = require('express');
const path = require('path');
const createFragment = require('./fragment');
const app = express();

const port = 8080;

const fetchHeaderFragment = createFragment('http://localhost:8081');
const fetchUsersFragment = createFragment('http://localhost:8082');

app.set('views', './server/views');
app.set('view engine', 'hbs');
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', async (req, res) => {
    const headerFragment = await fetchHeaderFragment();
    const usersFragment = await fetchUsersFragment();
    res.render('index', { headerFragment, usersFragment });
});

/* eslint-disable no-console */
app.listen(port, error => {
    if (error) {
        console.error(error);
    } else {
        console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
    }
});
/* eslint-enable no-console */
