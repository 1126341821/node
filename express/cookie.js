var express      = require('express')
var cookieParser = require('cookie-parser')
 
var app = express()
app.use(cookieParser())
app.get('/', function(req, res) {
	res.send("ff")
  console.log("Cookies: ", req.cookies)
})
 
app.listen(8888)