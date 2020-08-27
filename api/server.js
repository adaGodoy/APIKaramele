const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()

// Estos son middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

// inicializar el puerto nube/local
app.set('port', process.env.PORT || 3000)

//ruta inicial, mensaje de que si esta encendido el servidor/Nube
app.get('/', function(req, res){
    res.send('Servidor Iniciado Karamele')
});
//puerto inicial, mensaje de que si esta encendido el servidor/local
app.listen(app.get('port'),function(){
    console.log('Servidor iniciado en el puerto ', app.get('port'))
})