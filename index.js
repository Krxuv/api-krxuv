__path = process.cwd();
var favicon = require('serve-favicon');
var express = require('express'),
    cors = require('cors'),
    path = require('path'),
    secure = require('ssl-express-www');
//const PORT = process.env.PORT || 8080 || 5000 || 3000
const PORT = process.env.PORT || 8000 || 5000 || 3000
var { color } = require('./lib/color.js')

var apirouter = require('./routes/api')

var app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(favicon(__path +'/views/favicon.ico'))
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', apirouter);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.get("/docs", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.get("/anime", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.get("/antaranews", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.get("/canvas", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.get("/cecan", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.get("/cnbcnews", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.get("/cnnnews", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.get("/downloader", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.get("/encdec", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.get("/games", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.get("/islam", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.get("/merdekanews", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.get("/okezonenews", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.get("/photooxy", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.get("/randomimage", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.get("/republikanews", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.get("/search", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.get("/sindonews", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.get("/suaranews", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.get("/temponews", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.get("/textpro", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.get("/tools", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.get("/tribunnews", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.get("/wallpaper", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.all('*', (req, res) => {
  return res
    .status(404)
    .send({ creator: 'kimimaru', message: 'Not found', success: false });
});

app.listen(PORT, () => {
    console.log(color("Server running on port " + PORT,'green'))
})

module.exports = app
