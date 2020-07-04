const express = require('express') //importacao do pacote
const app = express() //instanciando express
const cors = require('cors')

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});


app.use(cors()) //habilitando cors na nossa aplicacao
var pacientes = [];

app.post('/api/pacientes', function (req, res) {  
  pacientes.push(req.body);
  res.send(true);
})

app.get('/api/pacientes', function (req, res) { //endereco da requisicao onde e retornado hello world
  res.send(pacientes);
})

app.listen(3000) //execucao do servidor