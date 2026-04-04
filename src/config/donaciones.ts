/**
 * Datos para la página de donaciones.
 * Reemplazá valores de ejemplo cuando tengas los reales.
 */

/** Alias de cuenta bancaria */
export const aliasCuenta = "reddevoluntarias.cda";

/** CBU de cuenta bancaria */
export const cbuCuenta = "0140328003714052110507";

/** Titular de la cuenta bancaria */
export const titularCuenta = "Morena Tatiana Guaquinchay";

export type InsumoDonacion = {
  emoji: string;
  nombre: string;
  /** Texto opcional (ej. “sin vencimiento cercano”) */
  detalle?: string;
};

export const insumosDonacion: InsumoDonacion[] = [
  { emoji: "🧤", nombre: "Guantes descartables", detalle: "Para higiene en rescates y veterinaria." },
  { emoji: "🦮", nombre: "Correas y collares", detalle: "En buen estado, de distintos tamaños." },
  { emoji: "🍖", nombre: "Alimento balanceado", detalle: "Perro o gato; preferentemente sin abrir o bien cerrado." },
  { emoji: "🥫", nombre: "Latas de paté / húmedo", detalle: "Útil para convalecientes o cachorros." },
  { emoji: "🛏️", nombre: "Mantas y toallas", detalle: "Limpias; para tránsito y camas improvisadas." },
  { emoji: "📦", nombre: "Transportadoras", detalle: "Que cierren bien; cualquier tamaño." },
  { emoji: "🧴", nombre: "Shampoo y productos de higiene", detalle: "Específicos para mascotas si es posible." },
  { emoji: "🧻", nombre: "Papel higiénico y pañales", detalle: "Para cachorros o postoperatorio." },
  { emoji: "🪣", nombre: "Baldes, mopas, lavandinas", detalle: "Limpieza de espacios comunes." },
  { emoji: "🧸", nombre: "Juguetes", detalle: "Resistentes; evitar piezas muy pequeñas que se traguen." },
  { emoji: "💊", nombre: "Medicamentos", detalle: "Solo si están en fecha y con indicación; consultanos antes." },
  {
    emoji: "🩺",
    nombre: "Medicamentos que más usamos",
    detalle:
      "Doxiciclina, Optamox Duo, curabichera, prednisolona, enrofloxacina, protectores gástricos, Tribiotic, antidesparasitarios, tramadol, multivitamínicos.",
  },
  { emoji: "🧴", nombre: "Suero y vías", detalle: "Sueros, vías para sueros y agujas." },
  { emoji: "🩹", nombre: "Pervinox", detalle: "Antiséptico para curaciones." },
  { emoji: "🐾", nombre: "Pipetas", detalle: "Antipulgas y garrapatas." },
  { emoji: "🛏️", nombre: "Camitas y cuchas", detalle: "En buen estado y limpias." },
  { emoji: "🧺", nombre: "Sábanas, toallones y colchas", detalle: "Todo limpio, para tránsito y caniles." },
  { emoji: "📍", nombre: "Otro", detalle: "Escribinos por WhatsApp o contacto si tenés algo que no está en la lista." },
];
