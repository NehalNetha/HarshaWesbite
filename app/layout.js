import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: 'Lyric Video Makers',
  description: 'we make really good lyric videos',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: [ '/appLogo.svg']
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
