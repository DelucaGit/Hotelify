import React from 'react'
import {hotels} from '../../data/localdata'


const Listings = () => {
    return (

        <section className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center"}>
            {hotels.map(hotel =>
                <div key={hotel.id} className={"border border-black p-6"}>
                    <h3>{hotel.name}</h3>
                </div>)}
        </section>
    )
}
export default Listings
