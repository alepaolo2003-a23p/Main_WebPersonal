import { map } from "lodash";

const suscriptores = [
{ id: 1, correo: "maria.lopez@gmail.com", fechaSuscripcion: "2026-01-15", estado: "Activo" },
{ id: 2, correo: "carlos.ruiz@hotmail.com", fechaSuscripcion: "2026-02-03", estado: "Activo"
},
{ id: 3, correo: "ana.torres@yahoo.com", fechaSuscripcion: "2026-02-20", estado:
"Cancelado" },
];

export function Newsletter() {
return (
<div className="ui container" style={{ marginTop: "40px" }}>
<h1 className="ui header">Gestión de Newsletter</h1>

<table className="ui celled table">
<thead>
<tr>
<th>Correo</th>
<th>Fecha de suscripción</th>
<th>Estado</th>
</tr>
</thead>
<tbody>
{map(suscriptores, (item) => (
<tr key={item.id}>
<td>{item.correo}</td>
<td>{item.fechaSuscripcion}</td>
<td>{item.estado}</td>
</tr>
))}
</tbody>
</table>
</div>
);
}