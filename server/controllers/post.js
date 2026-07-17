const Post = require("../models/post");
const image = require("../utils/image");

async function createPost(req, res) {
    try {
        if (!req.file) {
            return res.status(400).send({ msg: "No se envió ninguna imagen" });
        }

        const post = new Post(req.body);
        post.created_at = new Date();

        const imagePath = image.getFileName(req.file);
        post.miniature = imagePath;

        const postStored = await post.save();

        return res.status(201).send(postStored);
    } catch (error) {
        return res.status(400).send({ msg: "Error al crear el post", error: error.message });
    }
}

const getPosts = async (req, res) => {
try {

const page = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit) || 10;

const options = {
page,
limit,
sort: { created_at: -1 },
};

const posts = await Post.paginate({}, options);

return res.status(200).json(posts);
} catch (error) {
return res.status(500).json({
message: "Error al obtener los posts",
error: error.message,
});
}
};

const updatePost = async (req, res) => {
    try {
    const { id } = req.params;
    const { title, content, path } = req.body;

    const updateData = { title, content, path };

    // Solo actualiza la imagen si el usuario subió una nueva
    if (req.file) {
    updateData.miniature = req.file.filename;
    }

    const updatedPost = await Post.findByIdAndUpdate(
    id,
    updateData,
    { new: true, runValidators: true }
    );

    if (!updatedPost) {
    return res.status(404).json({ message: "Post no encontrado" });
    }

    return res.status(200).json({
    message: "Post actualizado correctamente",

    post: updatedPost,
    });
        } catch (error) {
            return res.status(500).json({
            message: "Error al actualizar el post",
            error: error.message,
        });
    }
};

const deletePost = async (req, res) => {
try {
const { id } = req.params;
const deletedPost = await Post.findByIdAndDelete(id);

if (!deletedPost) {
return res.status(404).json({ message: "Post no encontrado" });
}

return res.status(200).json({
message: "Post eliminado correctamente",
});

} catch (error) {
return res.status(500).json({
message: "Error al eliminar el post",
error: error.message,
});
}
};

const getPostByPath = async (req, res) => {
try {
const { path } = req.query;

if (!path) {
return res.status(400).json({ message: "Debes enviar el parámetro 'path' en la query string" });
}

const post = await Post.findOne({ path });

if (!post) {
return res.status(404).json({ message: "Post no encontrado" });
}

return res.status(200).json(post);
} catch (error) {
return res.status(500).json({
message: "Error al obtener el post",
error: error.message,
});
}
};

module.exports = {
    createPost,
    getPosts,
    updatePost,
    deletePost,
    getPostByPath,
};
