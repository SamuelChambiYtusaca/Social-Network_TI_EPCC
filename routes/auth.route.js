const express = require('express');
const router = express.Router();
//Exporta rutas
const {
    create, list, authenticate
} = require('../controllers/auth.controller.js')

router.post('/register', create)
router.get('/list', list)
router.post('/login', authenticate)
module.exports = router;