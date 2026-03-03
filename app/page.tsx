'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import WelcomeScreen from '@/components/WelcomeScreen';
import BirthdateSelector from '@/components/BirthdateSelector';
import SituationSelector from '@/components/SituationSelector';
import Dashboard from '@/components/Dashboard';
import { getStoredUser, storeUser, clearStoredUser } from '@/lib/storage';
import { getSignFromDate } from '@/lib/zodiac';
import type { Language } from '@/lib/i18n';

export default function Home() {
  const [step, setStep] = useState<'welcome' | 'birthdate' | 'situations' | 'dashboard'>('welcome');
  const [userData, setUserData] = useState<any>(null);
  const [lang, setLang] = useState<Language>('es');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('venus_lang') as Language;
    if (savedLang) setLang(savedLang);

    const stored = getStoredUser();
    if (stored) {
      setUserData(stored);
      setStep('dashboard');
    }
  }, []);

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('venus_lang', newLang);
  };

  const handleStart = () => setStep('birthdate');

  const handleBirthdateSubmit = (data: { day: string; month: string; year: string }) => {
    const d = parseInt(data.day, 10);
    const m = parseInt(data.month, 10);
    const sign = getSignFromDate(d, m);
    setUserData({ ...data, sign, plan: 'normal' });
    setStep('situations');
  };

  const handleSituationsSubmit = (situations: string[]) => {
    const finalData = { ...userData, situations };
    setUserData(finalData);
    storeUser(finalData);
    setStep('dashboard');
  };

  const handleReset = () => {
    clearStoredUser();
    setUserData(null);
    setStep('welcome');
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-cosmic-darkest text-white selection:bg-cosmic-gold/30">
      {step === 'welcome' && (
        <WelcomeScreen onStart={handleStart} lang={lang} onLangChange={handleLangChange} />
      )}
      
      {step === 'birthdate' && (
        <div className="min-h-screen flex flex-col">
          <Header lang={lang} onLangChange={handleLangChange} />
          <div className="flex-1 flex items-center justify-center p-6">
            <BirthdateSelector onSubmit={handleBirthdateSubmit} lang={lang} />
          </div>
        </div>
      )}

      {step === 'situations' && (
        <div className="min-h-screen flex flex-col">
          <Header lang={lang} onLangChange={handleLangChange} />
          <div className="flex-1 flex items-center justify-center p-6">
            <SituationSelector onSubmit={handleSituationsSubmit} lang={lang} />
          </div>
        </div>
      )}

      {step === 'dashboard' && userData && (
        <Dashboard 
          userData={userData} 
          onReset={handleReset} 
          lang={lang}
          onLangChange={handleLangChange}
        />
      )}
    </main>
  );
}
