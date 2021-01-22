const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');



//Cria servidor
const app = express();

//Aplicando middlewares as configurações do servidor
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoints
app.get('/leandro', (req, res) =>{
    const data = {
            "nome":"Leandro Alves Magalhães dos Santos",
            "idade":21,
            "sexo":"Masculino",
            "altura": 1.80,
            "naturalidade":"Brasileiro"
        }

        return res.send(data);
    });  

app.listen(9000, () => {
    console.log('Servidor em funcionamento!')
})

