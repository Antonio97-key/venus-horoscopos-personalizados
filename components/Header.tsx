'use client';

import { useState, useEffect } from 'react';
import { Globe, Clock } from 'lucide-react';
import { getTranslation } from '@/lib/i18n';
import type { Language } from '@/lib/i18n';

interface HeaderProps {
  lang: Language;
  onLangChange: (lang: Language) => void;
}

export default function Header({ lang, onLangChange }: HeaderProps) {
  const [time, setTime] = useState(new Date());
  const t = getTranslation(lang);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cosmic-darkest/40 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="hidden md:flex items-center gap-2 text-[10px] text-cosmic-gold/60 font-medium uppercase tracking-[0.2em]">
          <Clock className="w-3 h-3" />
          <span>{time.toLocaleTimeString(lang === 'es' ? 'es-ES' : 'en-US', { hour12: false })}</span>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
          <div className="relative group">
            <div className="absolute inset-0 bg-cosmic-gold/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-cosmic-gold/30 p-1 flex items-center justify-center bg-cosmic-navy overflow-hidden">
               <span className="text-xl md:text-2xl">✨</span>
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-display font-black text-white tracking-[-0.05em] uppercase">
            VENUS
          </h1>
        </div>

        <button 
          onClick={() => onLangChange(lang === 'es' ? 'en' : 'es')}
          className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-2xl border border-white/5 transition-all group ml-auto md:ml-0"
        >
          <Globe className="w-4 h-4 text-cosmic-gold group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-bold text-white uppercase tracking-wider">{lang.toUpperCase()}</span>
        </button>
      </div>
    </header>
  );
}
