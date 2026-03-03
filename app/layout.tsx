import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'VENUS Horóscopos Personalizados | Tu horóscopo único cada día',
  description: 'Descubre tu horóscopo personalizado cada día, basado en tu fecha de nacimiento y tu momento de vida actual. Predicciones únicas con IA.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="antialiased font-sans">
        <div className="starfield fixed inset-0 pointer-events-none z-0" />
        <main className="relative z-10 min-h-screen pb-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
