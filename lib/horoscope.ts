import { getTranslation } from './i18n';
import type { Language } from './i18n';

export function generateHoroscope(userData: any, lang: Language) {
  const t = getTranslation(lang);
  const sign = userData.sign;
  const situations = userData.situations || [];

  const baseTexts: any = {
    es: {
      text: `Para ti, ${sign}, las estrellas indican un periodo de gran transformación. Las situaciones que estás viviendo (${situations.join(', ')}) no son casualidad; son peldaños hacia tu evolución. Hoy, la energía de Venus te pide que confíes en tu intuición y en el proceso que has iniciado. Cada paso que das bajo la influencia de ${situations[0]} te acerca más a la claridad que buscas en ${situations[1]} y ${situations[2]}.`,
      advice: "Escucha el silencio de las estrellas; allí encontrarás las respuestas que tu mente aún no puede procesar.",
      areas: { "Amor": 85, "Trabajo": 70, "Salud": 90 }
    },
    en: {
      text: `For you, ${sign}, the stars indicate a period of great transformation. The situations you are experiencing (${situations.join(', ')}) are not accidental; they are stepping stones toward your evolution. Today, the energy of Venus asks you to trust your intuition and the process you've started. Each step you take under the influence of ${situations[0]} brings you closer to the clarity you seek in ${situations[1]} and ${situations[2]}.`,
      advice: "Listen to the silence of the stars; there you will find the answers that your mind cannot yet process.",
      areas: { "Love": 85, "Work": 70, "Health": 90 }
    }
  };

  return baseTexts[lang];
}
