import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AppContextProvider } from "@/context/AppContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Lokin",
  description: "Full stack project",
};

export default function RootLayout({children}) {
  return (
  <ClerkProvider>
    {/* <AppContextProvider> */}
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
    {/* </AppContextProvider> */}
  </ClerkProvider>
  );
}
