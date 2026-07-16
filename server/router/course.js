const express = require("express");
const Courseontroller = require("../controllers/course");
const ensureAuth = require("../middlewares/authenticated");
const upload = require("../middlewares/multer");

const api = express.Router();

api.post("/course", ensureAuth, upload.single("miniature"), Courseontroller.createCourse);
api.get("/course", ensureAuth, Courseontroller.getCourses);
api.put("/course/:id", ensureAuth, upload.single("miniature"), Courseontroller.updateCourse);
api.delete("/course/:id", ensureAuth, Courseontroller.deleteCourse);

module.exports = api;