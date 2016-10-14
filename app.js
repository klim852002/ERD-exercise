// import express
var express = require('express')
// import modules
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
// instantiating the express server
var app = express()
var port = 5000

// set all the routes
var tests_routes = require('./routes/tests')

// capture all the request, assume all static files is inside public folder
app.use(express.static(__dirname + '/public'))

// capture all request and let it filter by body-parse package
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// run methodOverride for all requests
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))
// the view engine for express is ejs. HENCE, res.render(index) => index.ejs inside VIEWS FOLDER
app.set('view engine', 'ejs')

// add middleware to handle all students and tests routes
app.use('/tests', tests_routes)

// listening to the opened port
app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
