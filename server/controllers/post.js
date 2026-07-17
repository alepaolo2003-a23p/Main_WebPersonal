const Post = require("../models/post"); // ajusta la ruta según tu proyecto
const image = require("../utils/image"); // ajusta la ruta según tu proyecto

async function createPost(req, res) {
try {
if (!req.files || !req.files.miniature) {
return res.status(400).send({ msg: "No se envió ninguna imagen" });
}

const post = new Post(req.body);
post.created_at = new Date();

const imagePath = image.getFileName(req.files.miniature);
post.miniature = imagePath;

const postStored = await post.save();

return res.status(201).send(postStored);
} catch (error) {
return res.status(400).send({ msg: "Error al crear el post", error: error.message });
}
}