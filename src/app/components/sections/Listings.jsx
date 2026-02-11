import React from 'react'
import {hotels} from '../../data/localdata'


const Listings = () => {
    return (
        <section className={"max-w-9/10 mx-auto"}>
            <h2 className={"mb-5"}>Where is your next stop?</h2>
            <p className={"mb-5"}>We have the most luxurious adventures waiting for you.</p>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center "}>
            {hotels.map(hotel =>
                <div key={hotel.id} className={"border border-blue-50 p-6 border rounded-2xl"}>
                    <img
                        className={"rounded-2xl"}
                        src={hotel.image} alt={hotel.name}
                        suppressHydrationWarning={true} // I have browser extension that block certain images
                    />
                    <h3 className={"font-bold mt-2"}>
                        {hotel.name}
                    </h3>
                    <p className={"mt-2"}>
                        {hotel.description}
                    </p>
                    <p className={"font-bold mt-2 text-xl"}>
                        ${hotel.price}
                    </p>
                    <p className={"text-sm"}>
                        avg per night
                    </p>
                </div>)}

            </div>
        </section>
    )
}
export default Listings
