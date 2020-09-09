const express = require('express')
const router = express.Router()
const Result = require('../util/result.util')
const producto = require('../model/producto.model')

//Crea registro de productos
router.post('/registroProducto',function(req,res){
    let result = Result.createResult();
    let product = new producto({
        nombre:req.body.nombre,
        precio:req.body.precio
    })
    product.save()
    .then((response)=>{
        result.Error = false;
        result.Items = response;
        result.Response = "Producto registrado con exito";
        res.send(result);
    })
    .catch((err)=>{
        result.Success = false;
        result.Error = err;
        result.Response = "Ocurrio un error"
        res.send(result);
    })
})

module.exports = router;