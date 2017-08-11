const express = require('express');
const path = require('path');

const app = express();
const serveStatic = require('serve-static');

// app.use(serveStatic('./', {index: ['index.html', 'index.htm']}));

app.set('port', (process.env.PORT || 3737))

app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log(`
    ⭐️  Express server started...
    💻  Running on port ${app.get('port')}`)
  })
