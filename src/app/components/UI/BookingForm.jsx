"use client"
import React, { useState, useEffect } from 'react'

const BookingForm = ({ hotel }) => {
    // --- State ---
    const [guests, setGuests] = useState(1);
    const [nights, setNights] = useState(1);

    // --- Logic ---
    const totalCost = (hotel?.price || 0) * guests * nights;

    const handleBooking = (formdata) => {
        const firstName = formdata.get("firstname");
        const lastName = formdata.get("lastname");
        const email = formdata.get("email");
        const phone = formdata.get("phone");
        const arrivalDate = formdata.get("date");
        const numberOfNights = formdata.get("nights");

        const newBooking = {
            hotel: hotel,
            firstName,
            lastName,
            email,
            phone,
            arrivalDate,
            numberOfNights,
            guests,
            totalCost,
            id: Math.random().toString()
        }

        const savedBookings = localStorage.getItem("hotel_bookings");
        const currentlist = savedBookings ? JSON.parse(savedBookings) : [];

        currentlist.push(newBooking);
        localStorage.setItem("hotel_bookings", JSON.stringify(currentlist));
        alert("Your booking has been stored at localStorage")
    };

    return (
        <div className="border border-gray-100 p-6 shadow-lg rounded-2xl bg-white mt-9 mx-auto max-w-6xl">
            <form action={handleBooking} className="space-y-6">
                <h2 className="text-xl font-semibold">Complete your booking for {hotel?.name}</h2>

                {/* 1. First Row: First Name, Last Name, Email */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        type="text"
                        name="firstname"
                        placeholder="First name"
                        className="border border-gray-200 p-2 rounded-2xl w-full"
                        required
                    />

                    <input
                        type="text"
                        name="lastname"
                        placeholder="Last name"
                        className="border border-gray-200 p-2 rounded-2xl w-full"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="border border-gray-200 p-2 rounded-2xl w-full"
                        required
                    />
                </div>

                {/* 2. Second Row: Phone, Date, Nights, Guests */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Mobile number"
                        className="border border-gray-200 p-2 rounded-2xl w-full"
                        required
                    />

                    <input
                        type="date"
                        name="date"
                        min={new Date().toISOString().split("T")[0]}
                        className="border border-gray-200 p-2 rounded-2xl w-full"
                        required
                    />

                    <div className="flex items-center border border-gray-200 rounded-2xl px-2">
                        <label className="text-xs text-gray-400 mr-2 uppercase">Nights</label>
                        <input
                            type="number"
                            name="nights"
                            min="1"
                            value={nights}
                            onChange={(e) => setNights(parseInt(e.target.value) || 1)}
                            className="w-full p-2 outline-none rounded-2xl"
                            required
                        />
                    </div>

                    <div className="flex items-center border border-gray-200 rounded-2xl px-2">
                        <label className="text-xs text-gray-400 mr-2 uppercase">Guests</label>
                        <input
                            type="number"
                            name="guests"
                            min="1"
                            value={guests}
                            onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                            className="w-full p-2 outline-none rounded-2xl"
                            required
                        />
                    </div>
                </div>

                {/* 3. Bottom Row: Price and Submit button */}
                <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-4 rounded-2xl gap-4">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-gray-500">Total for {nights} nights</p>
                        <p className="text-2xl font-bold text-gray-900">${totalCost}</p>
                    </div>

                    <button type="submit" className="bg-red-800 text-white px-8 py-3 rounded-2xl font-bold hover:bg-red-900 transition-colors w-full md:w-auto">
                        Book Now
                    </button>
                </div>
            </form>
        </div>
    )
}

export default BookingForm
