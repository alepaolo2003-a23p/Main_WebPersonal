require('dotenv').config();
const mongoose = require("mongoose");
const app = require("./app");
const { DB_USER, DB_PASSWORD, DB_HOST, API_VERSION, IP_SERVER } = require("./constants");

const MONGO_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/test?ssl=true&replicaSet=atlas-13ohjw-shard-0&authSource=admin&appName=Cluster0`;

const PORT = process.env.PORT || 3977;

mongoose.connect(MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log("########################");
            console.log("########API REST########");
            console.log("########################");
            console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}`);
        });
    })
    .catch((error) => {
        console.error("Error de conexion:", error.message);
    });