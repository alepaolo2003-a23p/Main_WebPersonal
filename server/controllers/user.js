const User = require("../models/user");

async function getMe(req, res) {
    try {
        const user_id = req.user_id;
        const response = await User.findById(user_id);

        if(!response){
            return res.status(400).send({ msg: "Usuario no encontrado" });
        }
        res.status(200).send({response});
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Error al obtener al usuario" });
    }
}

async function getUsers(req, res) {
    try {
        const response = await User.find();

        if(!response){
            return res.status(400).send({ msg: "Usuarios no encontrados" });
        }
        res.status(200).send({response});
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Error al obtener los usuarios" });
    }
}

async function createUser(req, res) {
    try {
        const response = await User.create(req.body);
        res.status(200).send({ msg: "Usuario creado exitosamente", response });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Error al crear el usuario" });
    }
}

module.exports = {
    getMe,
    getUsers,
    createUser,
};