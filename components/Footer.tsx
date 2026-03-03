'use client';

import { useEffect, useState } from 'react';
import { Copy } from 'lucide-react';

export default function Footer() {
  const [url, setUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.href);
    }
  }, []);

  const handleCopy = async () => {
    try {
      const value = url || (typeof window !== 'undefined' ? window.location.href : '');
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer className="mt-10 border-t border-cosmic-gold/20 bg-cosmic-darkest/80 backdrop-blur-sm px-6 py-4 text-xs text-cosmic-soft">
      <div className="max-w-3xl mx-auto space-y-2">
        <p>
          Comparte nuestra página con amigos, familiares o en tus grupos de WhatsApp para que también reciban buenas
          vibras y mensajes positivos.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
          <input
            type="text"
            readOnly
            value={url}
            className="flex-1 px-3 py-2 rounded-lg bg-cosmic-navy/80 border border-cosmic-gold/30 text-[11px] text-gray-200 overflow-x-auto"
          />
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-cosmic-gold text-cosmic-darkest text-[11px] font-semibold hover:opacity-90"
          >
            <Copy className="w-3 h-3" />
            {copied ? 'Copiado' : 'Copiar enlace'}
          </button>
        </div>
      </div>
    </footer>
  );
}
