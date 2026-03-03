'use client';

import { Sparkles, Star, TrendingUp, Zap } from 'lucide-react';

interface HoroscopeCardProps {
  horoscope: any;
  lang: string;
}

export default function HoroscopeCard({ horoscope, lang }: HoroscopeCardProps) {
  const t = {
    advice: lang === 'es' ? 'Consejo Estelar' : 'Stellar Advice',
    energy: lang === 'es' ? 'Energía del Día' : 'Daily Energy'
  };

  return (
    <div className="space-y-6 animate-slide-up">
      <div className="card-cosmic rounded-3xl p-8 glow-gold relative overflow-hidden group">
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-cosmic-gold/5 rounded-full blur-3xl group-hover:bg-cosmic-gold/10 transition-all duration-700" />
        
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-cosmic-gold/20 text-cosmic-gold">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <h3 className="text-2xl font-black text-white tracking-tight uppercase leading-none">
            {t.energy}
          </h3>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg md:text-xl text-white font-medium leading-relaxed first-letter:text-4xl first-letter:font-black first-letter:text-cosmic-gold first-letter:mr-1">
            {horoscope.text}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card-cosmic rounded-3xl p-6 border border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-3 mb-4 text-cosmic-gold">
            <TrendingUp className="w-5 h-5" />
            <span className="text-xs font-black uppercase tracking-widest">{t.advice}</span>
          </div>
          <p className="text-cosmic-soft text-sm font-medium leading-relaxed italic">
            "{horoscope.actionable_advice}"
          </p>
        </div>

        <div className="flex gap-2">
          {horoscope.areas && Object.entries(horoscope.areas).map(([area, val]: [string, any]) => (
            <div key={area} className="flex-1 card-cosmic rounded-3xl p-4 border border-white/5 bg-white/[0.01] flex flex-col items-center justify-center gap-1">
              <span className="text-[10px] text-cosmic-gold font-black uppercase tracking-tighter opacity-60">{area}</span>
              <span className="text-xl font-bold text-white">{val}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
