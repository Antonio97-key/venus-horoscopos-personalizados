export interface EducationalItem {
  id: string;
  title: string;
  category: 'energia' | 'consejo' | 'ritual_suave' | 'afirmacion';
  body: string;
}

const BASE_ITEMS: EducationalItem[] = [
  {
    id: 'energia-dia-respiracion',
    category: 'energia',
    title: 'Energía del día: respirar antes de actuar',
    body:
      'Hoy la energía favorece las decisiones tomadas con calma. Antes de responder un mensaje importante o tomar una decisión, haz tres respiraciones profundas. Imagina que inhalas luz dorada y exhalas tensión. Este gesto sencillo limpia tu campo energético y te ayuda a responder desde la claridad, no desde la prisa.',
  },
  {
    id: 'consejo-limpiar-espacio',
    category: 'consejo',
    title: 'Orden externo, claridad interna',
    body:
      'El lugar donde pasas más tiempo refleja tu estado interno. Elige hoy un rincón pequeño (escritorio, mesita de noche o bolso) y ordénalo con intención. Mientras lo haces, repite mentalmente: “Dejo ir lo que ya cumplió su ciclo y hago espacio para lo nuevo”. No se trata de perfección, sino de crear un punto de armonía en tu día.',
  },
  {
    id: 'ritual-agua',
    category: 'ritual_suave',
    title: 'Ritual suave con agua para descargar preocupaciones',
    body:
      'Al lavarte las manos o ducharte, imagina que el agua se lleva pensamientos pesados y emociones densas. Visualiza cómo se disuelven y bajan por el desagüe. Puedes reforzarlo diciendo en voz baja: “Todo lo que ya no necesito se va con esta agua. Me quedo con la enseñanza y libero la carga”. Es una forma simple y poderosa de limpieza energética diaria.',
  },
  {
    id: 'afirmacion-confianza',
    category: 'afirmacion',
    title: 'Afirmación para confiar en tu camino',
    body:
      'Repite durante el día, en voz alta o mentalmente: “Estoy donde necesito estar y doy el siguiente paso con confianza”. Esta frase alinea mente y corazón, recordándote que no tienes que controlar todo el futuro: solo avanzar un paso a la vez con fe y coherencia.',
  },
  {
    id: 'energia-gratitud',
    category: 'energia',
    title: 'Gratitud como imán de buenas vibras',
    body:
      'Cuando agradeces de forma consciente, tu energía cambia de inmediato. Elige tres cosas concretas por las que dar gracias hoy (personas, oportunidades o incluso aprendizajes difíciles). Escríbelas en tu móvil o en una hoja. Cada vez que mires la lista, respira profundo y siente cómo tu pecho se expande. La gratitud abre caminos que la queja cierra.',
  },
];

function seededRandom(seed: number): () => number {
  return () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

function pickMany<T>(arr: T[], count: number, random: () => number): T[] {
  const copy = [...arr];
  const result: T[] = [];
  while (copy.length > 0 && result.length < count) {
    const idx = Math.floor(random() * copy.length);
    result.push(copy.splice(idx, 1)[0]);
  }
  return result;
}

export function getDailyEducationalItems(sign: string, date: string, situations: any[]): EducationalItem[] {
  const baseSeed =
    parseInt(date.replace(/-/g, ''), 10) +
    (sign || 'Aries').split('').reduce((a, c) => a + c.charCodeAt(0), 0) +
    (situations || []).reduce((a, s) => a + (typeof s === 'string' ? s.length : (s.id?.length || 0)), 0);
  const random = seededRandom(baseSeed);
  return pickMany(BASE_ITEMS, 3, random);
}
