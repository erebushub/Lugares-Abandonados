const featuredGrid =
  document.getElementById("featured-grid");

const placesGrid =
  document.getElementById("places-grid");

const search =
  document.getElementById("search");

const resultCount =
  document.getElementById("result-count");

const lugarContenido =
  document.getElementById("lugar-contenido");


// ========================================
// UTILIDADES
// ========================================

function placeholder(nombre) {
  return `
    <div class="image-placeholder">
      ${nombre}
    </div>
  `;
}


// ========================================
// TARJETA DESTACADA
// ========================================

function featuredCard(lugar) {

  return `
    <a
      href="/Lugares-Abandonados/lugar.html?id=${lugar.id}"
      class="featured-card"
    >

      ${
        lugar.imagen
          ? `
            <img
              src="${lugar.imagen}"
              alt="${lugar.nombre}"
              loading="lazy"
            >
          `
          : placeholder(lugar.nombre)
      }

      <div class="featured-info">

        <small>
          ${lugar.tipo}
        </small>

        <h3>
          ${lugar.nombre}
        </h3>

        <p>
          📍 ${lugar.ubicacion}
        </p>

      </div>

    </a>
  `;
}


// ========================================
// TARJETA NORMAL
// ========================================

function placeCard(lugar) {

  return `
    <a
      href="/Lugares-Abandonados/lugar.html?id=${lugar.id}"
      class="place-card"
    >

      <div class="place-image">

        ${
          lugar.imagen
            ? `
              <img
                src="${lugar.imagen}"
                alt="${lugar.nombre}"
                loading="lazy"
              >
            `
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


// ========================================
// HOME — DESTACADOS
// ========================================

function renderFeatured() {

  if (!featuredGrid) {
    return;
  }

  featuredGrid.innerHTML =
    lugares
      .slice(0, 3)
      .map(featuredCard)
      .join("");

}


// ========================================
// HOME — TODOS LOS LUGARES
// ========================================

function renderPlaces(lista) {

  if (!placesGrid) {
    return;
  }

  if (resultCount) {
    resultCount.textContent =
      `${lista.length} lugares`;
  }

  placesGrid.innerHTML =
    lista
      .map(placeCard)
      .join("");

}


// ========================================
// BUSCADOR
// ========================================

function buscar() {

  if (!search) {
    return;
  }

  const texto =
    search.value
      .trim()
      .toLowerCase();

  const resultado =
    lugares.filter(lugar => {

      return (
        lugar.nombre
          .toLowerCase()
          .includes(texto) ||

        lugar.ubicacion
          .toLowerCase()
          .includes(texto) ||

        lugar.tipo
          .toLowerCase()
          .includes(texto) ||

        lugar.descripcion
          .toLowerCase()
          .includes(texto)
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


// ========================================
// CATEGORÍAS
// ========================================

document
  .querySelectorAll(".category-card")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const categoria =
          button.dataset.category;

        const resultado =
          lugares.filter(
            lugar =>
              lugar.tipo === categoria
          );

        renderPlaces(resultado);

        const lugaresSection =
          document.getElementById("lugares");

        if (lugaresSection) {

          lugaresSection.scrollIntoView({
            behavior: "smooth"
          });

        }

      }
    );

  });


// ========================================
// FICHA INDIVIDUAL
// ========================================

function renderLugar() {

  if (!lugarContenido) {
    return;
  }

  const params =
    new URLSearchParams(
      window.location.search
    );

  const lugarId =
    params.get("id");

  if (!lugarId) {
    return;
  }

  const lugar =
    lugares.find(
      item => item.id === lugarId
    );

  if (!lugar) {

    lugarContenido.innerHTML = `
      <div class="lugar-no-encontrado">
        <h1>Lugar no encontrado</h1>

        <p>
          El lugar que buscas no existe.
        </p>

        <a href="index.html">
          ← Volver a lugares
        </a>
      </div>
    `;

    return;
  }


  document.title =
    `${lugar.nombre} | Lugares Abandonados`;


  lugarContenido.innerHTML = `

    <section class="lugar-hero">

      <div class="lugar-imagen">

        ${
          lugar.imagen
            ? `
              <img
                src="${lugar.imagen}"
                alt="${lugar.nombre}"
              >
            `
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

      <h2>
        Sobre este lugar
      </h2>

      <p>
        ${lugar.descripcion}
      </p>

    </section>

  `;

}


// ========================================
// INICIALIZACIÓN
// ========================================

renderFeatured();

renderPlaces(lugares);

renderLugar();
