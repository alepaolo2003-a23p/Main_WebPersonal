const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt= require("../utils/jwt");

function register(req,res){
    const { firstname, lastname, email, password} = req.body;
    if(!email) res.status(400).send({ msg: "El email es obligatorio"});
    if(!password) res.status(400).send({ msg: "La contraseña es obligatoria"});
    //console.log("Datos recibidos", req.body);
    
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const user = new User({
        firstname,
        lastname,
        email: email.toLowerCase(),
        role: "user",
        active: false,
        password: hashPassword,
    });
    
    
    console.log(password);
    console.log(hashPassword);

    user.save((error, userStorage) =>{
        if(error){
            res.status(400).send({ msg: "Error al crear al usuario"});
        }else{
            res.status(200).send(userStorage);
        }
    })

    //res.status(200).send({ msg:"TODO OK" });
}

function login(req, res) {
    const { email, password } = req.body;
    if (!email) return res.status(400).send({ msg: "El email es obligatorio" });
    if (!password) return res.status(400).send({ msg: "La contraseña es obligatoria" });
    const emailLowerCase = email.toLowerCase();

    User.findOne({ email: emailLowerCase }, (error, userStorage) => {
        if (error) {
            res.status(500).send({ msg: "Error del servidor" });
        } else {
            bcrypt.compare(password, userStorage.password, (error, check) => {
                if (error) {
                    res.status(500).send({ msg: "Error del servidor" });
                } else if (!check) {
                    res.status(400).send({ msg: "Contraseña incorrecta" });
                } else if (!userStorage.active) {
                    res.status(401).send({ msg: "Usuario no autorizado o no activo" });
                } else {
                    const access = jwt.createAccessToken(userStorage);
                    const refresh = jwt.createRefreshToken(userStorage);

                    res.status(200).send({
                        msg: "Login correcto",
                        user: userStorage,
                        access,
                        refresh
                    });
                }
            });
        }
    });
}

module.exports = {
    register,
    login,
};
