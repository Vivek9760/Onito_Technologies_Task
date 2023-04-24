const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    sex:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        minLength:10,
        maxLength:10
    },
    aadhar:{
        type:Number,
        minLength:12,
        maxLength:12
    },
    pan:{
        type:String,
        minLength:10,
        maxLength:10,
        uppercase:true
    },
    guardianName:{
        type:String
    },
    email:{
        type:String,
        lowercase:true
    },
    emergencyContact:{
        type:Number,
        minLength:10,
        maxLength:10
    },
    address:{
        type:String
    },
    state:{
        type:String
    },
    city:{
        type:String
    },
    country:{
         type:String,
         default:"India"
    },
    pincode:{
        type:String
    },
    occupation:{
        type:String
    },
    religion:{
        type:String
    },
    martialStatus:{
        type:String
    },
    Nationality:{
        type:String,
        default:"India"
    }
})

const User = mongoose.model(process.env.collection,userSchema);

module.exports = User;
