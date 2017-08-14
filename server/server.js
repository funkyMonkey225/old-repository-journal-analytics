const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();

// app.use(serveStatic('./', {index: ['index.html', 'index.htm']}));

app.set('port', (process.env.PORT || 3737))

app.use(express.static('public'));

app.get('/app', (req, resp) => {
    
})

app.listen(app.get('port'), () => {
    console.log(`
    ⭐️  Express server started...
    💻  Running on port ${app.get('port')}`)
  })
