import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";



export const metadata = {
  title: "Online Lottie Previewer",
  description: "Easily preview and compare Lottie animations in Online across dark and light themes. Perfect for designers and developers to test Lottie JSON files using lottie-react and react-lottie-player.",
  keywords: ['Lottie Previewer', 'Lottie JSON Viewer', 'lottie-react', 'React Lottie Player', 'Online Lottie Previewer', 'Open Lottie Previewer', 'Themes', 'Dark Mode', 'Light Mode', 'lottie players'],
  authors: [{ name: 'Naeemudheen P' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6480505866670634"
          crossorigin="anonymous"></script>
        <link rel="canonical" href="https://openlottiepreviewer.com/" />
      </head>
      <body
        className={` antialiased bg-white min-h-screen  `}
      >
        <Header />
        <Analytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}
