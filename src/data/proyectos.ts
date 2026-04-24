/**
 * Proyectos realizados por la ONG.
 * Las imágenes se sirven desde Cloudinary (CDN con optimización automática).
 * Para agregar fotos: subí la imagen a Cloudinary en la carpeta correspondiente
 * y agregá el nombre del archivo al array del proyecto.
 */

export type ImagenProyecto = {
  src: string;
  alt: string;
};

export type VideoProyecto = {
  titulo: string;
  youtubeId: string;
};

export type Proyecto = {
  id: string;
  titulo: string;
  subtitulo?: string;
  periodo?: string;
  descripcion: string[];
  imagenes: ImagenProyecto[];
  videos: VideoProyecto[];
};

const CLOUDINARY_CLOUD_NAME = "dxdib6s1o";
const CLOUDINARY_BASE = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`;
const TRANSFORM = "f_auto,q_auto,w_800";

/** Genera URLs de Cloudinary para una carpeta de proyecto.
 *  carpeta: nombre en minúscula tal como está en Cloudinary
 *  nombres: lista de nombres de archivo (con extensión)
 */
function cl(carpeta: string, nombres: string[], titulo: string): ImagenProyecto[] {
  return nombres.map((nombre, i) => {
    const sinExtension = nombre.replace(/\.[^.]+$/, "");
    return {
      src: `${CLOUDINARY_BASE}/${TRANSFORM}/proyectos/${carpeta}/${encodeURIComponent(sinExtension)}`,
      alt: `${titulo} - imagen ${i + 1}`,
    };
  });
}

const proyectos_data: Proyecto[] = [
  {
    id: "no-mas-perros-basural",
    titulo: "No más perros en el basural",
    subtitulo: "Una vida no es basura",
    descripcion: [
      "Logramos sacar a todos los animales del basural y protegemos el predio con camaras y senalizacion para evitar nuevos abandonos.",
      "El basural de Carmen de Areco dejo de ser un lugar de olvido. Tras un intenso trabajo de rescate, logramos vaciar el predio de animales, pero nuestro compromiso no termino ahi.",
      "Para que la historia no se repita, instalamos camaras de seguridad y carteleria clara: una vida no es desperdicio. Custodiamos el lugar para asegurar que ningun perro vuelva a ser abandonado a su suerte en condiciones inhumanas.",
    ],
    imagenes: cl("basural", [
      "IMG_4750.jpg",
      "IMG_4789.jpg",
      "IMG_4812.jpg",
      "IMG_4963.jpg",
      "IMG_6879.jpg",
      "IMG_6895.jpg",
      "IMG_6897.jpg",
      "IMG_7216.jpg",
      "IMG_7581.jpg",
      "IMG_7614.jpg",
      "IMG_7755.jpg",
      "IMG_7771.jpg",
      "Luna.png",
    ], "No más perros en el basural"),
    videos: [],
  },
  {
    id: "transportadoras-sustentables",
    titulo: "Transportadoras sustentables",
    subtitulo: "Innovacion con conciencia ambiental",
    descripcion: [
      "Detras de nuestras transportadoras hay una red de amor: familias y voluntarios que ponen su tiempo y oficio para transformar residuos en herramientas que salvan vidas.",
      "Sustentables: reutilizamos bidones de 20 litros (jabon, aceite, cloro). Nunca usamos bidones de agroquimicos.",
      "Resistentes: soportan hasta 15 kg y pasan por un proceso exhaustivo de lavado (medidas: 37x22 cm aprox).",
      "Solidarias: cada transportadora que adquiris se transforma directamente en una atencion veterinaria o una vacuna para un callejerito.",
      "Disponibles en Carmen de Areco, CABA y Arrecifes. Podes abonar en efectivo, transferencia o Cuenta DNI.",
    ],
    imagenes: cl("transportadoras", [
      "2edbd568-cffa-489a-8cba-1e03bbd1c87d.jpg",
      "4BC8A796-81CB-4D8C-9D68-4F29F31A73F7.JPG",
      "894747fa-bc29-4972-9be9-2253f4b0b632.jpg",
      "D826EA37-DEC5-4598-944F-5F4B0C2AF346.JPG",
      "IMG_1228.jpg",
      "IMG_9822.jpg",
      "IMG_9823.jpg",
      "Parche - 20.png",
    ], "Transportadoras sustentables"),
    videos: [],
  },
  {
    id: "alcancias-comunitarias",
    titulo: "Alcancias comunitarias",
    subtitulo: "Pequenos aportes, grandes cambios",
    descripcion: [
      "Una iniciativa del Centro de Dia para fomentar la solidaridad vecinal y sostener nuestras actividades diarias.",
      "Este proyecto nace de la colaboracion con los concurrentes del Centro de Dia Ines Maria Enjo, quienes fabrican y gestionan las alcancias para ayudar a los perros callejeros.",
      "A traves de esta tarea, los concurrentes potencian su autonomia, responsabilidad y estimulacion cognitiva mediante el manejo del dinero y el trabajo en la via publica. Ellos son los unicos encargados de retirar las alcancias de los comercios amigos.",
      "Todo lo recaudado se destina a la Red de Voluntarias para la atencion de los animales mas vulnerables.",
      "Si tenes un comercio, ayudanos poniendo la alcancia a la vista y cuidando el aporte de los vecinos.",
    ],
    imagenes: cl("alcancias", [
      "2D85ABDA-82C3-4004-A730-094F9C4909AE.png",
      "48E8F0A6-8424-4377-AB75-A22B63FCDF38.png",
      "62B3B3E7-947D-40C7-982B-4FE7E9390685.png",
      "91FABC1E-DC73-4EA2-A7CB-50D460538DD7.jpg",
      "A48895C6-76D3-48BF-A911-2237806896D8.jpg",
      "E044AD3A-5DAD-4F85-96DD-B6C1D4E3FE79.png",
    ], "Alcancias comunitarias"),
    videos: [],
  },
  {
    id: "visibilidad-refugio-municipal",
    titulo: "Visibilidad al refugio municipal",
    subtitulo: "Una imagen es su unica oportunidad",
    descripcion: [
      "Jornadas de fotos y videos para que los perros del refugio dejen de ser invisibles y encuentren un hogar.",
      "Hoy hay mas de 120 perros esperando una caricia que nunca llega. Ellos no eligieron estar ahi; son victimas de la indiferencia.",
      "Nuestras voluntarias dedican sus tardes a entrar a esos caniles para recargarlos de energia y capturar su esencia. A traves de fotos y videos profesionales, mostramos sus caritas al mundo.",
      "Una imagen bien lograda es, muchas veces, la unica llave que tienen para abrir la puerta de esa carcel y finalmente conocer el calor de una familia.",
    ],
    imagenes: cl("refugio", [
      "DSC04485.jpg",
      "DSC04571.jpg",
      "DSC04606.jpg",
      "DSC06148.jpg",
      "DSC06510.jpg",
      "DSC06615.jpg",
      "DSC06720.jpg",
      "DSC06797.jpg",
      "DSC06808.jpg",
      "DSC06826.jpg",
      "DSC07976.jpg",
    ], "Visibilidad al refugio municipal"),
    videos: [],
  },
  {
    id: "reciclaje-solidario",
    titulo: "Reciclaje solidario: transforma tus bolsas en alimento",
    subtitulo: "Puntos de reciclaje de bolsas Old Prince y Kongo",
    descripcion: [
      "Gracias a tu colaboracion, los envases vacios dejan de ser residuos y se convierten en raciones para los callejeritos.",
      "Por cada bolsa vacia de las marcas Old Prince o Kongo que nos entregues, la empresa nos dona 1 kg de alimento balanceado. Es una forma simple y sustentable de ayudarnos a sostener los caniles y transitos.",
      "Si estas en Capital Federal, podes coordinar la entrega de tus bolsas vacias (limpias y secas) contactandote por WhatsApp al 11 6451-5000.",
    ],
    imagenes: cl("reciclaje", [
      "test-reciclaje.jpeg",
    ], "Reciclaje solidario"),
    videos: [],
  },
  {
    id: "concientización-en-jardines",
    titulo: "Concientización en jardines",
    subtitulo: "Sembrando respeto desde la infancia",
    descripcion: [
      "Charlas y actividades educativas en jardines de infantes sobre el cuidado responsable y el amor por los animales.",
      "Visitamos los jardines de infantes de Carmen de Areco para conversar sobre la tenencia responsable y el respeto hacia todos los seres sintientes.",
      "Agradecemos profundamente a las docentes y a instituciones como el Jardin 901, que nos abren sus puertas para ensenar a los mas chicos a empatizar, cuidar y amar a los animales.",
      "Sembrar conciencia hoy es la base para que manana no haya mas callejeritos.",
    ],
    imagenes: cl("jardines", [
      "1cdc4d81-5a7f-41b7-9aa8-baa812a8487d.jpg",
      "58a1860c-3cda-424f-ba7b-3f18b57350bc.jpg",
      "IMG_7317.jpg",
      "IMG_7321.jpg",
      "IMG_7322.jpg",
      "IMG_7326.jpg",
      "df4afc84-2d05-4121-b246-7368ffa98a11.jpg",
    ], "Concientización en jardines"),
    videos: [],
  },
  {
    id: "castraciones-por-los-barrios",
    titulo: "Castraciones por los barrios",
    subtitulo: "Salud animal en cada rincon",
    descripcion: [
      "Censo y operativos de castracion gratuitos realizados en conjunto con el area de Zoonosis Municipal de Carmen de Areco.",
      "Nuestro equipo de voluntarias recorre los barrios casa por casa, realizando censos y ganando la confianza de los animales que no son de nadie.",
      "Trabajo de campo: identificamos zonas con sobrepoblacion, completamos formularios y coordinamos con Zoonosis Municipal.",
      "Resultados reales: en jornadas recientes logramos castrar mas de 20 animales en un solo dia, lo que evita miles de nacimientos no deseados en el futuro.",
      "Salud: castrar previene cancer de utero, mama, testiculos y mejora la calidad de vida de tu mascota. Castrar es un acto de responsabilidad ciudadana.",
    ],
    imagenes: cl("castraciones", [
      "6e518dd6-5fe7-4456-bfb6-11044f1c1076.jpg",
      "9e914c8c-928e-44ec-9207-f2ef506a30c8.jpg",
      "IMG_0471.jpg",
      "IMG_0510.jpg",
      "IMG_1213.jpg",
      "IMG_1240.jpg",
      "IMG_1248.jpg",
      "IMG_1260.jpg",
      "IMG_2047.jpg",
      "f39db190-6563-4059-90aa-842cf6a4a9cd.jpg",
    ], "Castraciones por los barrios"),
    videos: [],
  },
];

export const proyectos: Proyecto[] = proyectos_data;
