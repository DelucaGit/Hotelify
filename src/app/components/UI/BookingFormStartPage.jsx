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
        <div className="border border-gray-100 p-5 shadow-lg rounded-lg bg-white mt-9">
            <form action={handleForm} className="max-w-9/12 mx-auto">
                <h2>Where is your next escape?</h2>

                {/* Hotel Selection */}
                <select
                    value={selectedId}
                    onChange={(e) => setSelectedId(e.target.value)}
                    className="border p-2 rounded-xl w-full mb-4"
                >
                    <option value="">Select destiny</option>
                    {allHotels.map((hotel) => (
                        <option key={hotel.id} value={hotel.id}>
                            {hotel.name}
                        </option>
                    ))}
                </select>

                {/* Guest Inputs */}
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="firstname"
                        placeholder="First name"
                        className="border border-gray-200 p-2 rounded-2xl"
                    />
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Last name"
                        className="border border-gray-200 p-2 rounded-2xl"
                    />
                    <input
                        type="tel"
                        name="phonenumber"
                        placeholder="Mobile number"
                        className="border border-gray-200 p-2 rounded-2xl"
                    />
                    <input
                        type="date"
                        name="dateOfArrival"
                        min={new Date().toISOString().split("T")[0]}
                        className="border border-gray-200 p-2 rounded-2xl"
                    />
                    <input
                        type="number"
                        placeholder="Number of nights"
                        className="border border-gray-200 p-2 rounded-2xl"
                    />
                </div>

                {/* Price Display */}
                {activeHotel && (
                    <div className="mt-4 p-2 bg-gray-50 rounded-lg">
                        <p>Price per night: ${activeHotel.price}</p>
                        <p className="font-bold">Total Cost: ${totalCost}</p>
                    </div>
                )}
            </form>
        </div>
    )
}

export default BookingFormStartPage