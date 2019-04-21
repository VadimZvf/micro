const express = require('express');
const path = require('path');
const createFragment = require('./fragment');
const app = express();

const port = 8080;

const fetchHeaderFragment = createFragment('http://localhost:8081');
const fetchProductFragment = createFragment('http://localhost:8082');

app.set('views', './server/views');
app.set('view engine', 'hbs');
app.use('/build', express.static(path.join(__dirname, 'build')));

app.get('/', async (req, res) => {
    const [headerFragment] = await Promise.all([fetchHeaderFragment()]);

    res.render('index', { headerFragment });
});

app.get('/product/:id', async (req, res) => {
    const [headerFragment, productFragment] = await Promise.all([fetchHeaderFragment(), fetchProductFragment(req.url)]);

    res.render('product', { headerFragment, productFragment });
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
