'use client';

import { useState } from 'react';
import { Calendar, ChevronRight, Star } from 'lucide-react';
import { getTranslation } from '@/lib/i18n';
import type { Language } from '@/lib/i18n';

interface BirthdateSelectorProps {
    onSubmit: (data: { day: string; month: string; year: string }) => void;
    lang: Language;
}

export default function BirthdateSelector({ onSubmit, lang }: BirthdateSelectorProps) {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const t = getTranslation(lang);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (day && month && year) {
            onSubmit({ day, month, year });
        }
    };

    return (
        <div className="w-full max-w-md animate-slide-up">
            <div className="card-cosmic rounded-3xl p-8 glow-gold relative overflow-hidden bg-cosmic-navy/40 backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Star className="w-24 h-24 text-cosmic-gold" />
                </div>

                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-2xl bg-cosmic-gold/20 text-cosmic-gold">
                        <Calendar className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">{t.birthdate_title}</h2>
                </div>

                <p className="text-cosmic-soft text-sm mb-8 leading-relaxed">
                    {t.birthdate_subtitle}
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-cosmic-gold font-bold ml-1">{t.day}</label>
                            <input
                                type="number"
                                min="1"
                                max="31"
                                required
                                value={day}
                                onChange={(e) => setDay(e.target.value)}
                                placeholder="DD"
                                className="w-full px-4 py-4 rounded-2xl text-center text-lg font-bold bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cosmic-gold/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-cosmic-gold font-bold ml-1">{t.month}</label>
                            <input
                                type="number"
                                min="1"
                                max="12"
                                required
                                value={month}
                                onChange={(e) => setMonth(e.target.value)}
                                placeholder="MM"
                                className="w-full px-4 py-4 rounded-2xl text-center text-lg font-bold bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cosmic-gold/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-cosmic-gold font-bold ml-1">{t.month}</label>
                            <input
                                type="number"
                                min="1900"
                                max={new Date().getFullYear()}
                                required
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                placeholder="AAAA"
                                className="w-full px-4 py-4 rounded-2xl text-center text-lg font-bold bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cosmic-gold/50"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-lg bg-cosmic-gold text-cosmic-darkest hover:opacity-90 active:scale-[0.98] transition-all"
                    >
                        <span>{t.continue}</span>
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </form>
            </div>
        </div>
    );
}
