import { getTranslation } from './i18n';
import type { Language } from './i18n';

export function generateHoroscope(userData: any, lang: Language) {
  const sign = userData.sign;
  const situations = userData.situations || [];

  // En una versión real, esto llamaría a una API de IA
  const baseTexts: any = {
    es: {
      sign,
      text: `Para ti, ${sign}, las estrellas indican un periodo de gran transformación. Las situaciones que estás viviendo (${situations.join(', ')}) no son casualidad; son peldaños hacia tu evolución. Hoy, la energía de Venus te pide que confíes en tu intuición y en el proceso que has iniciado. Cada paso que das te acerca más a la claridad que buscas.`,
      actionableAdvice: "Escucha el silencio de las estrellas; allí encontrarás las respuestas que tu mente aún no puede procesar.",
      areas: { "Amor": 85, "Trabajo": 70, "Salud": 90 }
    },
    en: {
      sign,
      text: `For you, ${sign}, the stars indicate a period of great transformation. The situations you are experiencing (${situations.join(', ')}) are not accidental; they are stepping stones toward your evolution. Today, the energy of Venus asks you to trust your intuition and the process you've started. Each step you take brings you closer to the clarity you seek.`,
      actionableAdvice: "Listen to the silence of the stars; there you will find the answers that your mind cannot yet process.",
      areas: { "Love": 85, "Work": 70, "Health": 90 }
    }
  };

  return baseTexts[lang] || baseTexts.es;
}
