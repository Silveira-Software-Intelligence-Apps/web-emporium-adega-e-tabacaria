import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Emporium Adega E Tabacaria — Barueri',
  description: 'Emporium Adega E Tabacaria em Barueri — o lugar certo para quem busca experiência, qualidade e estilo. Venha conhecer e surpreenda-se.',
  keywords: 'Emporium Adega E Tabacaria, tabacaria, tabacaria Barueri, Barueri, melhor tabacaria, tabacaria profissional',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Emporium Adega E Tabacaria',
    description: 'Emporium Adega E Tabacaria — tabacaria em Barueri. Emporium Adega E Tabacaria em Barueri — o lugar certo para quem busca experiência, qualidade e estilo. Venha conhecer e surpreenda-se.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Emporium Adega E Tabacaria',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
