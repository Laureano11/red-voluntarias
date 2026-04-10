/**
 * Proyectos realizados por la ONG.
 *
 * Cada proyecto puede definir carpetaImagenes y el sitio carga
 * automaticamente todas las fotos desde:
 * public/images/proyectos/<carpetaImagenes>/
 */

// @ts-ignore: Node built-in module types may not be available in editor config.
import { readdirSync, statSync } from "node:fs";
// @ts-ignore: Node built-in module types may not be available in editor config.
import { extname } from "node:path";

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

type ProyectoInput = Omit<Proyecto, "imagenes"> & {
  carpetaImagenes?: string;
  imagenes?: ImagenProyecto[];
};

const BASE_PUBLIC_IMAGES = new URL("../../public/images/proyectos/", import.meta.url);
const EXTENSIONES_IMAGEN = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

function obtenerImagenesDeCarpeta(carpeta: string, tituloProyecto: string): ImagenProyecto[] {
  try {
    const carpetaUrl = new URL(`./${carpeta}/`, BASE_PUBLIC_IMAGES);
    const nombresArchivos = readdirSync(carpetaUrl)
      .filter((nombre: string) => {
        const archivoUrl = new URL(nombre, carpetaUrl);
        return statSync(archivoUrl).isFile() && EXTENSIONES_IMAGEN.has(extname(nombre).toLowerCase());
      })
      .sort((a: string, b: string) => a.localeCompare(b, "es", { numeric: true, sensitivity: "base" }));

    return nombresArchivos.map((nombre: string, index: number) => ({
      src: `/images/proyectos/${encodeURIComponent(carpeta)}/${encodeURIComponent(nombre)}`,
      alt: `${tituloProyecto} - imagen ${index + 1}`,
    }));
  } catch {
    return [];
  }
}

const proyectosInput: ProyectoInput[] = [
  {
    id: "no-mas-perros-basural",
    titulo: "No mas perros en el basural",
    subtitulo: "Una vida no es basura",
    descripcion: [
      "Logramos sacar a todos los animales del basural y protegemos el predio con camaras y senalizacion para evitar nuevos abandonos.",
      "El basural de Carmen de Areco dejo de ser un lugar de olvido. Tras un intenso trabajo de rescate, logramos vaciar el predio de animales, pero nuestro compromiso no termino ahi.",
      "Para que la historia no se repita, instalamos camaras de seguridad y carteleria clara: una vida no es desperdicio. Custodiamos el lugar para asegurar que ningun perro vuelva a ser abandonado a su suerte en condiciones inhumanas.",
    ],
    carpetaImagenes: "BASURAL",
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
    carpetaImagenes: "TRANSPORTADORAS",
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
    carpetaImagenes: "ALCANCIAS",
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
    carpetaImagenes: "REFUGIO",
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
    carpetaImagenes: "RECICLAJE",
    videos: [],
  },
  {
    id: "concientizacion-en-jardines",
    titulo: "Concientizacion en jardines",
    subtitulo: "Sembrando respeto desde la infancia",
    descripcion: [
      "Charlas y actividades educativas en jardines de infantes sobre el cuidado responsable y el amor por los animales.",
      "Visitamos los jardines de infantes de Carmen de Areco para conversar sobre la tenencia responsable y el respeto hacia todos los seres sintientes.",
      "Agradecemos profundamente a las docentes y a instituciones como el Jardin 901, que nos abren sus puertas para ensenar a los mas chicos a empatizar, cuidar y amar a los animales.",
      "Sembrar conciencia hoy es la base para que manana no haya mas callejeritos.",
    ],
    carpetaImagenes: "JARDINES",
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
    carpetaImagenes: "CASTRACIONES",
    videos: [],
  },
];

export const proyectos: Proyecto[] = proyectosInput.map((proyecto) => ({
  id: proyecto.id,
  titulo: proyecto.titulo,
  subtitulo: proyecto.subtitulo,
  periodo: proyecto.periodo,
  descripcion: proyecto.descripcion,
  imagenes:
    proyecto.imagenes ??
    (proyecto.carpetaImagenes ? obtenerImagenesDeCarpeta(proyecto.carpetaImagenes, proyecto.titulo) : []),
  videos: proyecto.videos,
}));
