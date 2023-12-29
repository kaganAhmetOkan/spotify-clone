import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from "@/components/Sidebar/Sidebar";
import About from "@/components/About/About";
import Controller from "@/components/Controller/Controller";

const inter = Inter({
  subsets: ['latin'],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: 'Spotify Clone',
  description: 'A Spotify Clone',
};

interface RootParams {
  readonly children: React.ReactNode;
};

export default function RootLayout({ children }: RootParams) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="rootRow">
          <Sidebar />
          {children}
          <About />
        </div>
        <Controller />
      </body>
    </html>
  );
};