const lugares = [
  {
    id: "esp-yera",
    nombre: "Estación abandonada de Yera",
    ubicacion: "Vega de Pas, Cantabria",
    tipo: "Estaciones",
    anio: "Siglo XX",
    descripcion:
      "Antigua estación de la línea Santander-Mediterráneo, situada junto al túnel de La Engaña.",
    imagen:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Disused_station_of_Yera.jpg"
  },

  {
    id: "esp-villanua",
    nombre: "Estación de Villanúa-Letranz",
    ubicacion: "Villanúa, Huesca",
    tipo: "Estaciones",
    anio: "1922",
    descripcion:
      "Antigua estación ferroviaria de la línea Zaragoza-Canfranc.",
    imagen:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Estaci%C3%B3n_de_Villan%C3%BAa-Letranz.jpg"
  },

  {
    id: "esp-ripoll",
    nombre: "Antigua estación de Ripoll",
    ubicacion: "Ripoll, Girona",
    tipo: "Estaciones",
    anio: "Siglo XX",
    descripcion:
      "Antiguo edificio ferroviario de las instalaciones de Ripoll.",
    imagen:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Derelict_station_in_Ripoll%2C_Catalonia.jpg"
  },

  {
    id: "esp-asland",
    nombre: "Antigua fábrica de cemento Asland",
    ubicacion: "Castellar de N'Hug, Barcelona",
    tipo: "Fábricas",
    anio: "1901",
    descripcion:
      "Antigua fábrica de cemento situada en el valle del Llobregat.",
    imagen: ""
  },

  {
    id: "esp-nitrastur",
    nombre: "Fábrica Nitrastur",
    ubicacion: "Langreo, Asturias",
    tipo: "Fábricas",
    anio: "Siglo XX",
    descripcion:
      "Antiguo complejo industrial relacionado con la producción química y minera asturiana.",
    imagen: ""
  },

  {
    id: "esp-algarrobico",
    nombre: "Hotel El Algarrobico",
    ubicacion: "Carboneras, Almería",
    tipo: "Hoteles",
    anio: "2000s",
    descripcion:
      "Gran complejo hotelero construido junto al litoral de Almería que quedó paralizado.",
    imagen: ""
  },

  {
    id: "esp-hotel-parque",
    nombre: "Hotel Parque",
    ubicacion: "Lanjarón, Granada",
    tipo: "Hoteles",
    anio: "Siglo XX",
    descripcion:
      "Antiguo establecimiento hotelero situado en Lanjarón.",
    imagen: ""
  },

  {
    id: "esp-valsequillo",
    nombre: "Estación de Valsequillo",
    ubicacion: "Valsequillo, Córdoba",
    tipo: "Estaciones",
    anio: "Siglo XX",
    descripcion:
      "Antigua estación ferroviaria actualmente fuera de servicio.",
    imagen:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Estaci%C3%B3n_de_Valsequillo.jpg"
  },

  {
    id: "esp-harinas",
    nombre: "Antigua fábrica de harinas",
    ubicacion: "Palma del Río, Córdoba",
    tipo: "Fábricas",
    anio: "Siglo XX",
    descripcion:
      "Antigua instalación industrial relacionada con la producción de harinas.",
    imagen:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Antigua_f%C3%A1brica_de_Harinas%2C_calle_Barradas.jpg"
  },

  {
    id: "esp-caniles",
    nombre: "Azucarera Nuestra Señora de las Mercedes",
    ubicacion: "Caniles, Granada",
    tipo: "Fábricas",
    anio: "Siglo XX",
    descripcion:
      "Antigua instalación azucarera de la provincia de Granada.",
    imagen: ""
  },

  {
    id: "esp-saler",
    nombre: "Fábrica abandonada al Saler",
    ubicacion: "El Saler, Valencia",
    tipo: "Fábricas",
    anio: "Siglo XX",
    descripcion:
      "Antigua instalación industrial documentada en la zona de El Saler.",
    imagen: ""
  },

  {
    id: "esp-lezáun",
    nombre: "Edificio abandonado de Lezáun",
    ubicacion: "Lezáun, Navarra",
    tipo: "Edificios",
    anio: "Siglo XX",
    descripcion:
      "Edificio abandonado documentado en la localidad navarra de Lezáun.",
    imagen:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Lez%C3%A1un_03.jpg"
  },

  {
    id: "esp-pena-seo",
    nombre: "Poblado minero de Peña del Seo",
    ubicacion: "León",
    tipo: "Pueblos abandonados",
    anio: "Siglo XX",
    descripcion:
      "Antiguo poblado vinculado a la actividad minera.",
    imagen:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Poblado_Minero_Pe%C3%B1a_del_Seo_II.jpg"
  }
];


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


search.addEventListener(
  "input",
  buscar
);


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

      document
        .getElementById("lugares")
        .scrollIntoView({
          behavior: "smooth"
        });

    });

  });


renderFeatured();
renderPlaces(lugares);
