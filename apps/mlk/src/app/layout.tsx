import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeBackground from "../components/HomeBackground";

export const metadata = {
  title: "Dr. Martin Luther King Primary School",
  description: "Empowering young minds through education, care, and community.",
  keywords: ["primary school", "education", "MLK School", "public school"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-white relative overflow-x-hidden w-full min-w-[375px]">
        <HomeBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
