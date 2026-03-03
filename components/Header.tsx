'use client';

import { useState, useEffect } from 'react';
import { Globe, Clock } from 'lucide-react';
import type { Language } from '@/lib/i18n';

interface HeaderProps {
  variant?: 'compact' | 'full';
  lang: Language;
  onLangChange: (lang: Language) => void;
}

export default function Header({ variant = 'full', lang, onLangChange }: HeaderProps) {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString(lang === 'es' ? 'es-ES' : 'en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [lang]);

  return (
    <header className="px-6 py-6 border-b border-cosmic-gold/20 bg-cosmic-darkest/70 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-4">
        
        {/* Left: Clock */}
        <div className="hidden md:flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-cosmic-gold/10 border border-cosmic-gold/20 text-cosmic-gold text-lg font-mono shadow-[0_0_20px_rgba(255,215,0,0.1)] w-fit">
          <Clock className="w-5 h-5 animate-pulse" />
          <span className="font-black tracking-[0.1em]">{time}</span>
        </div>

        {/* Center: Title */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-1">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cosmic-gold/40 glow-gold bg-cosmic-navy shadow-2xl shrink-0">
              <img
                src="/venuz-logo.png"
                alt="VENUS"
                className="w-full h-full object-cover scale-110"
                loading="eager"
              />
            </div>
            <h1 className="font-display text-2xl md:text-3xl font-black text-white leading-tight tracking-tighter text-shadow-gold uppercase">
              VENUS
            </h1>
          </div>
          <p className="text-[10px] md:text-xs text-cosmic-gold font-black uppercase tracking-[0.4em] opacity-80">
            HOROSCOPOS PERSONALIZADOS
          </p>
        </div>

        {/* Right: Language Selector */}
        <div className="flex justify-center md:justify-end items-center gap-3">
          {/* Mobile Clock: only visible on small screens since we removed it from left grid on mobile */}
          <div className="md:hidden flex items-center gap-2 px-3 py-1.5 rounded-full bg-cosmic-gold/10 border border-cosmic-gold/10 text-cosmic-gold text-[10px] font-mono">
             <Clock className="w-3 h-3" />
             <span>{time}</span>
          </div>
          
          <button
            onClick={() => onLangChange(lang === 'es' ? 'en' : 'es')}
            className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/5 border border-cosmic-gold/30 text-white text-sm hover:bg-cosmic-gold/20 transition-all font-black shadow-lg active:scale-95 group"
          >
            <Globe className="w-5 h-5 text-cosmic-gold group-hover:rotate-12 transition-transform" />
            <span className="uppercase tracking-widest">{lang}</span>
          </button>
        </div>

      </div>
    </header>
  );
}
