const mongoose = require("mongoose");

//Esquema de usuario
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Un título es necesario',
  },
  author: {
    type: mongoose.Schema.Types.ObjectID,
    ref:'User',
    created: {
      type: Date,
      default: Date.now
    }
  },
  description: {
    type: String,
    required: 'Una descripción es necesaria, no importa si es breve',
  },
  labels: [{
    type: String,
  }],
  fav: [{
    type: mongoose.Schema.Types.ObjectID,
    ref:'User',
  }],
  likes: [{
    type: mongoose.Schema.Types.ObjectID,
    ref:'User',
  }],
  comments: [{
    type: String,
    created: { type: Date, default: Date.now },
    postedBy: { type: mongoose.Schema.ObjectId, ref: 'User'}
  }],
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Post", postSchema);
