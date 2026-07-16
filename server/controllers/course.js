const Course = require("../models/course");

async function createCourse(req, res) {
try {
const courseData = req.body;

if (req.file) {

courseData.miniature = req.file.filename;
}

const course = new Course(courseData);
const courseSaved = await course.save();
res.status(200).send(courseSaved);
} catch (error) {
res.status(400).send({ msg: "Error al crear el curso" });
}
}

async function getCourses(req, res) {
try {
const courses = await Course.find().sort({ createdAt: "desc" });

if (!courses || courses.length === 0) {
return res.status(404).send({ msg: "No se ha encontrado ningún curso"
});
}

res.status(200).send(courses);
} catch (error) {
res.status(400).send({ msg: "Error al obtener los cursos" });
}

}

async function updateCourse(req, res) {
try {
const { id } = req.params;
const courseData = req.body;

if (req.file) {
courseData.miniature = req.file.filename;
}

const courseUpdated = await Course.findByIdAndUpdate(id, courseData, {
new: true });

if (!courseUpdated) {
return res.status(404).send({ msg: "No se encontró el curso a actualizar"
});
}

res.status(200).send(courseUpdated);
} catch (error) {
res.status(400).send({ msg: "Error al actualizar el curso" });
}
}

async function deleteCourse(req, res) {
try {
const { id } = req.params;

const courseDeleted = await Course.findByIdAndDelete(id);

if (!courseDeleted) {
return res.status(404).send({ msg: "No se encontró el curso a eliminar"
});
}

res.status(200).send({ msg: "Curso eliminado correctamente", course:
courseDeleted });
} catch (error) {
res.status(400).send({ msg: "Error al eliminar el curso" });
}
}

module.exports = {
createCourse,
getCourses,
updateCourse,
deleteCourse,
};