import { getTranslation } from './i18n';
import type { Language } from './i18n';

export function generateHoroscope(userData: any, lang: Language) {
  const sign = userData.sign;
  const situations = userData.situations || [];

  const baseTexts: any = {
    es: {
      sign,
      text: `Para ti, ${sign}, las estrellas indican un periodo de gran transformación. Las situaciones que estás viviendo (${situations.join(', ')}) no son casualidad; son peldaños hacia tu evolución. Hoy, la energía de Venus te pide que confíes en tu intuición y en el proceso que has iniciado. Cada paso que das te acerca más a la claridad que buscas.`,
      text2: `Las configuraciones planetarias de hoy te invitan a reflexionar sobre tu camino. Mercurio en posición favorable sugiere que las conversaciones que tengas serán especialmente productivas. Es un buen momento para expresar lo que sientes y para escuchar con atención lo que otros tienen que decirte. La comunicación será tu mayor aliado en las próximas horas.`,
      text3: `El cosmos te ofrece una oportunidad de oro para cerrar ciclos que ya no te sirven. Aquello que has estado postergando puede encontrar hoy su momento ideal para resolverse. No tengas miedo de dar ese primer paso que tanto has esperado. La energía del universo está alineada con tus intenciones más sinceras.`,
      actionableAdvice: "Escucha el silencio de las estrellas; allí encontrarás las respuestas que tu mente aún no puede procesar.",
      areas: { 
        "Amor": 85, 
        "Trabajo": 70, 
        "Salud": 90 
      },
      areaDescriptions: {
        "Amor": "Tu vida sentimental experimentará momentos de gran conexión emocional. Las personas cercanas a ti perceberán tu energía renovadora. Es un buen día para expresar sentimientos.",
        "Trabajo": "Las oportunidades laborales se presentan de formas inesperadas. Mantén tus ojos abiertos a nuevas posibilidades que pueden surgir en cualquier momento.",
        "Salud": "Tu energía física está en su punto óptimo. Es momento ideal para iniciar nuevas rutinas de bienestar y cuidar tu cuerpo mente y espíritu."
      }
    },
    en: {
      sign,
      text: `For you, ${sign}, the stars indicate a period of great transformation. The situations you are experiencing (${situations.join(', ')}) are not accidental; they are stepping stones toward your evolution. Today, the energy of Venus asks you to trust your intuition and the process you've started. Each step you take brings you closer to the clarity you seek.`,
      text2: `Today's planetary configurations invite you to reflect on your path. Mercury in a favorable position suggests that your conversations will be especially productive. It's a good time to express what you feel and to listen carefully to what others have to say. Communication will be your greatest ally in the coming hours.`,
      text3: `The cosmos offers you a golden opportunity to close cycles that no longer serve you. That which you have been postponing may find today its ideal moment to resolve. Don't be afraid to take that first step you've been waiting for. The energy of the universe is aligned with your most sincere intentions.`,
      actionableAdvice: "Listen to the silence of the stars; there you will find the answers that your mind cannot yet process.",
      areas: { 
        "Love": 85, 
        "Work": 70, 
        "Health": 90 
      },
      areaDescriptions: {
        "Love": "Your love life will experience moments of great emotional connection. People close to you will perceive your renewing energy. It's a good day to express feelings.",
        "Work": "Job opportunities present themselves in unexpected ways. Keep your eyes open for new possibilities that may arise at any moment.",
        "Health": "Your physical energy is at its peak. It's the ideal time to start new wellness routines and take care of your body, mind, and spirit."
      }
    }
  };

  return baseTexts[lang] || baseTexts.es;
}
