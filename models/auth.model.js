const mongoose = require('mongoose');
const crypto = require('crypto');

//Esquema de usuario
const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    surname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: [true, 'Error'],
    },
    password: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("User", userSchema);