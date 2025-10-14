import "../app/globals.css"; 
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
      <body className="flex flex-col bg-white relative overflow-x-hidden min-h-screen">
        {/* Background */}
        <HomeBackground />

        {/* Content wrapper */}
        <div className="flex flex-col flex-grow w-full items-center">
          {/* Navbar */}
          <div className="w-full max-w-[1440px] mx-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <Navbar />
          </div>

          {/* Main content area */}
          <main className="w-full max-w-[1440px] flex-grow mx-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 md:py-10">
            {children}
          </main>

          {/* Footer */}
          <div className="w-full max-w-[1440px] mx-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
