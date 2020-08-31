const mongoose = require('mongoose')

const usuario = new mongoose.Schema({
    nombres:{
        primerNombre:{
            type:String,
            required:true,
            trim:true,
            minlength:3,
            maxlength:10
        },
        segundoNombre:{
            type:String,
            required:true,
            trim:true,
            minlength:3,
            maxlength:10
        }
    },
    apellidos:{
        primerApellido:{
            type:String,
            required:true,
            trim:true,
            minlength:3,
            maxlength:10
        },
        segundoApellido:{
            type:String,
            required:true,
            trim:true,
            minlength:3,
            maxlength:10
        }
    },
    correo:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        match:/[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})/
    }
})

module.exports = mongoose.model('usuarios',usuario);