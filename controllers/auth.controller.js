const User = require('../models/auth.model');
const formidable = require('formidable');
const jwt = require('jsonwebtoken')

exports.create = (req,res) => {
    const user = new User(req.body)
    user.save((err,result) => {
      if (err) {
        return res.status(400).json({
          error: err
        })
      }
      const { names, surnames, email } = result;
      return res.json({names: names, surnames: surnames, email: email})
    })
}

exports.list = (req,res) => {
    let order = req.query.order ? req.query.order : 'asc'
    let sortBy = req.query.sortBy ? req.query.sortBy : 'name'
  
    User.find()
      .select("-hashed_password")
      .select("-salt")
      .sort([[sortBy, order]])
      .exec((err, users) => {
        if (err) {
          return res.status(400).json({
            error: "Usuarios no encontrados"
          })
        }
        res.json(users);
      })
}

exports.signin = (req,res) => {
    const { email, password } = req.body
    User.findOne({email}, (error, user) => {
      if (error||!user) {
        return res.status(400).json({
          error: 'Este email no está registrado'
        });
      }
      if (!user.authenticate(password)) {
        return res.status(401).json({
          error: 'Contraseña incorrecta'
        });
      }
  
      const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET)
      res.cookie('t', token, {expire: new Date() + 9999})
      const {_id, names, surnames, email, status, followers, following} = user;
      return res.json({
        token,
        user: { _id, names, surnames, email, status, followers, following},
        domain: 'EPCC'
      })
    });
}

exports.modify = (req,res) => {
  const { names, surnames, email, password, newpassword, status } = req.body
  User.findOne({email}, (error, user) => {
    if (error||!user) {
      return res.status(400).json({
        error: 'Este email no está registrado'
      });
    }
    
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: 'Contraseña incorrecta'
      });
    }
    
    user.names = names;
    user.surnames = surnames;
    user.password = newpassword;
    user.status = status;
    user.save();
    
    return res.status(200).json({
      message:'Ok'
    });
  });
}