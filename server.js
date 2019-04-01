var express = require('express')

var path = require('path')

var app = express()

app.get('/', function(req, res, next) {
	res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.use(express.static('public'))

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!')
})