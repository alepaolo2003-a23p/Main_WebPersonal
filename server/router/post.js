const express = require('express');
const PostController = require('../controllers/post');
const ensureAuth = require('../middlewares/authenticated');
const upload = require('../middlewares/multer');

const md_upload = upload.single('miniature');
const api = express.Router();

api.post('/post', [ensureAuth, md_upload], PostController.createPost);
api.get('/post', PostController.getPosts);
api.get('/post/path', PostController.getPostByPath);
api.put('/post/:id', [ensureAuth, md_upload], PostController.updatePost);
api.delete('/post/:id', ensureAuth, PostController.deletePost);

module.exports = api;