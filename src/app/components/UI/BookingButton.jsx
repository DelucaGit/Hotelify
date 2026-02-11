"use client";
import React from 'react'
import Link from "next/link";

const BookingButton = ({hotelId}) => {
    if(!hotelId) return null;
    return (
        <Link
            className={"bg-red-800 text-white font-bold p-2 rounded-2xl" }
            href={`/booking/${hotelId}`}
        >
            Book now & Pay later
        </Link>
    )
}
export default BookingButton
