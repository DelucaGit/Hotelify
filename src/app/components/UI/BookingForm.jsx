"use client";
import React, {useState} from 'react'

// TODO: Add layer of verification. Form can not be sent in empty.

const BookingForm =  ({hotel}) => {

    const [selectedHoteName, setSelectedHotelName] = useState("");
    const [selectedHotelPrice, setSelectedHotelPrice] = useState(0);

    const [days,setDays] = useState(1);
    const [guests,setGuests] = useState(1);

    const displayName = hotel ? hotel.name : selectedHoteName;
    const displayPrice = hotel ? hotel.price : selectedHotelPrice;

    console.log(hotel)
    const costPerNight = (displayPrice * guests) * days;

    async function handleBooking(formData){
        const firstName = formData.get("firstname")
        const lastName = formData.get("lastname")
        const email = formData.get("email")
        const phone = formData.get("phone")
        const arrivalDate = formData.get("date")
        const numberOfNights = formData.get("nights")


        const newBooking = {
            hotel : displayName,
            firstName, // This is the equivalent to writing firstName : firstName.
            lastName,
            email,
            phone,
            arrivalDate,
            numberOfNights,
            costPerNight,
            id : Math.random().toString()
        }

        const savedBookings = localStorage.getItem("hotel_bookings");
        const currentlist = savedBookings ? JSON.parse(savedBookings) : [];

        currentlist.push(newBooking);
        localStorage.setItem("hotel_bookings", JSON.stringify(currentlist))
        alert("Your booking has been stored at localStorage")
    }
    return (
        <div className={"flex justify-center"}>
            <form
                action={handleBooking}
                className={"md:mx-auto "}>

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

        </div>
    )
}
export default BookingForm
