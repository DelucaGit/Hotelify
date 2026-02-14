import HeroSection from "./components/sections/Hero";
import Listings from "./components/sections/Listings";
import {hotels} from "./data/localdata"

export default function Home() {

    console.log("From Home page", hotels)

    return (
        <div className="relative flex flex-col min-h-screen">

            <main className="flex flex-col pt-9 pb-9 max-w-9/10 mx-auto">
                <HeroSection allHotels={hotels} />
                <Listings hotels = {hotels} />
            </main>

        </div>
    );
}

