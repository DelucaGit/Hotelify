import React from 'react'
import {hotels} from '../../data/localdata'


const Listings = () => {
    return (

        <section className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mx-4"}>
            {hotels.map(hotel =>
                <div key={hotel.id} className={"border border-blue-50 p-6 border rounded-2xl"}>
                    <img
                        className={"rounded-2xl"}
                        src={hotel.image} alt={hotel.name}
                        suppressHydrationWarning={true} // I have browser extension that block certain images
                    />
                    <h3>{hotel.name}</h3>
                    <p>{hotel.description}</p>
                    <p>{hotel.price}$ /night</p>
                </div>)}
        </section>
    )
}
export default Listings
