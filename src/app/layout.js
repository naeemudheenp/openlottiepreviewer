import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";



export const metadata = {
  title: "Online Lottie Previewer",
  description: "Online Lottie Previewer: Compare and Preview Lottie JSON Animations in Different Players",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6480505866670634"
          crossorigin="anonymous"></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6480505866670634"
          crossorigin="anonymous"></script>
        <link rel="canonical" href="https://openlottiepreviewer.com/" />
      </head>
      <body
        className={` antialiased bg-white`}
      >
        <Header />
        <Analytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}
