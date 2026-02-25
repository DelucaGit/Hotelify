"use client"
import React, { useState } from 'react'

/**
 * BookingFormStartPage
 * Lightweight booking widget shown on the landing hero.
 *
 * Props:
 * - allHotels: list of available hotels to choose from
 *
 * State:
 * - selectedId: id of the chosen hotel
 * - guests: number of guests
 * - nights: number of nights
 *
 * Behavior:
 * - Computes total cost for the currently selected hotel
 * - Saves a composed booking object into localStorage on submit
 */
const BookingFormStartPage = ({ allHotels = [] }) => {
    // --- State ---
    const [selectedId, setSelectedId] = useState(""); // hotel id selected from dropdown
    const [guests, setGuests] = useState(1);           // guest count
    const [nights, setNights] = useState(1);           // nights count

    // --- Derived values / Logic ---
    const activeHotel = allHotels.find(h => h.id.toString() === selectedId);
    const totalCost = (activeHotel?.price || 0) * guests * nights;

    // Form action handler: receives FormData, builds a booking, stores it locally
    const handleBooking= (formdata) => {
        const firstName = formdata.get("firstname");
        const lastName = formdata.get("lastname");
        const email = formdata.get("email");
        const phone = formdata.get("phone");
        const arrivalDate = formdata.get("date");
        const numberOfNights = formdata.get("nights");

        const newBooking = {
            hotel: activeHotel,
            firstName,
            lastName,
            email,
            phone,
            arrivalDate,
            numberOfNights,
            guests,
            totalCost,
            id: Math.random().toString() // simple client-side id
        }

        // Persist to localStorage (append to existing list)
        const savedBookings = localStorage.getItem("hotel_bookings");
        const currentlist = savedBookings ? JSON.parse(savedBookings) : [];

        currentlist.push(newBooking);
        localStorage.setItem("hotel_bookings", JSON.stringify(currentlist));

        alert("Your booking has been stored at localStorage")
    };

    // --- Render ---
    return (
        <div className="border border-gray-100 p-6 shadow-lg rounded-2xl bg-white mt-9 mx-auto max-w-6xl">
            {/* Using a form action to keep client logic minimal */}
            <form action={handleBooking} className="space-y-6">
                <h2 className="text-xl font-semibold">Where is your next escape?</h2>

                {/* 1. First Row: Hotel, First Name, Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <select
                        value={selectedId}
                        onChange={(e) => setSelectedId(e.target.value)}
                        className="border p-2 rounded-2xl w-full"
                    >
                        <option value="">Select destiny</option>
                        {allHotels.map((hotel) => (
                            <option key={hotel.id} value={hotel.id}>
                                {hotel.name}
                            </option>
                        ))}
                    </select>

                    <input
                        type="text"
                        name="firstname"
                        placeholder="First name"
                        className="border border-gray-200 p-2 rounded-2xl w-full"
                    />

                    <input
                        type="text"
                        name="lastname"
                        placeholder="Last name"
                        className="border border-gray-200 p-2 rounded-2xl w-full"
                    />
                </div>

                {/* 2. Second Row: Phone, Date, Nights, Guests */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <input
                        type="tel"
                        name="phonenumber"
                        placeholder="Mobile number"
                        className="border border-gray-200 p-2 rounded-2xl w-full"
                    />

                    <input
                        type="email"
                        placeholder={"Email"}
                        name={"email"}
                        className={"border border-gray-200 p-2 rounded-2xl w-full"}
                    />
                    <input
                        type="date"
                        name="dateOfArrival"
                        min={new Date().toISOString().split("T")[0]}
                        className="border border-gray-200 p-2 rounded-2xl w-full"
                    />

                    <div className="flex items-center border border-gray-200 rounded-2xl px-2">
                        <label className="text-xs text-gray-400 mr-2 uppercase">Nights</label>
                        <input
                            type="number"
                            min="1"
                            value={nights}
                            onChange={(e) => setNights(e.target.value)}
                            className="w-full p-2 outline-none rounded-2xl"
                        />
                    </div>

                    <div className="flex items-center border border-gray-200 rounded-2xl px-2">
                        <label className="text-xs text-gray-400 mr-2 uppercase">Guests</label>
                        <input
                            type="number"
                            min="1"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="w-full p-2 outline-none rounded-2xl"
                        />
                    </div>
                </div>

                {/* 3. Bottom Row: Price and Submit button */}
                <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-4 rounded-2xl gap-4">
                    {activeHotel ? (
                        <div className="text-center md:text-left">
                            {/* Live price preview for the selected hotel */}
                            <p className="text-sm text-gray-500">Total for {nights} nights</p>
                            <p className="text-2xl font-bold text-gray-900">${totalCost}</p>
                        </div>
                    ) : (
                        <p className="text-gray-400">Select a hotel to see pricing</p>
                    )}

                    {/* Submit CTA */}
                    <button className="bg-red-800 text-white px-8 py-3 rounded-2xl font-bold hover:bg-red-900 transition-colors w-full md:w-auto">
                        Book Now
                    </button>
                </div>
            </form>
        </div>
    )
}

export default BookingFormStartPage