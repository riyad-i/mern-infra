const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')


const app = express()
const PORT = process.env.PORT || 3001

app.use(logger('dev'))
app.use(express.json())

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));





// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });









app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
})