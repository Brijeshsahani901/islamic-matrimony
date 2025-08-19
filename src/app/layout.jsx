import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import AuthGuard from "@/component/AuthGuard";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Marriage Muslims",
  description: "Find your ideal Muslim match with our trusted marriage platform.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Providers>
          <Toaster position="top-right" reverseOrder={false} />
          <AuthGuard>{children}</AuthGuard>
        </Providers>
      </body>
    </html>
  );
}

