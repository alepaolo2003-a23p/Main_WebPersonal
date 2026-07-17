const express = require('express');
const PostController = require('../controllers/post'); // ajusta la ruta según tu proyecto
const {ensureAuth} = require('../middlewares/authenticated'); // ajusta la ruta según tu proyecto
const upload = require('../middlewares/multer'); // ajusta la ruta según tu proyecto

const md_upload = upload.single('miniature');
const api = express.Router();

api.post('/create', [ensureAuth, md_upload], PostController.createPost);

module.exports = api;