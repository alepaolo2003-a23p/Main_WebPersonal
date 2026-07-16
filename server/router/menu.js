const express = require("express");
const MenuController = require("../controllers/menu");
const md_auth = require("../middlewares/authenticated");

const api = express.Router();

console.log("md_auth", md_auth);
console.log("MenuController.createMenu", MenuController.createMenu);

api.post("/menu", [md_auth], MenuController.createMenu);
api.get("/menu", [md_auth], MenuController.getMenus);
api.put("/menu/:id", [md_auth], MenuController.updateMenu);
api.delete("/menu/:id", [md_auth], MenuController.deleteMenu);

module.exports = api;