import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
// import StoreProvider from "@/store/StoreProvider";
import Footer from "@/components/utilities/footer/Footer";
import { cookies } from "next/headers"; //  <-- server-side cookie access
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Promoquity",
  description: "Promoquity - Your gateway to growth",
};

export default async function RootLayout({ children }) {

    const cookieStore = await cookies(); 
  const token = cookieStore.get("token")?.value || null; 


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <StoreProvider> */}

        <Navbar token={token}></Navbar>
        {children}
        <Footer></Footer>
        {/* </StoreProvider> */}
      </body>
    </html>
  );
}
