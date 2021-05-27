const User = require('../models/auth.model');
const formidable = require('formidable');
const jwt = require('jsonwebtoken')

exports.create = (req,res) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, (err, fields) => {
    if (err) {
      return res.status(400).json({
        error: "Algo salió mal al formar el parse"
      })
    }
    const user = new User(fields)
    user.save((err,result) => {
      if (err) {
        return res.status(400).json({
          error: err
        })
      }
      const { name, surname, email } = result;
      return res.json({name: name, surname: surname, email: email})
    })
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
    console.log(email, password)
    User.findOne({email}, (error, user) => {
      if (error||!user) {
        return res.status(400).json({
          error: 'Este email no está registrado'
        });
      }
      // if user is found make sure the email and password match
      // create authenticate method in user model
      if (!user.authenticate(password)) {
        return res.status(401).json({
          error: 'Contraseña incorrecta'
        });
      }
  
      const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET)
      // persist the token as 't' in cookie with expiration date
      res.cookie('t', token, {expire: new Date() + 9999})
      // return response with user and token to frontend client
      const {_id, name, surname, email} = user;
      return res.json({
        token,
        user: { _id, name, surname, email},
        domain: 'EPCC'
      })
    });
}