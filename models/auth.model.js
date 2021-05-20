const mongoose = require('mongoose');
const crypto = require('crypto');

//Esquema de usuario
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
    }
})