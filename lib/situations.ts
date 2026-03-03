// Opciones de situación personal para personalización del horóscopo

export interface SituationOption {
  id: string;
  label: string;
  category: SituationCategory;
  icon: string;
}

export type SituationCategory =
  | 'sentimental'
  | 'laboral'
  | 'planes'
  | 'familiar'
  | 'emocional';

export const SITUATION_CATEGORIES: { id: SituationCategory; label: string }[] = [
  { id: 'sentimental', label: 'Relaciones sentimentales' },
  { id: 'laboral', label: 'Situación laboral / financiera' },
  { id: 'planes', label: 'Planes y proyectos' },
  { id: 'familiar', label: 'Situación familiar' },
  { id: 'emocional', label: 'Estado emocional' },
];

export const SITUATION_OPTIONS: SituationOption[] = [
  // Sentimental
  { id: 'soltero-buscando', label: 'Soltero/a buscando pareja', category: 'sentimental', icon: '❤️' },
  { id: 'soltero-disfrutando', label: 'Soltero/a disfrutando la soltería', category: 'sentimental', icon: '✨' },
  { id: 'relacion-estable', label: 'En una relación estable', category: 'sentimental', icon: '💑' },
  { id: 'viviendo-con-pareja', label: 'Viviendo con mi pareja actualmente', category: 'sentimental', icon: '🏠' },
  { id: 'no-vivo-con-pareja', label: 'No vivo con mi pareja actualmente', category: 'sentimental', icon: '📍' },
  { id: 'casado', label: 'Casado/a', category: 'sentimental', icon: '💍' },
  { id: 'divorciado', label: 'Divorciado/a', category: 'sentimental', icon: '🕊️' },
  { id: 'viudo', label: 'Viudo/a', category: 'sentimental', icon: '🕊️' },
  { id: 'ruptura', label: 'Pasando por ruptura o crisis de pareja', category: 'sentimental', icon: '💔' },
  // Laboral
  { id: 'empleado-fijo', label: 'Trabajando (empleado fijo)', category: 'laboral', icon: '💼' },
  { id: 'freelance', label: 'Trabajando (freelance / autónomo)', category: 'laboral', icon: '🖥️' },
  { id: 'desempleado-buscando', label: 'Desempleado/a buscando trabajo', category: 'laboral', icon: '🔍' },
  { id: 'desempleado-sin-busqueda', label: 'Desempleado/a sin búsqueda activa', category: 'laboral', icon: '⏸️' },
  { id: 'cambiar-trabajo', label: 'Con ganas de cambiar de trabajo', category: 'laboral', icon: '🔄' },
  { id: 'emprendiendo', label: 'Emprendiendo un negocio propio', category: 'laboral', icon: '🚀' },
  { id: 'estudiando', label: 'Estudiando / formándome', category: 'laboral', icon: '📚' },
  { id: 'jubilado', label: 'Jubilado/a', category: 'laboral', icon: '🌅' },
  // Planes
  { id: 'proyectos-personales', label: 'Nuevos proyectos personales', category: 'planes', icon: '🎯' },
  { id: 'mudarme', label: 'Planeando mudarme de ciudad/país', category: 'planes', icon: '🏠' },
  { id: 'viajar', label: 'Quiero viajar próximamente', category: 'planes', icon: '✈️' },
  { id: 'planes-viaje', label: 'Tengo planes de viaje', category: 'planes', icon: '🧳' },
  { id: 'planes-estudios', label: 'Tengo planes de estudios', category: 'planes', icon: '📖' },
  { id: 'mejorar-salud', label: 'Quiero mejorar mi salud / bienestar', category: 'planes', icon: '🌿' },
  // Familiar
  { id: 'viviendo-padres', label: 'Viviendo con mis padres', category: 'familiar', icon: '👨‍👩‍👧' },
  { id: 'viviendo-solo', label: 'Viviendo solo/a', category: 'familiar', icon: '🏡' },
  { id: 'con-hijos', label: 'Con hijos', category: 'familiar', icon: '👶' },
  { id: 'problemas-hermano', label: 'Problemas con un hermano/a', category: 'familiar', icon: '🧩' },
  { id: 'problemas-hijo', label: 'Problemas con un hijo/a', category: 'familiar', icon: '🫶' },
  { id: 'cuidando-familiar', label: 'Cuidando de un familiar enfermo', category: 'familiar', icon: '🤝' },
  { id: 'problemas-familiares', label: 'Problemas familiares recientes', category: 'familiar', icon: '💫' },
  // Emocional
  { id: 'optimista', label: 'Me siento optimista', category: 'emocional', icon: '😊' },
  { id: 'ansioso', label: 'Me siento ansioso/a', category: 'emocional', icon: '😰' },
  { id: 'preocupado', label: 'Me siento preocupado/a', category: 'emocional', icon: '🌧️' },
  { id: 'triste', label: 'Me siento triste o desmotivado/a', category: 'emocional', icon: '😔' },
  { id: 'confundido', label: 'Me siento confundido/a sin rumbo', category: 'emocional', icon: '🤔' },
  { id: 'con-energia', label: 'Me siento con mucha energía', category: 'emocional', icon: '⚡' },
];

export const MAX_SITUATION_SELECTIONS = 3;
