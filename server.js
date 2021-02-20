require('dotenv/config')
const express = require('express')
const cors = require('cors')
const fs = require('fs');
const path = require('path')
const dateFormat = require('dateformat');
const bodyParser = require('body-parser')

app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))


const http = require('http').createServer(app);

const host = '192.168.68.109';

app.use(express.static(path.join(__dirname, 'public_html')));


app.get("/", function (req, res, next) {
  res.sendFile(__dirname + "/public_html/messegingui.html");
});

app.get("/home", function (req, res, next) {
  res.sendFile(__dirname + "/public_html/home.html");
});

http.listen(process.env.PORT, host, () => {
  console.log("Server running at https://" + host + ": " + process.env.PORT)
});
