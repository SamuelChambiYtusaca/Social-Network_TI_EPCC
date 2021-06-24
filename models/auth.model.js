const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

//Esquema de usuario
const userSchema = new mongoose.Schema({
  names: {
    type: String,
    required: true,
  },
  surnames: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: [true, "Error"],
  },
  status: {
    type: String,
    default: "Hola, soy un humano y me gusta vivir",
  },
  followers: {
    type: Number,
    default: 0,
  },
  following: {
    type: Number,
    default: 0,
  },
  hashed_password: {
    type: String,
  },
  salt: {
    type: String,
  },
});

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainText) {
    // console.log(this.encryptPassword(plainText));
    // console.log(this.hashed_password);
    return this.encryptPassword(plainText) == this.hashed_password;
  },

  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      console.log(err);
      return "none";
    }
  },
};

module.exports = mongoose.model("User", userSchema);
