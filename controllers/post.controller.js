const User = require("../models/auth.model");
const Post = require("../models/post.model");
const formidable = require("formidable");
const jwt = require("jsonwebtoken");

exports.create = (req, res) => {
  const post = new Post(req.body);
  post.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.json(result);
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
