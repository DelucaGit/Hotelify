import HeroSection from "./components/sections/Hero";
import Listings from "./components/sections/Listings";
import {hotels} from "./data/localdata"

/**
 * Home (root page)
 *
 * Composes the landing hero (with a quick booking form) and the listings grid.
 * Data source is the local `hotels` array.
 */
export default function Home() {

    return (
        <div className="relative flex flex-col min-h-screen">

            {/* Main content area with hero and listings */}
            <main className="flex flex-col  pb-9 mx-auto">
                {/* Hero banner with start-page booking widget */}
                <HeroSection allHotels={hotels} />
                {/* Listings section showing hotel cards */}
                <div className={"max-w-9/12 mx-auto"}>
                    <Listings hotels = {hotels} />
                </div>

            </main>

        </div>
    );
}

