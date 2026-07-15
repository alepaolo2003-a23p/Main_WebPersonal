require('dotenv').config();
const mongoose = require("mongoose");
const app = require ("./app");
const MONGO_URI = `mongodb://73470109_db_user:AhuRAZdnJhjX5hTY@ac-qwhoe99-shard-00-00.uazflao.mongodb.net:27017,ac-qwhoe99-shard-00-01.uazflao.mongodb.net:27017,ac-qwhoe99-shard-00-02.uazflao.mongodb.net:27017/?ssl=true&replicaSet=atlas-13ohjw-shard-0&authSource=admin&appName=Cluster0`;
const {API_VERSION,IP_SERVER} = require("./constants");
const PORT = process.env.PORT || 3977;  
console.log("===LA URI DETECTADA ES ==>",MONGO_URI);

mongoose.connect(MONGO_URI)
    .then(() =>{
        //console.log("La conexion con la base de datos ha sido exitosa");
        app.listen(PORT, ()=>{
            console.log("########################");
            console.log("########API REST########");
            console.log("########################");
            console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}`)
        });
    })
    .catch((error)=>{
        console.error("Error de conexion:", error.message);
    });