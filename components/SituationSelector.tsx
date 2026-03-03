'use client';

import { useState } from 'react';
import { SITUATION_OPTIONS, SITUATION_CATEGORIES } from '../lib/situations';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { getTranslation, type Language } from '../lib/i18n';

interface SituationSelectorProps {
  onSubmit: (situations: string[]) => void;
  lang: Language;
}

export default function SituationSelector({ onSubmit, lang }: SituationSelectorProps) {
  const t = getTranslation(lang);
  const [selected, setSelected] = useState<string[]>([]);
  const requiredCount = 3;

  const toggle = (opt: typeof SITUATION_OPTIONS[0]) => {
    const exists = selected.includes(opt.label);
    if (exists) {
      setSelected(selected.filter((s) => s !== opt.label));
    } else if (selected.length < requiredCount) {
      setSelected([...selected, opt.label]);
    }
  };

  const isComplete = selected.length === requiredCount;

  return (
    <div className="min-h-screen flex flex-col px-6 py-8 animate-fade-in mb-24 max-w-4xl mx-auto w-full">
      <div className="mb-8 pt-20">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
          {t.situation_title}
        </h2>
        <p className="text-cosmic-soft text-base md:text-lg leading-relaxed">
          {t.situation_subtitle}
        </p>
      </div>

      <div className="space-y-8 flex-1 pb-12">
        {SITUATION_CATEGORIES.map((cat) => (
          <div key={cat.id} className="animate-slide-up">
            <h3 className="text-sm font-bold text-cosmic-gold mb-4 uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-[1px] bg-cosmic-gold/30"></span>
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-3">
              {SITUATION_OPTIONS.filter((o) => o.category === cat.id).map((opt) => {
                const isSelected = selected.includes(opt.label);
                return (
                  <button
                    key={opt.id}
                    onClick={() => toggle(opt)}
                    className={`px-5 py-3 rounded-2xl text-sm md:text-base font-semibold transition-all flex items-center gap-3 border-2 ${isSelected
                      ? 'bg-cosmic-gold/25 text-white border-cosmic-gold shadow-[0_0_20px_rgba(255,215,0,0.2)] scale-[1.05]'
                      : 'bg-cosmic-navy/40 text-cosmic-soft border-white/5 hover:border-cosmic-gold/30'
                      }`}
                  >
                    <span className="text-lg">{opt.icon}</span>
                    {opt.label}
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-cosmic-gold ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-cosmic-darkest via-cosmic-darkest/95 to-transparent pt-20 border-t border-white/5 backdrop-blur-md z-40">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-4 px-2">
            <p className="text-cosmic-soft text-sm font-medium">
              {selected.length} / {requiredCount} {t.situation_selected}
            </p>
            <div className="flex gap-1">
              {[...Array(requiredCount)].map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-1.5 rounded-full transition-all duration-500 ${i < selected.length ? 'bg-cosmic-gold shadow-[0_0_10px_rgba(255,215,0,0.5)]' : 'bg-white/10'}`}
                />
              ))}
            </div>
          </div>
          <button
            onClick={() => onSubmit(selected)}
            disabled={!isComplete}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-cosmic-gold to-cosmic-accent text-cosmic-darkest font-bold text-xl flex items-center justify-center gap-3 hover:opacity-90 transition-all disabled:opacity-30 disabled:grayscale disabled:cursor-not-allowed shadow-xl active:scale-[0.98]"
          >
            {t.continue} <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
