"use client"
import React, { useState } from 'react'

const BookingFormStartPage = ({ allHotels = [] }) => {
    // --- State ---
    const [selectedId, setSelectedId] = useState("");
    const [guests, setGuests] = useState(1);
    const [nights, setNights] = useState(1);

    // --- Logic ---
    const activeHotel = allHotels.find(h => h.id.toString() === selectedId);
    const totalCost = (activeHotel?.price || 0) * guests * nights;

    const handleForm = () => {
        // Logic goes here
    };

    return (
        <div className="border border-gray-100 p-6 shadow-lg rounded-2xl bg-white mt-9 mx-auto max-w-6xl">
            <form action={handleForm} className="space-y-6">
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
                            <p className="text-sm text-gray-500">Total for {nights} nights</p>
                            <p className="text-2xl font-bold text-gray-900">${totalCost}</p>
                        </div>
                    ) : (
                        <p className="text-gray-400">Select a hotel to see pricing</p>
                    )}

                    <button className="bg-red-800 text-white px-8 py-3 rounded-2xl font-bold hover:bg-red-900 transition-colors w-full md:w-auto">
                        Book Now
                    </button>
                </div>
            </form>
        </div>
    )
}

export default BookingFormStartPage