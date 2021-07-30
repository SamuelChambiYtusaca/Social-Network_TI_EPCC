const express = require('express');
const router = express.Router();
const { create, list, search, postsByUser, UserById } = require('../controllers/post.controller.js')
//Exporta rutas

router.post('/create', create)
router.get('/list', list)
router.post('/search', search)
router.get('/postsbyuser/:UserId', postsByUser);

router.param('UserId', UserById);
module.exports = router;