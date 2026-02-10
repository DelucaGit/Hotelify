import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/Hero";
import Listings from "./components/sections/Listings";

export default function Home() {
    return (
        <div className="relative flex flex-col min-h-screen">
            <Navbar />

            <main className="flex flex-col">
                <HeroSection />
                <Listings />
            </main>

        </div>
    );
}
