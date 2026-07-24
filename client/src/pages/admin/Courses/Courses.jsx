import { map } from "lodash";

const courses = [
{ id: 1, nombre: "Desarrollo Web con React", duracion: "40 horas", estado: "Activo" },
{ id: 2, nombre: "Bases de Datos con MySQL", duracion: "30 horas", estado: "Activo" },
{ id: 3, nombre: "Introducción a Node.js", duracion: "25 horas", estado: "Inactivo" },
];

export function Courses() {
return (
<div className="ui container" style={{ marginTop: "40px" }}>
<h1 className="ui header">Gestión de Cursos</h1>

<table className="ui celled table">
<thead>
<tr>
<th>Nombre del curso</th>
<th>Duración</th>
<th>Estado</th>
</tr>
</thead>
<tbody>
{map(courses, (course) => (
<tr key={course.id}>
<td>{course.nombre}</td>
<td>{course.duracion}</td>
<td>{course.estado}</td>
</tr>
))}

</tbody>
</table>
</div>
);
}