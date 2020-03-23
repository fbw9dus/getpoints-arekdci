const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('server is listening at:3000');
});

app.get('/', () => {
    console.log('Hi, Hi');
})