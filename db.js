const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://kaushallokhande12345:Mc5zykZYgglHXBjB@cluster0.qqlnv.mongodb.net/?retryWrites=true&w=majority&tls=true"

const connectToMongo= () =>{
    mongoose.connect(mongoURI, () =>{
        console.log("Connect to Mongo Successfully");
    })
}

module.exports  = connectToMongo;