'use client';

import { BookOpen, Lightbulb, Sparkles, Wind } from 'lucide-react';
import type { EducationalItem } from '@/lib/educational';

interface EducationalSectionProps {
    items: EducationalItem[];
}

export default function EducationalSection({ items }: EducationalSectionProps) {
    const getIcon = (category: string) => {
        switch (category) {
            case 'energia': return <Wind className="w-5 h-5 text-cosmic-aqua" />;
            case 'consejo': return <Lightbulb className="w-5 h-5 text-cosmic-gold" />;
            case 'ritual_suave': return <Sparkles className="w-5 h-5 text-cosmic-accent" />;
            case 'afirmacion': return <BookOpen className="w-5 h-5 text-white" />;
            default: return <BookOpen className="w-5 h-5" />;
        }
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {items.map((item, idx) => (
                <div
                    key={item.id}
                    className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-cosmic-gold/30 transition-all group animate-slide-up"
                    style={{ animationDelay: `${idx * 150}ms` }}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-2xl bg-white/5 group-hover:bg-cosmic-gold/10 transition-colors`}>
                            {getIcon(item.category)}
                        </div>
                        <h3 className="font-bold text-lg text-white leading-tight">
                            {item.title}
                        </h3>
                    </div>
                    <p className="text-cosmic-soft text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                        {item.body}
                    </p>
                </div>
            ))}
        </div>
    );
}
