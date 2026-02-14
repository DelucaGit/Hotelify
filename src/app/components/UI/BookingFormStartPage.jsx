"use client"
import React, {useState} from 'react'


const BookingFormStartPage = ({allHotels = []}) => {

    const [selectedId, setSelectedId] = useState("");
    const activeHotel = allHotels.find(h => h.id.toString() === selectedId);



    return (
        <div className={"border border-gray-100 p-5 shadow-lg rounded-lg bg-white mt-9"}>

            <form action="" className={"max-w-9/12 mx-auto"}>
                <h2>Where is your next escape?</h2>
                <select
                    value={selectedId}
                    onChange={(e) => setSelectedId(e.target.value)}>
                    <option value="">Select destiny</option>
                    {allHotels.map((hotel) => (
                        <option key={hotel.id} value={hotel.id}> {hotel.name}</option>
                    ))}
                </select>
                <input type="text" placeholder={"First name"} name={"firstname"} className={"border border-gray-200 p-2 rounded-2xl"}/>
                <input type="text" placeholder={"Last name"} name={"lastname"} className={"border border-gray-200 p-2 rounded-2xl"}/>
                <input type="tel" placeholder={"Mobile number"} name={"phonenumber"} className={"border border-gray-200 p-2 rounded-2xl"}/>
                <input type="date" min={new Date().toISOString().split("T")[0]} name={"dateOfArrival"} className={"border border-gray-200 p-2 rounded-2xl"}/>
            </form>
            
        </div>
    )
}
export default BookingFormStartPage
