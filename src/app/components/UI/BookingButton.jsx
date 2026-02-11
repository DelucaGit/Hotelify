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
            Press me
        </button>
    )
}
export default BookingButton
