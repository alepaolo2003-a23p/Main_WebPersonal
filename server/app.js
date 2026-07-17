const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const {API_VERSION} = require("./constants");

const app = express();

const AuthRoutes = require("./router/auth");
const UserRoutes = require("./router/user");
const MenuRoutes = require("./router/menu");
const CourseRoutes = require("./router/course");
const PostRoutes = require("./router/post");
const NewsletterRoutes = require("./router/newsletter");

app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use(express.static("uploads"));


console.log("AuthRoutes", AuthRoutes);
console.log("Tipo:", typeof AuthRoutes);

app.use(`/api/${API_VERSION}`, AuthRoutes);
app.use(`/api/${API_VERSION}`, UserRoutes);
app.use(`/api/${API_VERSION}`, MenuRoutes);
app.use(`/api/${API_VERSION}`, CourseRoutes);
app.use(`/api/${API_VERSION}`, PostRoutes);
app.use(`/api/${API_VERSION}`, NewsletterRoutes);

module.exports = app;