import React from 'react'
import {hotels} from "../../data/localdata";
import Image from "next/image";
import BookingButton from "../../components/UI/BookingButton";

const Page = async ({params}) => {
    const {id} = await params;
    const hotel = hotels.find(h => h.id.toString() === id); // Because URL params will always be String
    if(!hotel) return <div>Hotel not found</div>
    return (
        <>
            {/*Banner image*/}
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
        <main className={"pl-5 pt-9 pb-9 max-w-9/10 md:mx-auto"}>
            <div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>

                {/*Left column - Hotel information*/}
                <div className={"col-span-2"}>
                    <h1 className={" mt-5"}>
                        {hotel.name}
                    </h1>
                    {/*Reviews*/}
                    <div className={" mt-2 flex items-center gap-2"}>
                        <div className={"flex text-yellow-400"}>
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className={`w-5 h-5 ${i < Math.round(hotel.rating) ? "fill-current" : "text-gray-300 fill-current"}`}
                                    viewBox="0 0 20 20"
                                >
                                    {/*Review stars*/}
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className={"text-gray-600"}>{hotel.rating}</span>
                    </div>
                    {/*Social confirmation*/}
                    <div className={" mt-4 space-y-2 text-green-600"}>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold">Fully refundable</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold">Book now & pay later</span>
                        </div>
                    </div>
                    <div className={"mt-5 leading-relaxed"}>
                        <h2>About this hotel</h2>
                        <p >{hotel.fullDescription}</p>
                        <div className={"md:hidden mt-5 mb-5"}>
                        <BookingButton/>
                        </div>
                    </div>
                    <a
                        href={hotel.mapUrl}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline mt-4"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Show on Map
                    </a>

                </div>
                {/*Right column*/}
                <div className={"hidden md:block col-span-1 "}>
                    <div className={"sticky top-10 bg-green-50 p-5 rounded-2xl shadow-lg"}>
                        <h3>Book here</h3>
                        <p>Book now & Pay 30 days later!</p>
                        <BookingButton/>

                    </div>
                </div>
            </div>
        </main>

        </>
    )
}
export default Page
