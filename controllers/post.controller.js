const User = require("../models/auth.model");
const Post = require("../models/post.model");
const formidable = require("formidable");
const jwt = require("jsonwebtoken");
const fs = require('fs');

// exports.create = (req, res) => {
//   let form = new formidable.IncomingForm()
//   form.keepExtensions = true
//   form.parse(req, (err, fields, files) => {
//     if (err) {
//       return res.status(400).json({
//         error: "Image could not be uploaded"
//       })
//     }
//     const post = new Post(fields);
//     if (files.file) {
//       if (files.file.size > 1000000) {
//         return res.status(400).json({
//           error: "Image should be lass than 1MB in size"
//         })
//       }
//       post.file.data = fs.readFileSync(files.file.path)
//       post.file.contentType = files.file.type
//     }
//     post.save((err, result) => {
//       if (err) {
//         return res.status(400).json({
//           error: err,
//         });
//       }
//       return res.json(result);
//     });
//   })
// };

exports.create = (req, res) => {
  const post = new Post(req.body);
  post.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.json({ message: "Publicación realizada con éxito" });
  });
};

exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "name";

  Post.find()
    .populate("author")
    .sort([[sortBy, order]])
    .exec((err, users) => {
      if (err) {
        return res.status(400).json({
          error: "Posts no encontrados",
        });
      }
      res.json(users);
    });
};

exports.search = (req, res) => {
  const tag = req.body[0];

  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "name";

  Post.find({ title: { $regex: tag } })
    .populate("author")
    .sort([[sortBy, order]])
    .exec((err, users) => {
      if (err) {
        return res.status(400).json({
          error: "Posts no encontrados",
        });
      }
      res.json(users);
    });
};

exports.postsByUser = (req, res) => {
  const { _id } = req.User;
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "name";

  Post.find({ author: _id })
    .populate("author")
    .sort([[sortBy, order]])
    .exec((err, posts) => {
      if (err) {
        return res.status(400).json({
          error: "Posts no encontrados",
        });
      }
      res.json(posts);
    });
};

exports.UserById = (req, res, next, id) => {
  User.findById(id).exec((err, User) => {
    if (err || !User) {
      return res.status(400).json({
        error: "El usuario no fue encontrado o no existe",
      });
    }
    req.User = User;
    next();
  });
};
