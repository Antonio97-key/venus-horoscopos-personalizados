'use client';

import { Sparkles, ChevronRight, Globe, Moon, Sun, Star, Comet, Planet, Zodiac } from 'lucide-react';
import { getTranslation } from '../lib/i18n';
import type { Language } from '../lib/i18n';

interface WelcomeScreenProps {
  onStart: () => void;
  lang: Language;
  onLangChange: (lang: Language) => void;
}

const floatingSymbols = [
  { icon: '♈', delay: '0s', left: '5%', top: '10%', duration: '15s' },
  { icon: '♉', delay: '2s', left: '85%', top: '15%', duration: '18s' },
  { icon: '♊', delay: '4s', left: '15%', top: '80%', duration: '20s' },
  { icon: '♋', delay: '1s', left: '75%', top: '70%', duration: '16s' },
  { icon: '♌', delay: '3s', left: '90%', top: '40%', duration: '22s' },
  { icon: '♍', delay: '5s', left: '10%', top: '30%', duration: '17s' },
  { icon: '♎', delay: '2.5s', left: '60%', top: '5%', duration: '19s' },
  { icon: '♏', delay: '4.5s', left: '25%', top: '60%', duration: '21s' },
  { icon: '⭐', delay: '1.5s', left: '45%', top: '85%', duration: '14s' },
  { icon: '🌙', delay: '3.5s', left: '70%', top: '90%', duration: '23s' },
  { icon: '☀️', delay: '0.5s', left: '35%', top: '20%', duration: '12s' },
  { icon: '✨', delay: '2.5s', left: '55%', top: '50%', duration: '16s' },
];

export default function WelcomeScreen({ onStart, lang, onLangChange }: WelcomeScreenProps) {
  const t = getTranslation(lang);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-cosmic-darkest">
      {/* Animated Background Symbols */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating symbols from right to left */}
        {floatingSymbols.map((symbol, idx) => (
          <div
            key={idx}
            className="absolute text-white/10 animate-float-right"
            style={{
              left: symbol.left,
              top: symbol.top,
              animationDelay: symbol.delay,
              animationDuration: symbol.duration,
              fontSize: `${Math.random() * 20 + 20}px`,
            }}
          >
            {symbol.icon}
          </div>
        ))}

        {/* Background glow effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-cosmic-navy/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-cosmic-purple/20 rounded-full blur-[120px] animate-pulse" />
        
        {/* Additional animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cosmic-gold/5 rounded-full animate-float-orb-1" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-cosmic-accent/5 rounded-full animate-float-orb-2" />
        
        {/* Shooting star effect */}
        <div className="absolute top-10 right-20 animate-shooting-star">
          <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-lg text-center space-y-12 animate-fade-in">
        {/* Logo Section */}
        <div className="space-y-6">
          <div className="relative inline-block">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-cosmic-gold/40 glow-gold mx-auto bg-cosmic-navy shadow-2xl flex items-center justify-center animate-float">
              <img src="/venus-logo.png" alt="VENUS" className="w-full h-full object-cover scale-110" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-cosmic-gold text-cosmic-darkest p-2 rounded-full shadow-lg animate-pulse">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] flex flex-col items-center">
              <span className="text-cosmic-gold animate-glow">VENUS</span>
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

      <style jsx global>{`
        @keyframes float-right {
          0% {
            transform: translateX(100vw) translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateX(-100px) translateY(50px);
            opacity: 0;
          }
        }
        
        @keyframes float-orb-1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(30px, -20px) scale(1.2);
            opacity: 0.5;
          }
        }
        
        @keyframes float-orb-2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(-20px, 30px) scale(1.1);
            opacity: 0.5;
          }
        }
        
        @keyframes shooting-star {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translate(-200px, 200px);
            opacity: 0;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
          }
          50% {
            text-shadow: 0 0 40px rgba(212, 175, 55, 0.8), 0 0 60px rgba(212, 175, 55, 0.4);
          }
        }
        
        .animate-float-right {
          animation: float-right linear infinite;
        }
        
        .animate-float-orb-1 {
          animation: float-orb-1 8s ease-in-out infinite;
        }
        
        .animate-float-orb-2 {
          animation: float-orb-2 10s ease-in-out infinite;
        }
        
        .animate-shooting-star {
          animation: shooting-star 3s ease-in-out infinite;
          animation-delay: 5s;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
