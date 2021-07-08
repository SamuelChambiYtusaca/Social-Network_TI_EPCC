const express = require('express');
const router = express.Router();
const { create, list, search } = require('../controllers/post.controller.js')
//Exporta rutas

router.post('/create', create)
router.get('/list', list)
router.post('/search', search)
module.exports = router;