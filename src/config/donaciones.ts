/**
 * Datos para la página de donaciones.
 * Reemplazá valores de ejemplo cuando tengas los reales.
 */

/** Ruta a la imagen del QR (subí el PNG/JPG a public/images/) */
export const qrDonacionSrc = "/images/donaciones-qr-placeholder.svg";

/** Link de pago / cobro de Mercado Pago */
export const mercadoPagoLink = "https://mpago.la/REEMPLAZAR";

/** Alias de Mercado Pago */
export const mercadoPagoAlias = "redvoluntarias.mp";

/** Alias de cuenta bancaria / CVU (transferencia por DNI u otro medio) */
export const aliasCuentaDni = "red.voluntarias.dni";

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
  { emoji: "📍", nombre: "Otro", detalle: "Escribinos por WhatsApp o contacto si tenés algo que no está en la lista." },
];
