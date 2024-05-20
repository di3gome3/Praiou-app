import { Inter } from '@next/font/google';
import Head from 'next/head'; // Importe o componente Head
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  weights: ['400', '700'], // Especificando os pesos desejados
});

export const metadata = {
  title: 'Praiou!',
  description: 'Será que está bom para ir a praia?',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="../../public/praiou logo.svg" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
