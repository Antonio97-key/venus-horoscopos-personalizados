'use client';

import { PLANS } from '@/lib/plans';
import { Check, Sparkles } from 'lucide-react';
import type { Language } from '@/lib/i18n';

interface PlanSelectorProps {
  lang: Language;
  currentPlan?: string;
}

export default function PlanSelector({ lang, currentPlan }: PlanSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
      {PLANS.map((plan: any) => (
        <div 
          key={plan.id}
          className={`relative p-6 rounded-3xl border transition-all duration-500 ${
            currentPlan === plan.id 
              ? 'bg-cosmic-gold/10 border-cosmic-gold shadow-[0_0_30px_rgba(255,215,0,0.1)]' 
              : 'bg-white/[0.02] border-white/5 hover:border-cosmic-gold/30'
          }`}
        >
          {plan.id !== 'normal' && (
            <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-cosmic-gold text-cosmic-darkest text-[10px] font-black uppercase tracking-widest flex items-center gap-1 shadow-lg">
              <Sparkles className="w-3 h-3" />
              TOP
            </div>
          )}

          <h4 className="text-lg font-bold text-white mb-1">
            {lang === 'es' ? plan.name : plan.nameEn}
          </h4>
          <p className="text-2xl font-black text-cosmic-gold mb-6">
            {lang === 'es' ? plan.price : plan.priceEn}
          </p>

          <ul className="space-y-3">
            {plan.benefits.map((benefit: any, idx: number) => (
              <li key={idx} className="flex gap-3 text-xs text-cosmic-soft leading-tight">
                <Check className="w-4 h-4 text-cosmic-gold shrink-0" />
                <span>{lang === 'es' ? benefit.es : benefit.en}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
