import mongoose from "mongoose";

var LoginSchema = new mongoose.Schema({
    username:String,
    password:String
})

var LoginModal = mongoose.model('LoginDetails' , LoginSchema , 'LoginDetails')


export default LoginModal