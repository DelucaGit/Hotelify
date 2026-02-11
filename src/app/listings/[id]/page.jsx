import React from 'react'
import {hotels} from "../../data/localdata";

const Page = async ({params}) => {
    const {id} = await params;
    const hotel = hotels.find(h => h.id.toString() === id);
    return (
        <div>
            {hotel.name}
        </div>
    )
}
export default Page
