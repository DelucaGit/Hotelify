import React from 'react'
import BookingFormStartPage from "../UI/BookingFormStartPage";

/**
 * HeroSection
 * Full-viewport banner with headline and an embedded quick booking widget.
 * Accepts the full hotel list to populate the widget dropdown.
 */
const HeroSection = ({allHotels}) => {
    console.log("From Hero", allHotels)
    return (
        <section
            className={"flex-1 flex justify-center items-center min-h-[calc(100vh-80px)] bg-cover bg-center bg-no-repeat relative "}
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920&h=1080&auto=format&fit=crop')`
            }}>

            <div className={" text-center min-full p-5"}>
                <h1 className={"font-bold md:text-5xl text-3xl text-center text-white "}>
                    Escape Life For a While - <br/> To A Luxury Beyond Stress
                </h1>
                {/* Quick booking widget */}
                <BookingFormStartPage allHotels={allHotels} />
            </div>
        </section>
    )
}
export default HeroSection
