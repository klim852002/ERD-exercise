var express = require('express')
var router = express.Router()

// All the GET requests
router.get('/', function (req, res) {
// step 1: all tests view under INDEX.EJS
  res.render('tests/index')
}).get('/new', function (req, res) {
// step 2: NEW route under NEW.EJS. returns a form for creating a new test
  res.render('tests/new')
}).get('/:id', function (req, res) {
// step 3: get details for a specific test
  res.send('test\'s ' + req.params.id + ' details')
// step 4: return a form for editing a specific test
}).get('/:id/edit', function (req, res) {
  // res.send('edit test\'s ' + req.params.id + ' details')
  res.render('tests/edit')
})

 // step 5: Post request to create a new test slot using info from step 2
router.post('/', function (req, res) {
  res.send(req.body)
})
// step 6: put request to update or edit a specific test with info from step 4
router.put('/:id', function (req, res) {
  res.send('edit test' + req.params.id)
})
// step 7: deletes a specific test
router.delete('/:id', function (req, res) {
  res.send('delete test' + req.params.id)
})

module.exports = router
