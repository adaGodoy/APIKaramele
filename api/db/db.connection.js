const mongoose = require('mongoose');

const URI = "mongodb+srv://AdaGodoy:WNMYb8eTLMCRq4r@cluster0.otg2k.mongodb.net/karamele?retryWrites=true&w=majority"
const connectDB = async () =>{
    await mongoose.connect(URI,{
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(result=>{
        console.log('Se conecto a la base Karamele');
    })
    .catch(error =>{
        console.log(error);
    });
};

module.exports = connectDB;
