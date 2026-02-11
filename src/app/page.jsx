import HeroSection from "./components/sections/Hero";
import Listings from "./components/sections/Listings";

export default function Home() {
    return (
        <div className="relative flex flex-col min-h-screen">

            <main className="flex flex-col pt-9 pb-9 max-w-9/10 mx-auto">
                <HeroSection />
                <Listings />
            </main>

        </div>
    );
}
