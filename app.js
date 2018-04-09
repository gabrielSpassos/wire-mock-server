var express = require('express');
var path = require('path');
var request = require("request")

var app = express();

app.get('/', function (req, res) {
    console.log('Olar');
});

app.get('/api/v1/people/2647', function (req, res) {
    request('http://localhost:9090/api/pessoas/2647', function (error, response, body) {
        if(!error && response.statusCode == 200){
            console.log(' ------- ')
            console.log('body:', body);
        }
    });
});

app.listen(4500, function () { // Inicia uma requisição do Express
    console.log('Escutando em http://localhost:4500');
});