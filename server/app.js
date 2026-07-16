const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {API_VERSION} = require("./constants");

const app = express();

const AuthRoutes = require("./router/auth");
const UserRoutes = require("./router/user");
const MenuRoutes = require("./router/menu");
const CourseRoutes = require("./router/course");

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use(express.static("uploads"));

app.use(cors({
    origin: "http://localhost:3000"
}));

console.log("AuthRoutes", AuthRoutes);
console.log("Tipo:", typeof AuthRoutes);

app.use(`/api/${API_VERSION}`, AuthRoutes);
app.use(`/api/${API_VERSION}`, UserRoutes);
app.use(`/api/${API_VERSION}`, MenuRoutes);
app.use(`/api/${API_VERSION}`, CourseRoutes);

module.exports = app;