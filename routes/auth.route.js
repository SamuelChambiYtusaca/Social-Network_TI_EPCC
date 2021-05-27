const express = require('express');
const router = express.Router();
const { create, list, signin } = require('../controllers/auth.controller.js')
//Exporta rutas

router.post('/register', create)
router.get('/list', list)
router.post('/signin', signin)
module.exports = router;