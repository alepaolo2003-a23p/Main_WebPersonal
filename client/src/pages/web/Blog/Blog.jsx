import { map } from "lodash";

const posts = [
{ id: 1, titulo: "Mi primer post", resumen: "Este es el contenido de prueba del primer artículo del blog." },
{ id: 2, titulo: "Aprendiendo React Router", resumen: "Cómo organicé las rutas de mi proyecto personal." },
{ id: 3, titulo: "Trabajando con Lodash", resumen: "Por qué uso map de Lodash en vez del map nativo." },
];

export function Blog() {
return (
<div className="ui container" style={{ marginTop: "40px" }}>
<h1 className="ui header">Blog</h1>

{map(posts, (post) => (
<div className="ui segment" key={post.id}>

<h3>{post.titulo}</h3>
<p>{post.resumen}</p>
</div>
))}
</div>
);
}