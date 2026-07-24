import { map } from "lodash";

const menuItems = [
  { id: 1, nombre: "Inicio", ruta: "/", orden: 1, estado: "Activo" },
  { id: 2, nombre: "Blog", ruta: "/blog", orden: 2, estado: "Activo" },
  { id: 3, nombre: "Cursos", ruta: "/cursos", orden: 3, estado: "Activo" },
  { id: 4, nombre: "Contacto", ruta: "/contacto", orden: 4, estado: "Inactivo" },
];

export function Menu() {
  return (
    <div className="ui container" style={{ marginTop: "40px" }}>
      <h1 className="ui header">Gestión del Menú</h1>

      <table className="ui celled table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Ruta</th>
            <th>Orden</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {map(menuItems, (item) => {
            return (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{item.ruta}</td>
                <td>{item.orden}</td>
                <td>{item.estado}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}