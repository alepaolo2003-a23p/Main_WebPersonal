import { map } from "lodash";

const courses = [
{ id: 1, nombre: "Desarrollo Web con React", duracion: "40 horas" },
{ id: 2, nombre: "Bases de Datos con MySQL", duracion: "30 horas" },
{ id: 3, nombre: "Introducción a Node.js", duracion: "25 horas" },
];

export function Courses() {
return (
<div className="ui container" style={{ marginTop: "40px" }}>
<h1 className="ui header">Nuestros Cursos</h1>

{map(courses, (course) => (
<div className="ui segment" key={course.id}>
<h3>{course.nombre}</h3>
<p>Duración: {course.duracion}</p>
</div>
))}
</div>
);
}