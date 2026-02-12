"use client";
import React, {useState} from 'react'

const BookingForm =  (hotelData) => {

    const {hotel} =  hotelData
    const [days,setDays] = useState(1);
    const [guests,setGuests] = useState(1);

    const costPerNight = (hotel.price * guests) * days;

    async function handleBooking(formData){
        const firstName = formData.get("firstname")
        const lastName = formData.get("lastname")
        const email = formData.get("email")
        const phone = formData.get("phone")
        const arrivalDate = formData.get("date")
        const numberOfNights = formData.get("nights")

        console.log(firstName, lastName, email, phone, arrivalDate, numberOfNights)
    }
    return (
        <>
            <form action={handleBooking}>
                <input
                    type="text"
                    placeholder={"First name"}
                    name={"firstname"}
                    className={"border border-gray-100 p-2 rounded-2xl"}
                />
                <input
                    type="text"
                    placeholder={"Last name"}
                    name={"lastname"}
                    className={"border border-gray-100 p-2 rounded-2xl"}

                /><br/><br/>
                <input
                    type="text"
                    placeholder={"Email"}
                    name={"email"}
                    className={"border border-gray-100 p-2 rounded-2xl"}
                />
                <input
                    type="tel"
                    placeholder={"Phone"}
                    name={"phone"}
                    className={"border border-gray-100 p-2 rounded-2xl"}/><br/><br/>
                <label>Arrival day</label><br/>
                <input
                    type="date"
                    name={"date"}
                    className={"border border-gray-100 p-2 rounded-2xl"}/>
                <input
                    type="number"
                    name={"nights"}
                    placeholder={"Number of nights"}
                    className={"border border-gray-100 p-2 rounded-2xl"}/>

                <br/><button
                    className={"bg-red-800 text-white font-bold p-2 rounded-2xl cursor-pointer mt-5"}
                    type={"submit"}
                    >
                        Submit
                </button>
            </form>
        </>
    )
}
export default BookingForm
