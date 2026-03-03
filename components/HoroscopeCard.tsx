'use client';

import { Heart, Briefcase, Activity, Lightbulb } from 'lucide-react';
import type { Language } from '@/lib/i18n';

interface HoroscopeCardProps {
  horoscope: {
    date: string;
    sign: string;
    text: string;
    areas: Record<string, string>;
    actionableAdvice?: string;
  };
  lang: Language;
}

const areaIcons: Record<string, React.ReactNode> = {
  amor: <Heart className="w-6 h-6 text-rose-400" />,
  love: <Heart className="w-6 h-6 text-rose-400" />,
  trabajo: <Briefcase className="w-6 h-6 text-amber-400" />,
  work: <Briefcase className="w-6 h-6 text-amber-400" />,
  salud: <Activity className="w-6 h-6 text-emerald-400" />,
  health: <Activity className="w-6 h-6 text-emerald-400" />,
  bienestar: <span className="text-xl">✨</span>,
  wellbeing: <span className="text-xl">✨</span>,
};

export default function HoroscopeCard({ horoscope, lang }: HoroscopeCardProps) {
  const areas = Object.entries(horoscope.areas);
  const paragraphs = horoscope.text
    .split(/\n\s*\n/g)
    .map((p) => p.trim())
    .filter(Boolean);

  const labels = {
    es: {
      daily: 'Horóscopo del día',
      advice: 'Consejo accionable para hoy',
    },
    en: {
      daily: 'Daily Horoscope',
      advice: 'Actionable advice for today',
    }
  }[lang];

  return (
    <div className="card-cosmic rounded-3xl p-8 glow-gold overflow-hidden relative border-2 border-white/5 bg-cosmic-darkest/40 shadow-2xl">
      <div className="absolute top-0 right-0 w-48 h-48 bg-cosmic-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-cosmic-gold text-xs font-black uppercase tracking-[0.3em] mb-1">
              {labels.daily}
            </p>
            <h3 className="text-white text-3xl font-display font-bold">{horoscope.sign}</h3>
          </div>
          <div className="text-4xl filter drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]">✨</div>
        </div>

        <div className="text-white/90 leading-relaxed mb-8 text-lg font-medium space-y-6 italic">
          {paragraphs.map((p, idx) => (
            <p key={idx} className="first-letter:text-3xl first-letter:font-bold first-letter:text-cosmic-gold first-letter:mr-1 first-letter:float-left">
              {p}
            </p>
          ))}
          <div className="clear-both"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-8 mt-4">
          {areas.map(([key, value]) => (
            <div key={key} className="space-y-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 transition-all hover:bg-white/[0.05]">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-cosmic-gold">
                    {areaIcons[key.toLowerCase()] || '•'}
                  </span>
                  <p className="text-[10px] md:text-xs font-black text-cosmic-gold uppercase tracking-widest">{key}</p>
                </div>
                <span className="text-xs font-bold text-white/50">{value}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cosmic-gold/50 to-cosmic- gold transition-all duration-1000 ease-out"
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {horoscope.actionableAdvice && (
          <div className="mt-8 pt-8 border-t border-cosmic-gold/20 flex gap-4 animate-slide-up">
            <div className="p-3 rounded-2xl bg-cosmic-gold/10 text-cosmic-gold shadow-[0_0_20px_rgba(255,215,0,0.1)]">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-black text-cosmic-gold uppercase tracking-widest mb-2">{labels.advice}</p>
              <p className="text-base md:text-xl text-white font-bold italic leading-relaxed">
                "{horoscope.actionableAdvice}"
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
