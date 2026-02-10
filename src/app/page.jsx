import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/Hero";

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 flex flex-col">
              <HeroSection />
          </main>
      </div>
  );
}
