'use client';

import { Star, History, Sparkles, User, BookOpen } from 'lucide-react';
import { getTranslation } from '../lib/i18n';
import type { Language } from '../lib/i18n';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  lang: Language;
}

export default function Navigation({ activeTab, setActiveTab, lang }: NavigationProps) {
  const t = getTranslation(lang);

  const tabs = [
    { id: 'today', icon: Star, label: t.tab_today || 'Hoy' },
    { id: 'oraculo', icon: Sparkles, label: t.tab_oracle || 'Oráculo' },
    { id: 'history', icon: History, label: t.tab_history || 'Historial' },
    { id: 'educational', icon: BookOpen, label: t.tab_educational || 'Aprender' },
    { id: 'profile', icon: User, label: t.tab_profile || 'Perfil' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-cosmic-darkest via-cosmic-darkest to-transparent z-40">
      <div className="max-w-md mx-auto bg-cosmic-navy/80 backdrop-blur-xl border border-white/10 rounded-3xl p-2 flex justify-between shadow-2xl">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-1.5 px-5 py-3 rounded-2xl transition-all duration-300 ${isActive
                ? 'bg-cosmic-gold text-cosmic-darkest shadow-lg shadow-cosmic-gold/20 scale-105'
                : 'text-cosmic-soft hover:bg-white/5 hover:text-white'
                }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'fill-current' : ''}`} />
              <span className="text-[10px] font-black uppercase tracking-tighter">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
