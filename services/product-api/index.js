const express = require('express');

const app = express();
const port = 8088;

const products = [
    {
        id: '1',
        name: 'Самокат городской',
        price: 5990,
        images: ['1.jpg', '2.jpg']
    }
];

app.get('/:id', (req, res) => {
    res.send(products.find(product => product.id === req.params.id));
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
