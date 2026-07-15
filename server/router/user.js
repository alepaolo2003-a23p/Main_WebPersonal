const express = require("express");
const UserController = require("../controllers/user");
const ensureAuth = require("../middlewares/authenticated");

const api = express.Router();

api.get("/user/me", ensureAuth, UserController.getMe);
api.get("/users", ensureAuth, UserController.getUsers);
api.post("/user", ensureAuth, UserController.createUser);

module.exports = api;