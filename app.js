var express = require('express');
var path = require('path');

var app = express();

app.get('/', function (req, res) {
    console.log('Olar');
});

app.get('/api/v1/pessoas', function (req, res) {
    console.log('funcina');
});

app.listen(3000, function () { // Inicia uma requisição do Express
    console.log('Escutando em http://localhost:3000');
});