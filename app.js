


const featuredGrid =
  document.getElementById("featured-grid");

const placesGrid =
  document.getElementById("places-grid");

const search =
  document.getElementById("search");

const resultCount =
  document.getElementById("result-count");


function placeholder(nombre) {

  return `
    <div
      style="
        width:100%;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        color:#777;
        font-size:12px;
        letter-spacing:2px;
        text-transform:uppercase;
      "
    >
      ${nombre}
    </div>
  `;

}


function featuredCard(lugar) {

  return `
    <a
      href="lugar.html?id=${lugar.id}"
      class="featured-card"
    >

      ${
        lugar.imagen
        ? `<img
            src="${lugar.imagen}"
            alt="${lugar.nombre}"
            loading="lazy"
          >`
        : placeholder(lugar.nombre)
      }

      <div class="featured-info">

        <small>${lugar.tipo}</small>

        <h3>${lugar.nombre}</h3>

        <p>📍 ${lugar.ubicacion}</p>

      </div>

    </a>
  `;

}


function placeCard(lugar) {

  return `
    <a
      href="lugar.html?id=${lugar.id}"
      class="place-card"
    >

      <div class="place-image">

        ${
          lugar.imagen
          ? `<img
              src="${lugar.imagen}"
              alt="${lugar.nombre}"
              loading="lazy"
            >`
          : placeholder(lugar.nombre)
        }

      </div>

      <div class="place-info">

        <div class="place-type">
          ${lugar.tipo}
        </div>

        <h3>
          ${lugar.nombre}
        </h3>

        <div class="place-location">
          📍 ${lugar.ubicacion}
        </div>

        <p class="place-description">
          ${lugar.descripcion}
        </p>

      </div>

    </a>
  `;

}


function renderFeatured() {

  featuredGrid.innerHTML =
    lugares
      .slice(0, 3)
      .map(featuredCard)
      .join("");

}


function renderPlaces(lista) {

  resultCount.textContent =
    `${lista.length} lugares`;

  placesGrid.innerHTML =
    lista
      .map(placeCard)
      .join("");

}


function buscar() {

  const texto =
    search.value
      .trim()
      .toLowerCase();

  const resultado =
    lugares.filter(lugar => {

      return (
        lugar.nombre.toLowerCase().includes(texto) ||
        lugar.ubicacion.toLowerCase().includes(texto) ||
        lugar.tipo.toLowerCase().includes(texto) ||
        lugar.descripcion.toLowerCase().includes(texto)
      );

    });

  renderPlaces(resultado);

}


if (search) {
  search.addEventListener(
    "input",
    buscar
  );
}

document
  .querySelectorAll(".category-card")
  .forEach(button => {

    button.addEventListener("click", () => {

      const categoria =
        button.dataset.category;

      const resultado =
        lugares.filter(
          lugar => lugar.tipo === categoria
        );

      renderPlaces(resultado);

      const lugaresSection =
        document.getElementById("lugares");

      if (lugaresSection) {
        lugaresSection.scrollIntoView({
          behavior: "smooth"
        });
      }

    });

  });


if (featuredGrid) {
  renderFeatured();
}

if (placesGrid) {
  renderPlaces(lugares);
}

const params = new URLSearchParams(window.location.search);
const lugarId = params.get("id");

if (lugarId) {

  const lugar = lugares.find(
    item => item.id === lugarId
  );

  const contenido =
    document.getElementById("lugar-contenido");

  if (contenido && lugar) {

    document.title =
      `${lugar.nombre} | Lugares Abandonados`;

    contenido.innerHTML = `

      <section class="lugar-hero">

        <div class="lugar-imagen">

          ${
            lugar.imagen
            ? `<img
                src="${lugar.imagen}"
                alt="${lugar.nombre}"
              >`
            : placeholder(lugar.nombre)
          }

        </div>

        <div class="lugar-info">

          <div class="place-type">
            ${lugar.tipo}
          </div>

          <h1>
            ${lugar.nombre}
          </h1>

          <p>
            📍 ${lugar.ubicacion}
          </p>

          <p>
            📅 ${lugar.anio}
          </p>

        </div>

      </section>


      <section class="lugar-texto">

        <h2>Sobre este lugar</h2>

        <p>
          ${lugar.descripcion}
        </p>

      </section>

    `;

  }

}
