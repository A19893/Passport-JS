const mongoose = require("mongoose");

const User = new mongoose.Schema({
    username:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        unique: true,
        required:true,
    },
    password: {
        type: String,
        unique: true,
        required:true,
    }
},{timestamps: true});


const users_model = mongoose.model("users",User);
module.exports = users_model;