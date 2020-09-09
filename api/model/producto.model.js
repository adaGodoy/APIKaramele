const mongoose = require('mongoose')
const producto = new mongoose.Schema({
    nombre:{
        type:String,
        require:[true,'Nombre del producto'],
        trim:true,
        minlength:[4,'El minimo de caracteres  es 4'],
        maxlength:[9,'El maximo de caracteres  es 9'],
        unique:true

    },
    precio:{
        type:mongoose.SchemaTypes.Decimal128,
        require:[true,'Precio del producto'],
        trim:true
    }
})
module.exports = mongoose.model('productos',producto);