import React from 'react'
import Link from "next/link";

/**
 * Listings
 * Grid of hotel cards. Each card links to its detail page.
 *
 * Props:
 * - hotels: array of hotel objects to display
 */
const Listings =  ({hotels}) => {

    console.log("From Listings",hotels)

    return (
        <section className={"md:max-w-9/10 mx-auto"}>
            <h2 className={"mb-5"}>Where is your next stop?</h2>
            <p className={"mb-5"}>We have the most luxurious adventures waiting for you.</p>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center "}>
            {hotels.map(hotel =>
                <Link key={hotel.id} href={`/listings/${hotel.id}`}>
                <div className={"border border-blue-50 border rounded-2xl"}>
                    {/* Card image */}
                    <img
                        className={"rounded-2xl h-[200px] object-cover w-full"}
                        src={hotel.image} alt={hotel.name}
                        suppressHydrationWarning={true} // I have browser extension that block certain images
                    />
                    {/* Card title */}
                    <h3 className={"font-bold mt-2"}>
                        {hotel.name}
                    </h3>
                    {/* Short description */}
                    <p className={"mt-2"}>
                        {hotel.summary}
                    </p>
                    {/* Price snippet */}
                    <p className={"font-bold mt-2 text-xl"}>
                        ${hotel.price}
                    </p>
                    <p className={"text-sm"}>
                        avg per night
                    </p>
                </div>
                </Link>)}

            </div>
        </section>
    )
}
export default Listings
