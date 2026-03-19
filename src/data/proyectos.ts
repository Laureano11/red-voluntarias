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
    id: "campaña-esterilizacion-barrio-norte",
    titulo: "Campaña de esterilización masiva — Barrio Norte",
    subtitulo: "Operativo gratuito en conjunto con veterinarias aliadas",
    periodo: "Octubre 2024",
    descripcion: [
      "Durante un fin de semana integramos un operativo de castración y vacunación para perros y gatos de familias del barrio, priorizando quienes no podían acceder a un veterinario de forma regular.",
      "Más de 80 animales fueron atendidos gracias al trabajo de voluntarios que coordinaron turnos, traslados y difusión puerta a puerta. El objetivo fue reducir la reproducción no deseada y mejorar el bienestar de las mascotas y de la comunidad.",
    ],
    imagenes: [
      { src: "/images/campaign-placeholder-1.svg", alt: "Voluntarios en el operativo de esterilización" },
      { src: "/images/campaign-placeholder-2.svg", alt: "Cola de espera con dueños y sus mascotas" },
      { src: "/images/dog-placeholder-1.svg", alt: "Perro recuperándose después del procedimiento" },
    ],
    // Videos: { titulo: "...", youtubeId: "ID de YouTube" } — el ID es lo que va después de v= en la URL
    videos: [],
  },
  {
    id: "refugio-temporal-comunitario",
    titulo: "Refugio temporal comunitario",
    subtitulo: "Espacio de tránsito para emergencias climáticas",
    periodo: "Invierno 2023",
    descripcion: [
      "Ante olas de frío extremo, habilitamos un galpón cedido por un comercio vecino para alojar de forma temporal a animales rescatados que aún no tenían hogar de tránsito.",
      "Se organizaron turnos de limpieza, alimentación y vigilancia veterinaria. Varias familias del barrio se sumaron como tránsito una vez estabilizados los animales.",
    ],
    imagenes: [
      { src: "/images/dog-placeholder-2.svg", alt: "Animales abrigados en el refugio temporal" },
      { src: "/images/dog-placeholder-3.svg", alt: "Voluntarios preparando camas y comederos" },
    ],
    videos: [],
  },
  {
    id: "talleres-escolares",
    titulo: "Talleres de tenencia responsable en escuelas",
    subtitulo: "Educación y conciencia en niños y niñas",
    periodo: "2023 — 2024",
    descripcion: [
      "Visitamos escuelas primarias de la zona con una propuesta lúdica: juegos, dibujos y charlas cortas sobre cuidado de mascotas, esterilización y qué hacer si encontramos un animal en la calle.",
      "La respuesta de docentes y familias fue muy positiva; varios colegios nos invitaron a volver el año siguiente.",
    ],
    imagenes: [
      { src: "/images/campaign-placeholder-1.svg", alt: "Actividad con alumnos en el patio del colegio" },
    ],
    videos: [],
  },
];
