import React from 'react'
import BookingFormStartPage from "../UI/BookingFormStartPage";

const HeroSection = ({allHotels}) => {
    console.log("From Hero", allHotels)
    return (
        <section className={"flex-1 flex justify-center items-center min-h-[calc(100vh-80px)] bg-cyan-600"}>
            <div className={" text-center min-full"}>
                <h1 className={"font-bold text-5xl md:text-8xl text-center "}>
                    Escape Life - <br/> To A Luxury Beyond Stress
                </h1>
                <BookingFormStartPage allHotels={allHotels} />
            </div>
        </section>
    )
}
export default HeroSection
