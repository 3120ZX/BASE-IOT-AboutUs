const express = require("express")
const app = express()
const port = 3000
const path = require('path')

var resources = path.join(__dirname+ '/resources')
var public = path.join(__dirname+ '/public')

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use(express.static(resources))
app.use(express.static(public))

console.log('Server start/restart')
console.log('listening to port',port)
console.log()

app.get('/',(req,res) => {
    res.render('index.html')
    console.log('Request Recieved')
})

app.listen(port)