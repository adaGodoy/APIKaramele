const mongoose = require('mongoose')

const usuario = new mongoose.Schema({
    nombres:{
        primerNombre:{
            type:String,
            required:[true,'El primer nombre es requerido'],
            trim:true,
            minlength:[3,'El primer nombre require al menos 3 caracteres'],
            maxlength:[10,'El primer nombre no debe exceder mas de 10 caracteres']
        },
        segundoNombre:{
            type:String,
            required:[true,'El segundo nombre es requerido'],
            trim:true,
            minlength:[3,'El segundo nombre require al menos 3 caracteres'],
            maxlength:[10,'El segundo nombre no debe exceder mas de 10 caracteres']
        }
    },
    apellidos:{
        primerApellido:{
            type:String,
            required:[true,'El primer apellido es requerido'],
            trim:true,
            minlength:[3,'El primer apellido require al menos 3 caracteres'],
            maxlength:[10,'El primer apellido no debe exceder mas de 10 caracteres']
        },
        segundoApellido:{
            type:String,
            required:[true,'El segundo apellido es requerido'],
            trim:true,
            minlength:[3,'El segundo apellido require al menos 3 caracteres'],
            maxlength:[10,'El segundo apellido no debe exceder mas de 10 caracteres']
        }
    },
    correo:{
        type:String,
        required:[true,'El correo electronico es requerido'],
        trim:true,
        unique:true,
        match:[/[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})/,'Este correo no cumple los estandares']
    },
      nombreUsuario:{
        type:String,
        required:[true,'El nombre del usuario es requerido'],
        trim:true,
        unique:true,
        minlength:[3,'El nombre del usuario require al menos 3 caracteres'],
        maxlength:[10,'El nombre del usuario no debe exceder mas de 10 caracteres']
    },
    contrasenia:{
        type:String,
        required:[true,'La contraseña es requerida'],
        trim:true,
        minlength:[8,'La contraseña debe tener minimo 8 caracteres'],
        maxlength:[16,'La contraseña debe tener maximo 16 caracteres']
    },
    imgUsuario:{
        type:String,
        trim:true,
        default:'https://definicion.de/wp-content/uploads/2019/06/perfildeusuario.jpg'
    },
    estado:{
        type:mongoose.SchemaTypes.Boolean,
        default:true
    },
    fechaRegistro:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('usuarios',usuario);