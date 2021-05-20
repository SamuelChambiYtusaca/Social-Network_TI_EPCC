const User = require('../models/auth.model');

exports.create = (req,res) => {
    const fields = req.body
    const user = new User(fields)
    user.save((err,result) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        console.log(fields);
        return res.json(result)
    })
}

exports.list = (req,res) => {
    let order = req.query.order ? req.query.order : 'asc'
    let sortBy = req.query.sortBy ? req.query.sortBy : 'name'
  
    User.find()
      .select("-password")
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

exports.authenticate = (req,res) => {
    const { email, password } = req.body
    User.findOne({email, password})
      .select("-password")
      .exec((err, user) => {
        if (err) {
          return res.status(400).json({
            error: "Usuario no existe o no se reconoce su contraseña"
          })
        }
        console.log(user)
        res.json(user);
      })
}