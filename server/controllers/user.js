const bcrypt = require("bcryptjs");
const User = require("../models/user");
const image = require("../utils/image");

async function getMe(req, res) {
    try {
        const user_id = req.user_id;
        const response = await User.findById(user_id);

        if (!response) {
            return res.status(400).send({ msg: "No se ha encontrado usuario" });
        }

        res.status(200).send({ response });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Error al obtener el usuario" });
    }
}

async function getUsers(req, res) {
    try {
        const { active } = req.query;
        let response = null;

        if (active === undefined) {
            response = await User.find();
        } else {
            response = await User.find({ active: active === "true" });
        }

        res.status(200).send({ response });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Error al obtener los usuarios" });
    }
}

async function createUser(req, res) {
    try {
        const { firstname, lastname, email, password, role, active } = req.body;
        const file = req.file;

        if (!firstname || !lastname || !email || !password) {
            return res.status(400).send({ msg: "Faltan campos obligatorios" });
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const avatarName = file ? image.getFileName(file) : null;

        const newUser = new User({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            role: role || "user",
            active: active === "true" || active === true,
            avatar: avatarName,
        });

        const userSaved = await newUser.save();

        res.status(201).send({
            msg: "Usuario creado correctamente",
            user: userSaved
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Error al crear el usuario" });
    }
}

async function updateUser(req, res) {
    try {
        const { id } = req.params;
        const userData = { ...req.body };

        if (userData.password) {
            const salt = bcrypt.genSaltSync(10);
            userData.password = bcrypt.hashSync(userData.password, salt);
        }

        const file = req.file;
        if (file) {
            userData.avatar = file.filename;
        }

        const updatedUser = await User.findByIdAndUpdate(id, userData, { new: true });

        if (!updatedUser) {
            return res.status(400).send({ msg: "No se ha encontrado usuario" });
        }

        res.status(200).send({ msg: "Actualización correcta", user: updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Error al actualizar el usuario" });
    }
}

async function deleteUser(req, res) {
try {
const { id } = req.params;

const deletedUser = await User.findByIdAndDelete(id);

if (!deletedUser) {
return res.status(400).send({ msg: "No se ha encontrado usuario" });
}

res.status(200).send({ msg: "Usuario eliminado correctamente", user:
deletedUser });

} catch (error) {
console.error(error);
res.status(500).send({ msg: "Error al eliminar el usuario" });
}
}

module.exports = {
    getMe,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
};