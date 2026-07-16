const path = require("path");

function getFileName(file){
    const filePath = file.path;
    const fileName = path.basename(filePath);
    return fileName;
}

function getFileName(file) {
    const filePath = typeof file === "string" ? file : file?.path;

    if (!filePath || typeof filePath !== "string") {
        throw new TypeError("Se esperaba un objeto con propiedad 'path' o un string de ruta válido.");
    }

    return path.basename(filePath);
}

module.exports = {
    getFileName,
};