'use client';

import { useState, useMemo } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import HoroscopeCard from './HoroscopeCard';
import PlanSelector from './PlanSelector';
import { generateHoroscope } from '@/lib/horoscope';
import { getDailyEducationalItems } from '@/lib/educational';
import EducationalSection from './EducationalSection';
import { getTranslation } from '@/lib/i18n';
import type { Language } from '@/lib/i18n';

interface DashboardProps {
  userData: any;
  onReset: () => void;
  lang: Language;
  onLangChange: (lang: Language) => void;
}

export default function Dashboard({ userData, onReset, lang, onLangChange }: DashboardProps) {
  const [activeTab, setActiveTab] = useState('today');
  const t = getTranslation(lang);

  const horoscope = useMemo(() => {
    return generateHoroscope(userData, lang);
  }, [userData, lang]);

  const educationalItems = useMemo(() => {
    return getDailyEducationalItems(userData.sign, new Date().toISOString().split('T')[0], userData.situations);
  }, [userData.sign, userData.situations]);

  return (
    <div className="min-h-screen flex flex-col bg-cosmic-darkest">
      <Header lang={lang} onLangChange={onLangChange} />

      <main className="flex-1 max-w-4xl mx-auto w-full pt-28 pb-32">
        {activeTab === 'today' && (
          <div className="px-6 space-y-8 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-l-4 border-cosmic-gold pl-6 py-2">
              <div>
                <p className="text-cosmic-gold text-xs uppercase tracking-[0.3em] font-black mb-1">
                  {t.dashboard_welcome}
                </p>
                <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tighter">
                  {userData.sign}
                </h2>
              </div>
              <div className="text-right">
                <p className="text-cosmic-soft text-[10px] uppercase font-bold">
                  {new Date().toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long'
                  })}
                </p>
              </div>
            </div>

            <HoroscopeCard horoscope={horoscope} lang={lang} />

            <div className="p-4 rounded-xl bg-cosmic-gold/5 border border-cosmic-gold/10 text-center">
              <p className="text-[10px] text-cosmic-soft italic opacity-60">
                {lang === 'es'
                  ? 'Los horóscopos son para entretenimiento y no constituyen asesoramiento profesional.'
                  : 'Horoscopes are for entertainment purposes and do not constitute professional advice.'}
              </p>
            </div>
          </div>
        )}

        {activeTab === 'oraculo' && (
          <div className="px-6 space-y-8 animate-fade-in pb-12 text-center">
            <h2 className="font-display text-4xl font-bold text-white tracking-tight">{t.oracle_title}</h2>
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 shadow-xl">
              <div className="text-5xl mb-6">🔮</div>
              <p className="text-cosmic-soft mb-8 leading-relaxed max-w-md mx-auto">{t.oracle_subtitle}</p>
              <PlanSelector lang={lang} currentPlan={userData.plan} />
            </div>
          </div>
        )}

        {activeTab === 'educational' && (
          <div className="px-6 space-y-8 animate-fade-in pb-12">
            <div className="border-l-4 border-cosmic-gold pl-6 py-2 mb-8">
              <p className="text-cosmic-gold text-xs uppercase tracking-[0.3em] font-black mb-1">
                {t.tab_educational}
              </p>
              <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tighter">
                {lang === 'es' ? 'Sabiduría Cósmica' : 'Cosmic Wisdom'}
              </h2>
            </div>
            <EducationalSection items={educationalItems} />
          </div>
        )}

        {activeTab === 'history' && (
          <div className="px-6 text-center py-20 opacity-50 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-dashed border-cosmic-gold/30 mb-4 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-cosmic-gold/20" />
            </div>
            <p className="text-cosmic-soft italic">
              {lang === 'es' ? 'Tu historia estelar comienza hoy...' : 'Your stellar history begins today...'}
            </p>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="px-6 space-y-8 animate-fade-in">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-cosmic-gold/20 flex items-center justify-center text-3xl">👤</div>
                <div>
                  <h3 className="text-xl font-bold text-white uppercase">{userData.sign}</h3>
                  <p className="text-cosmic-gold text-xs font-black uppercase tracking-widest">{t.dashboard_plan}: {userData.plan}</p>
                </div>
              </div>
              <button
                onClick={onReset}
                className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm font-bold hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400 transition-all flex items-center justify-center gap-2"
              >
                {t.reset_birthdate}
              </button>
            </div>
          </div>
        )}
      </main>

      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} lang={lang} />
    </div>
  );
}
