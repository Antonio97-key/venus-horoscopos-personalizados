'use client';

import { Star, Sparkles, ChevronRight, Globe } from 'lucide-react';
import { getTranslation } from '@/lib/i18n';
import type { Language } from '@/lib/i18n';

interface WelcomeScreenProps {
  onStart: () => void;
  lang: Language;
  onLangChange: (lang: Language) => void;
}

export default function WelcomeScreen({ onStart, lang, onLangChange }: WelcomeScreenProps) {
  const t = getTranslation(lang);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-cosmic-darkest">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-cosmic-navy/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-cosmic-purple/20 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-lg text-center space-y-12 animate-fade-in">
        {/* Logo Section */}
        <div className="space-y-6">
          <div className="relative inline-block">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-cosmic-gold/40 glow-gold mx-auto bg-cosmic-navy shadow-2xl flex items-center justify-center">
              <img src="/venus-logo.png" alt="VENUS" className="w-full h-full object-cover scale-110" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-cosmic-gold text-cosmic-darkest p-2 rounded-full shadow-lg">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] flex flex-col items-center">
              <span className="text-cosmic-gold">VENUS</span>
              <span className="text-2xl md:text-3xl lg:text-4xl tracking-[0.2em] mt-2 opacity-90">HOROSCOPOS</span>
              <span className="text-xl md:text-2xl tracking-[0.1em] opacity-70">PERSONALIZADOS</span>
            </h1>
          </div>
        </div>

        {/* Start Button */}
        <div className="space-y-6">
          <button
            onClick={onStart}
            className="w-full py-5 rounded-3xl flex items-center justify-center gap-3 font-black text-xl bg-cosmic-gold text-cosmic-darkest shadow-2xl group active:scale-[0.98] transition-all hover:bg-white hover:text-cosmic-darkest"
          >
            <span>{t.start}</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => onLangChange('es')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all text-xs font-bold uppercase tracking-widest ${lang === 'es' ? 'bg-cosmic-gold/20 border-cosmic-gold text-white' : 'bg-white/5 border-white/10 text-cosmic-soft hover:bg-white/10'
                }`}
            >
              <Globe className="w-3 h-3" /> ESP
            </button>
            <button
              onClick={() => onLangChange('en')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all text-xs font-bold uppercase tracking-widest ${lang === 'en' ? 'bg-cosmic-gold/20 border-cosmic-gold text-white' : 'bg-white/5 border-white/10 text-cosmic-soft hover:bg-white/10'
                }`}
            >
              <Globe className="w-3 h-3" /> ENG
            </button>
          </div>
        </div>

        {/* Footer badges */}
        <div className="flex justify-center gap-8 opacity-40">
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-xl border border-white/20 flex items-center justify-center">✨</div>
            <span className="text-[10px] font-bold uppercase tracking-widest">AI Core</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-xl border border-white/20 flex items-center justify-center">🛡️</div>
            <span className="text-[10px] font-bold uppercase tracking-widest">Private</span>
          </div>
        </div>
      </div>
    </div>
  );
}
