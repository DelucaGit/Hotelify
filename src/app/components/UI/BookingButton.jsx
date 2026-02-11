"use client";
import React from 'react'

const BookingButton = () => {
    const handleBooking = () => {
        alert("Booking button clicked!");
    }

    return (
        <button
            className={"bg-red-800 text-white font-bold p-2 rounded-2xl" }
            onClick={handleBooking}
        >
            Book now & Pay later
        </button>
    )
}
export default BookingButton
