import HeroSection from "./components/sections/Hero";
import Listings from "./components/sections/Listings";

export default function Home() {
    return (
        <div className="relative flex flex-col min-h-screen">

            <main className="flex flex-col">
                <HeroSection />
                <Listings />
            </main>

        </div>
    );
}
