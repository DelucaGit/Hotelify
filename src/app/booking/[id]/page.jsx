import React from 'react'
import { hotels } from "../../data/localdata";

const Page = async ({ params }) => {
    const { id } = await params;
    const hotel = hotels.find(h => h.id.toString() === id);

    if (!hotel) return <div><p>Can&#39;t find hotel</p></div>;

    // This function runs on the server when the form is submitted
    async function createBooking(formData) {
        "use server";

        const bookingData = {
            hotelId: id,
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            phone: formData.get("phone"),
        };

        console.log("New Booking Received:", bookingData);
    }

    return (
        <main className="max-w-2xl mx-auto p-10">
            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
                <form action={createBooking} className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold mb-4">Book a night at {hotel.name}</h3>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium ml-1">First name</label>
                            <input
                                name="firstName"
                                required
                                placeholder="Jane"
                                className="border border-slate-200 p-3 rounded-xl focus:outline-blue-500"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium ml-1">Last name</label>
                            <input
                                name="lastName"
                                required
                                placeholder="Doe"
                                className="border border-slate-200 p-3 rounded-xl focus:outline-blue-500"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium ml-1">Email</label>
                        <input
                            name="email"
                            type="email"
                            required
                            placeholder="jane@example.com"
                            className="border border-slate-200 p-3 rounded-xl focus:outline-blue-500"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium ml-1">Phone number</label>
                        <input
                            name="phone"
                            type="tel"
                            required
                            placeholder="+46 70 000 00 00"
                            className="border border-slate-200 p-3 rounded-xl focus:outline-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all"
                    >
                        Confirm Booking for ${hotel.price}
                    </button>
                </form>
            </div>
        </main>
    )
}
export default Page