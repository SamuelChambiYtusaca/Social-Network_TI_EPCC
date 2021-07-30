const express = require('express');
const router = express.Router();
const { create, list, signin, modify, data, UserById } = require('../controllers/auth.controller.js')
//Exporta rutas

router.post('/signup', create)
router.get('/list', list)
router.post('/signin', signin)
router.post('/modify', modify)
router.get('/data/:UserId', data);

router.param('UserId', UserById);
module.exports = router;