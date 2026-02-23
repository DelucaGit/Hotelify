import HeroSection from "./components/sections/Hero";
import Listings from "./components/sections/Listings";
import {hotels} from "./data/localdata"

export default function Home() {

    console.log("From Home page", hotels)

    return (
        <div className="relative flex flex-col min-h-screen">

            <main className="flex flex-col  pb-9 mx-auto">
                    <HeroSection allHotels={hotels} />
                <div className={"max-w-9/12 mx-auto"}>
                    <Listings hotels = {hotels} />
                </div>

            </main>

        </div>
    );
}

