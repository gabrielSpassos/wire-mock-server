var express = require('express');
var path = require('path');
var request = require("request")

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);

app.get('/api/v1/people/2647', function (req, res) {
    request('http://localhost:9090/api/pessoas/2647', function (error, response, body) {
        if(!error && response.statusCode == 200){
            console.log(' ------- ')
            console.log('body:', body);
            res.json(body);
        }
    });
});

app.get('/api/pessoas-detalhes/2647', function (req, res) {
    request('http://localhost:9090/api/pessoas-detalhes/2647', function (error, response, body) {
        var title = 'Teste do WireMock'
        if(!error && response.statusCode == 200){
            res.render('people', {
                title: title,
                body: body, 
            });
        }
    });
});

app.listen(4500, function () { // Inicia uma requisição do Express
    console.log('Escutando em http://localhost:4500');
});