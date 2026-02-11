import React from 'react'
import {hotels} from "../../data/localdata";
import Image from "next/image";

const Page = async ({params}) => {
    const {id} = await params;
    const hotel = hotels.find(h => h.id.toString() === id); // Because URL params will always be String
    return (
        <main>
            <Image
                src={hotel.image}
                alt={hotel.name}
                width={600}
                height={400}
                suppressHydrationWarning={true}
                unoptimized={true}
            />

        </main>
    )
}
export default Page
