var express = require('express');
var request = require('request');

var app = express();
const path = require('path');
app.get('/', function (req, res) { res.sendFile(path.join(__dirname, '/index.html')); });


app.use('/load',
    function (req, res) {
        var url = decodeURIComponent(req.url.replace('/?url=', ''));
        
        console.log(url);
        req.pipe(request(url)).pipe(res);
    }
);
app.listen(7777,"0.0.0.0");
console.log('proxy corriendo en el puerto 7777');