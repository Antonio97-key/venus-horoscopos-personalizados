'use client';

import { useState } from 'react';
import { Target, CheckCircle2 } from 'lucide-react';
import { getTranslation } from '@/lib/i18n';
import type { Language } from '@/lib/i18n';

const SITUATIONS = [
  { id: 'amor', icon: '❤️', es: 'Amor', en: 'Love' },
  { id: 'dinero', icon: '💰', es: 'Dinero', en: 'Money' },
  { id: 'salud', icon: '🏥', es: 'Salud', en: 'Health' },
  { id: 'trabajo', icon: '💼', es: 'Trabajo', en: 'Work' },
  { id: 'familia', icon: '👨‍👩-👧', es: 'Familia', en: 'Family' },
  { id: 'proyectos', icon: '🚀', es: 'Proyectos', en: 'Projects' },
  { id: 'espiritualidad', icon: '🧘', es: 'Espiritualidad', en: 'Spirituality' },
  { id: 'viajes', icon: '✈️', es: 'Viajes', en: 'Travel' },
  { id: 'estudios', icon: '📚', es: 'Estudios', en: 'Studies' },
];

interface SituationSelectorProps {
  onSubmit: (situations: string[]) => void;
  lang: Language;
}

export default function SituationSelector({ onSubmit, lang }: SituationSelectorProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const t = getTranslation(lang);

  const toggleSituation = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(s => s !== id));
    } else if (selected.length < 3) {
      setSelected([...selected, id]);
    }
  };

  const currentSituations = selected.map(id => {
    const s = SITUATIONS.find(sit => sit.id === id);
    return lang === 'es' ? s?.es : s?.en;
  }).filter(Boolean) as string[];

  return (
    <div className="w-full max-w-2xl animate-slide-up">
      <div className="card-cosmic rounded-3xl p-8 glow-gold">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-cosmic-gold/20 text-cosmic-gold">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">{t.situation_title}</h2>
        </div>

        <p className="text-cosmic-soft text-sm mb-8">
          {t.situation_subtitle}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {SITUATIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => toggleSituation(s.id)}
              className={`p-4 rounded-2xl border transition-all flex flex-col items-center gap-2 group ${
                selected.includes(s.id)
                  ? 'bg-cosmic-gold/20 border-cosmic-gold text-white shadow-lg'
                  : 'bg-white/5 border-white/5 text-cosmic-soft hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">{s.icon}</span>
              <span className="text-[10px] font-black uppercase tracking-widest">
                {lang === 'es' ? s.es : s.en}
              </span>
            </button>
          ))}
        </div>

        <button
          onClick={() => onSubmit(currentSituations)}
          disabled={selected.length !== 3}
          className={`w-full py-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-lg transition-all ${
            selected.length === 3
              ? 'btn-primary shadow-xl scale-100 hover:scale-105 active:scale-95'
              : 'bg-white/5 border border-white/10 text-cosmic-soft opacity-50 cursor-not-allowed'
          }`}
        >
          {selected.length === 3 ? (
             <>
               <span>{t.continue}</span>
               <CheckCircle2 className="w-5 h-5" />
             </>
          ) : (
             <span>{selected.length} / 3 {t.situation_selected}</span>
          )}
        </button>
      </div>
    </div>
  );
}
