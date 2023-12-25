import PropTypes from "prop-types";
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from "@/components/Sidebar/Sidebar";
import Controller from "@/components/Controller/Controller";
import About from "@/components/About/About";

const inter = Inter({
  subsets: ['latin'],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: 'Spotify Clone',
  description: 'A Spotify ',
};

export default function RootLayout({ children }) {
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

RootLayout.propTypes = {
  children: PropTypes.object,
}