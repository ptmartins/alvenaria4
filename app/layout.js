import { Inter } from 'next/font/google';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alvanaria 4', 
  description: 'Alvenaria 4 - Beja'
}
 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        <main className="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
