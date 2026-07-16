const Menu = require("../models/menu");

async function createMenu(req, res) {
    try {
        const menu = new Menu(req.body);
        const menuSaved = await menu.save();
        res.status(200).send(menuSaved);
    } catch (error) {
        res.status(400).send({ msg:"Error al crear el menu" });
    }
}

async function getMenus(req, res) {
try {
const { active } = req.query;
let response = null;

if (active === undefined) {
response = await Menu.find().sort({ order: "asc" });
} else {
response = await Menu.find({ active: active === "true" }).sort({ order: "asc" });
}

if (!response || response.length === 0) {
return res.status(404).send({ msg: "No se ha encontrado ningún menú"
});
}

res.status(200).send(response);
} catch (error) {
res.status(400).send({ msg: "Error al obtener los menús" });
}
}

async function updateMenu(req, res) {
try {
const { id } = req.params;
const menuData = req.body;

const menuUpdated = await Menu.findByIdAndUpdate(id, menuData, {
new: true });

if (!menuUpdated) {
return res.status(404).send({ msg: "No se encontró el menú actualizar" });
}

res.status(200).send(menuUpdated);
} catch (error) {
res.status(400).send({ msg: "Error al actualizar el menú" });
}
}

async function deleteMenu(req, res) {
try {
    const { id } = req.params;

    const menuDeleted = await Menu.findByIdAndDelete(id);

    if (!menuDeleted) {
        return res.status(404).send({ msg: "No se encontró el menú a eliminar" });
        }

        res.status(200).send({ msg: "Menú eliminado correctamente", menu: menuDeleted });
        } catch (error) {
        res.status(400).send({ msg: "Error al eliminar el menú" });
        }
}

module.exports = {
    createMenu,
    getMenus,
    updateMenu,
    deleteMenu,
};