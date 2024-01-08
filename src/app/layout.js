import { Inter } from 'next/font/google';
import './globals.css';
import Header from "@/components/Header";

import LeftBar from "@/components/LeftBar";
import RightBar from "@/components/RightBar";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Audidat Clientes',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <div className='flex bg-white top-14'>
          <LeftBar />
          <main className="flex-1 p-2 ml-[17%] mr-[15%] mt-[5.5rem]">
            {children}
          </main>
          <RightBar />
        </div>
      </body >
    </html >
  );
}
