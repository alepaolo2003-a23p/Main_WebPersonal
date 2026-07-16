const express = require("express");
const UserController = require("../controllers/user");
const ensureAuth = require("../middlewares/authenticated");
const upload = require("../middlewares/multer");

const api = express.Router();

api.get("/user/me", ensureAuth, UserController.getMe);
api.get("/users", ensureAuth, UserController.getUsers);
api.post("/user", ensureAuth, upload.single("avatar"), UserController.createUser);
api.put("/user/:id", ensureAuth, upload.single("avatar"), UserController.updateUser);

module.exports = api;