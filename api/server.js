const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()
const db = require('./db/db.connection')
const routerUsuario = require('./routes/usuarios.routes')
const routerProducto = require('./routes/productos.routes')
db();

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

// rutas
app.use('/api/usuario',routerUsuario)
app.use('/api/producto',routerProducto)
//puerto inicial, mensaje de que si esta encendido el servidor/local
app.listen(app.get('port'),function(){
    console.log('Servidor iniciado en el puerto ', app.get('port'))
})