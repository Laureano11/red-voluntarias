/**
 * Proyectos realizados por la ONG.
 * Para agregar uno nuevo: copiá un bloque, cambiá los datos y sumá fotos en public/images/proyectos/
 *
 * Videos: usá el ID de YouTube (la parte después de v= en la URL).
 * Ejemplo: https://www.youtube.com/watch?v=dQw4w9WgXcQ → youtubeId: "dQw4w9WgXcQ"
 */

export type ImagenProyecto = {
  src: string;
  alt: string;
};

export type VideoProyecto = {
  titulo: string;
  /** ID del video en YouTube (solo el ID, sin URL completa) */
  youtubeId: string;
};

export type Proyecto = {
  /** Identificador único (útil si más adelante querés anclas en la URL) */
  id: string;
  titulo: string;
  /** Línea corta opcional: barrio, tipo de acción, etc. */
  subtitulo?: string;
  /** Cuándo ocurrió el proyecto */
  periodo?: string;
  /** Párrafos del texto (uno por elemento = un párrafo) */
  descripcion: string[];
  imagenes: ImagenProyecto[];
  videos: VideoProyecto[];
};

export const proyectos: Proyecto[] = [
  {
    id: "reciclaje-solidario",
    titulo: "Reciclaje solidario: transformá tus bolsas en alimento",
    subtitulo: "Puntos de reciclaje de bolsas Old Prince y Kongo",
    descripcion: [
      "Gracias a tu colaboración, los envases vacíos dejan de ser residuos y se convierten en raciones para los callejeritos.",
      "Por cada bolsa vacía de las marcas Old Prince o Kongo que nos entregues, la empresa nos dona 1 kg de alimento balanceado. Es una forma simple y sustentable de ayudarnos a sostener los caniles y tránsitos.",
      "Si estás en Capital Federal, podés coordinar la entrega de tus bolsas vacías (limpias y secas) contactándote por WhatsApp al 11 6451-5000.",
    ],
    imagenes: [],
    videos: [],
  },
  {
    id: "transportadoras-sustentables",
    titulo: "Transportadoras sustentables",
    subtitulo: "Innovación con conciencia ambiental",
    descripcion: [
      "Detrás de nuestras transportadoras hay una red de amor: familias y voluntarios que ponen su tiempo y oficio para transformar residuos en herramientas que salvan vidas.",
      "Sustentables: reutilizamos bidones de 20 litros (jabón, aceite, cloro). Nunca usamos bidones de agroquímicos.",
      "Resistentes: soportan hasta 15 kg y pasan por un proceso exhaustivo de lavado (medidas: 37x22 cm aprox).",
      "Solidarias: cada transportadora que adquirís se transforma directamente en una atención veterinaria o una vacuna para un callejerito.",
      "Disponibles en Carmen de Areco, CABA y Arrecifes. Podés abonar en efectivo, transferencia o Cuenta DNI.",
    ],
    imagenes: [],
    videos: [],
  },
  {
    id: "no-mas-perros-basural",
    titulo: "No más perros en el basural",
    subtitulo: "Una vida no es basura",
    descripcion: [
      "Logramos sacar a todos los animales del basural y protegemos el predio con cámaras y señalización para evitar nuevos abandonos.",
      "El basural de Carmen de Areco dejó de ser un lugar de olvido. Tras un intenso trabajo de rescate, logramos vaciar el predio de animales, pero nuestro compromiso no terminó ahí.",
      "Para que la historia no se repita, instalamos cámaras de seguridad y cartelería clara: una vida no es desperdicio. Custodiamos el lugar para asegurar que ningún perro vuelva a ser abandonado a su suerte en condiciones inhumanas.",
    ],
    imagenes: [],
    videos: [],
  },
  {
    id: "castraciones-por-los-barrios",
    titulo: "Castraciones por los barrios",
    subtitulo: "Salud animal en cada rincón",
    descripcion: [
      "Censo y operativos de castración gratuitos realizados en conjunto con el área de Zoonosis Municipal de Carmen de Areco.",
      "Nuestro equipo de voluntarias recorre los barrios casa por casa, realizando censos y ganando la confianza de los animales que no son de nadie.",
      "Trabajo de campo: identificamos zonas con sobrepoblación, completamos formularios y coordinamos con Zoonosis Municipal.",
      "Resultados reales: en jornadas recientes logramos castrar más de 20 animales en un solo día, lo que evita miles de nacimientos no deseados en el futuro.",
      "Salud: castrar previene cáncer de útero, mama, testículos y mejora la calidad de vida de tu mascota. Castrar es un acto de responsabilidad ciudadana.",
    ],
    imagenes: [],
    videos: [],
  },
  {
    id: "visibilidad-refugio-municipal",
    titulo: "Visibilidad al refugio municipal",
    subtitulo: "Una imagen es su única oportunidad",
    descripcion: [
      "Jornadas de fotos y videos para que los perros del refugio dejen de ser invisibles y encuentren un hogar.",
      "Hoy hay más de 120 perros esperando una caricia que nunca llega. Ellos no eligieron estar ahí; son víctimas de la indiferencia.",
      "Nuestras voluntarias dedican sus tardes a entrar a esos caniles para recargarlos de energía y capturar su esencia. A través de fotos y videos profesionales, mostramos sus caritas al mundo.",
      "Una imagen bien lograda es, muchas veces, la única llave que tienen para abrir la puerta de esa \"cárcel\" y finalmente conocer el calor de una familia.",
    ],
    imagenes: [],
    videos: [],
  },
  {
    id: "alcancias-comunitarias",
    titulo: "Alcancías comunitarias",
    subtitulo: "Pequeños aportes, grandes cambios",
    descripcion: [
      "Una iniciativa del Centro de Día para fomentar la solidaridad vecinal y sostener nuestras actividades diarias.",
      "Este proyecto nace de la colaboración con los concurrentes del Centro de Día Inés María Enjo, quienes fabrican y gestionan las alcancías para ayudar a los perros callejeros.",
      "A través de esta tarea, los concurrentes potencian su autonomía, responsabilidad y estimulación cognitiva mediante el manejo del dinero y el trabajo en la vía pública. Ellos son los únicos encargados de retirar las alcancías de los comercios amigos.",
      "Todo lo recaudado se destina a la Red de Voluntarias para la atención de los animales más vulnerables.",
      "Si tenés un comercio, ayudanos poniendo la alcancía a la vista y cuidando el aporte de los vecinos.",
    ],
    imagenes: [],
    videos: [],
  },
  {
    id: "concientizacion-en-jardines",
    titulo: "Concientización en jardines",
    subtitulo: "Sembrando respeto desde la infancia",
    descripcion: [
      "Charlas y actividades educativas en jardines de infantes sobre el cuidado responsable y el amor por los animales.",
      "Visitamos los jardines de infantes de Carmen de Areco para conversar sobre la tenencia responsable y el respeto hacia todos los seres sintientes.",
      "Agradecemos profundamente a las docentes y a instituciones como el Jardín 901, que nos abren sus puertas para enseñar a los más chicos a empatizar, cuidar y amar a los animales.",
      "Sembrar conciencia hoy es la base para que mañana no haya más callejeritos.",
    ],
    imagenes: [],
    videos: [],
  },
];
