const express = require('express');
const app = express();
var serveStatic = require('serve-static');
var path = require('path');


// app.use(serveStatic('./', {index: ['index.html', 'index.htm']}));

app.use(express.static('public'));

app.listen(3737, () => {
    console.log('web app is listening!');
});