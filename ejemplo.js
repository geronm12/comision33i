const tarjeta = (
  url,
  titulo,
  cuerpo
) => `<div class="card" style="width: 18rem;">
<img src="${url}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${titulo}</h5>
  <p class="card-text">${cuerpo}</p>
  <a href="#" class="btn btn-primary">Ver más</a>
</div>
</div>`;

const peliculas = [
  {
    titulo: "Spider-man",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spider-Man.jpg/1200px-Spider-Man.jpg",
    descripcion: "descripcion spiderman",
  },
  {
    titulo: "Spider-man 2",
    url: "https://i.blogs.es/e65b90/spiderman2/1366_2000.jpg",
    descripcion: "descripcion spiderman 2",
  },
  { titulo: "Spider-man 3", url: "", descripcion: "descripcion spiderman 3" },
];

let htmlString = "";

for (let index = 0; index < peliculas.length; index++) {
  const elemento = peliculas[index];
  htmlString += tarjeta(elemento.url, elemento.titulo, elemento.descripcion);
}

const app = document.getElementById("app");

app.innerHTML = htmlString;
