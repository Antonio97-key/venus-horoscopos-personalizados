'use client';

import { useState, useEffect } from 'react';
import { Globe, Clock } from 'lucide-react';
import { getTranslation } from '../lib/i18n';
import type { Language } from '../lib/i18n';

interface HeaderProps {
  lang: Language;
  onLangChange: (lang: Language) => void;
}

export default function Header({ lang, onLangChange }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState('');
  const t = getTranslation(lang);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString(lang === 'es' ? 'es-ES' : 'en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }));
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [lang]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 bg-cosmic-darkest/90 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'py-6 bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative h-14">
        {/* TIME - LEFT */}
        <div className="hidden lg:flex items-center gap-3 text-white/40">
          <Clock className="w-4 h-4" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] tabular-nums">
            {time}
          </span>
        </div>

        {/* LOGO - CENTER */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 w-full max-w-[50%]">
          <div className="relative group shrink-0 hidden sm:flex">
            <div className="absolute inset-0 bg-cosmic-gold/20 blur-xl rounded-full scale-150 animate-pulse group-hover:bg-cosmic-gold/40 transition-all duration-700" />
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-cosmic-gold/30 bg-cosmic-navy shadow-inner flex items-center justify-center">
              <img src="/venus-logo.png" alt="VENUS" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-display font-black text-white tracking-widest uppercase transition-all duration-500 group-hover:tracking-[0.15em] shrink-0">
              VENUS
            </h1>
            <p className="text-[8px] md:text-[10px] font-black text-cosmic-gold tracking-[0.3em] uppercase opacity-80 shrink-0 text-center whitespace-nowrap">
              HOROSCOPOS PERSONALIZADOS
            </p>
          </div>
        </div>

        {/* LANG - RIGHT */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onLangChange('es')}
            className={`px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest transition-all ${lang === 'es' ? 'bg-cosmic-gold text-cosmic-darkest shadow-lg shadow-cosmic-gold/20' : 'text-cosmic-soft hover:bg-white/5'
              }`}
          >
            ESP
          </button>
          <button
            onClick={() => onLangChange('en')}
            className={`px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest transition-all ${lang === 'en' ? 'bg-cosmic-gold text-cosmic-darkest shadow-lg shadow-cosmic-gold/20' : 'text-cosmic-soft hover:bg-white/5'
              }`}
          >
            ENG
          </button>
        </div>
      </div>
    </header>
  );
}
