import React from 'react'
import {hotels} from "../../data/localdata";
import Image from "next/image";

const Page = async ({params}) => {
    const {id} = await params;
    const hotel = hotels.find(h => h.id.toString() === id); // Because URL params will always be String
    return (
        <>
        <div className={"relative w-full h-[300px] md:h-[500px]"}>
            <Image
                src={hotel.image}
                alt={hotel.name}
                priority={true} // Tells Next.js to load it first
                fill={true}
                suppressHydrationWarning={true}
                unoptimized={true}
                className={"object-cover"}
            />
        </div>
        <main>
            <h1 className={"ml-5 mt-5"}>
                {hotel.name}
            </h1>

        </main>

        </>
    )
}
export default Page
