const express = require('express')
const router = express.Router()
const usuario = require('../model/usuario.model')
const Result = require('../util/result.util')

// crear usuario
router.post('/registro',function(req,res){
    let result = Result.createResult();
    let user= new usuario({
        nombres:{
          primerNombre:req.body.primerNombre,
          segundoNombre:req.body.segundoNombre
        },
        apellidos:{
          primerApellido:req.body.primerApellido,
          segundoApellido:req.body.segundoApellido
        },
        correo:req.body.correo,
        nombreUsuario:req.body.nombreUsuario,
        contrasenia:req.body.contrasenia
    })
    user.save()
    .then((response) => {
      result.Error = false;
      result.Items = response;
      result.Response = "Usuario registrado exitosamente";
      res.send(result);
    })
    .catch((err) => {
        result.Success = false;
        result.Error = err;
        result.Response = "Ocurrio un error";
        res.send(result);
    });
})

module.exports = router