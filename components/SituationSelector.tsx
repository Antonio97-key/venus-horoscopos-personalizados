'use client';

import { useState } from 'react';
import { SITUATION_OPTIONS, SITUATION_CATEGORIES } from '../lib/situations';
import { ChevronRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { getTranslation, type Language } from '../lib/i18n';

interface SituationSelectorProps {
  onSubmit: (situations: string[]) => void;
  lang: Language;
}

export default function SituationSelector({ onSubmit, lang }: SituationSelectorProps) {
  const t = getTranslation(lang);
  const [selected, setSelected] = useState<string[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['sentimental']));
  const requiredCount = 3;

  const toggle = (opt: typeof SITUATION_OPTIONS[0]) => {
    const exists = selected.includes(opt.label);
    if (exists) {
      setSelected(selected.filter((s) => s !== opt.label));
    } else if (selected.length < requiredCount) {
      setSelected([...selected, opt.label]);
    }
  };

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const isComplete = selected.length === requiredCount;

  const categoryLabels: Record<string, string> = {
    es: {
      sentimental: 'Relaciones sentimentales',
      laboral: 'Situación laboral / financiera',
      planes: 'Planes y proyectos',
      familiar: 'Situación familiar',
      emocional: 'Estado emocional'
    },
    en: {
      sentimental: 'Romantic relationships',
      laboral: 'Work / Financial situation',
      planes: 'Plans and projects',
      familiar: 'Family situation',
      emocional: 'Emotional state'
    }
  };

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

      <div className="space-y-4 flex-1 pb-12">
        {SITUATION_CATEGORIES.map((cat) => {
          const isExpanded = expandedCategories.has(cat.id);
          const categoryOptions = SITUATION_OPTIONS.filter((o) => o.category === cat.id);
          const selectedInCategory = categoryOptions.filter(o => selected.includes(o.label));
          
          return (
            <div key={cat.id} className="animate-slide-up rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
              <button
                onClick={() => toggleCategory(cat.id)}
                className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-cosmic-gold uppercase tracking-widest">
                    {categoryLabels[lang][cat.id]}
                  </span>
                  {selectedInCategory.length > 0 && (
                    <span className="px-2 py-0.5 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full">
                      {selectedInCategory.length}
                    </span>
                  )}
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-cosmic-gold" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-cosmic-soft" />
                )}
              </button>
              
              {isExpanded && (
                <div className="p-4 pt-0 flex flex-wrap gap-3">
                  {categoryOptions.map((opt) => {
                    const isSelected = selected.includes(opt.label);
                    return (
                      <button
                        key={opt.id}
                        onClick={() => toggle(opt)}
                        className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 border-2 ${
                          isSelected
                            ? 'bg-cosmic-gold/25 text-white border-cosmic-gold shadow-[0_0_15px_rgba(255,215,0,0.2)]'
                            : 'bg-cosmic-navy/40 text-cosmic-soft border-white/5 hover:border-cosmic-gold/30'
                        }`}
                      >
                        <span className="text-base">{opt.icon}</span>
                        <span>{opt.label}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-cosmic-gold ml-1" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
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
                  className={`w-8 h-1.5 rounded-full transition-all duration-500 ${
                    i < selected.length 
                      ? 'bg-cosmic-gold shadow-[0_0_10px_rgba(255,215,0,0.5)]' 
                      : 'bg-white/10'
                  }`}
                />
              ))}
            </div>
          </div>
          <button
            onClick={() => onSubmit(selected)}
            disabled={!isComplete}
            className={`w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-cosmic-gold to-cosmic-accent text-cosmic-darkest font-bold text-xl flex items-center justify-center gap-3 transition-all shadow-xl active:scale-[0.98] ${
              !isComplete 
                ? 'opacity-30 grayscale cursor-not-allowed' 
                : 'hover:opacity-90 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]'
            }`}
          >
            {t.continue} <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
