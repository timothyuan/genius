var express = require('express');
var path = require('path');
var multer = require('multer');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.set('port', port); 

/* Disk Storage engine of multer gives you full control on storing files to disk. The options are destination (for determining which folder the file should be saved) and filename (name of the file inside the folder) */

var storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, './uploads');
  },
  filename: function (request, file, callback) {
    console.log(file);
    callback(null, file.originalname)
  }
});

/*Multer accepts a single file with the name photo. This file will be stored in request.file*/

var upload = multer({storage: storage}).single('file');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Showing index.html file on our homepage
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname+'/public/index.html'));
});

//Posting the file upload
app.post('/upload', function(request, response) {
  upload(request, response, function(err) {
  if(err) {
    console.log('Error Occured');
    return;
  }
  console.log(request.file);
  response.end('Your File Uploaded');
  console.log('Photo Uploaded');
  })
});

var server = app.listen(port, function () {
  console.log('Listening on port ' + server.address().port)
});