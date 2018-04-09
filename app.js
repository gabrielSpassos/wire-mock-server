var express = require('express');
var path = require('path');
var request = require("request")

var app = express();

app.get('/', function (req, res) {
    console.log('Olar');
});

app.get('/api/v1/people', function (req, res) {
    request('http://localhost:9090/api/pessoas/2647', function (error, response, body) {
        console.log(' ------- ')
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
      });
});

app.listen(4500, function () { // Inicia uma requisição do Express
    console.log('Escutando em http://localhost:4500');
});