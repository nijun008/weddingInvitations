const express = require('express')
const fs = require('fs')

const app = express()

app.use('/public',express.static('public'))

app.get('/', function (req, res) {
  let html = fs.readFileSync('./index.html','utf-8')
  res.header('Content-Type', 'text/html;charset=utf-8');
  res.send(html)
})

app.listen(8081, () => { console.log('listening  8081!') })