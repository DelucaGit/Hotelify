"use client";
import React from 'react'
import Link from "next/link";

/**
 * BookingButton
 * Navigational CTA that links to the booking page for a specific hotel.
 *
 * Props:
 * - hotelId: id of the hotel; if absent, the button is not rendered.
 */
const BookingButton = ({hotelId}) => {
    if(!hotelId) return null;
    return (
        <Link
            className={"bg-red-800 text-white font-bold p-4 rounded-2xl" }
            href={`/booking/${hotelId}`}
        >
            Book now & Pay later
        </Link>
    )
}
export default BookingButton
