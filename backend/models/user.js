
const mongoose = require('mongoose');
const validator = require('validator')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"your name minimum lenth should exceed 3 characters"],
        maxLength:[30,"your name maximum lenth should atleast 3 characters"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"your name minimum lenth should exceed 3 characters"],
        maxLength:[30,"your name maximum lenth should atleast 3 characters"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"enter a valid email"]
    },
    time:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});
const userReservation = mongoose.model('users',userSchema);
module.exports= userReservation