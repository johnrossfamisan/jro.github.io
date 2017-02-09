var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('My name is JRO.')
})

app.listen (3000, function () {
  console.log('My name is JRO.')
})
