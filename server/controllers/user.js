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
    res.status(200).send({ msg: "TODO OK" });
}

async function createUser(req, res) {
    res.status(200).send({ msg: "TODO OK" });
}

module.exports = {
    getMe,
    getUsers,
    createUser,
};