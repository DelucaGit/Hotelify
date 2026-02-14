import React from 'react'
import {hotels} from "../../data/localdata";
import BookingForm from "../../components/UI/BookingForm"

const Page = async ({params}) => {
    const {id} = await params;
    const hotel = hotels.find(h => h.id.toString() === id);

    return (
        <main className={"max-w-9/10 mx-auto pt-9 pb-9"}>
            <h1 className={"text-center"}>Boka hos: {hotel.name}</h1>
            <div className={"border border-gray-50 rounded-2xl shadow-lg p-5 my-9"}>
                <BookingForm hotel={hotel}/>
                {/*TODO: Find a way to make BookingForm independent of hotel data.*/}
            </div>
        </main>
    )
}
export default Page
