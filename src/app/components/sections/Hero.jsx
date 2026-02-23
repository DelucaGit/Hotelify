import React from 'react'
import BookingFormStartPage from "../UI/BookingFormStartPage";

const HeroSection = ({allHotels}) => {
    console.log("From Hero", allHotels)
    return (
        <section
            className={"flex-1 flex justify-center items-center min-h-[calc(100vh-80px)] bg-cover bg-center bg-no-repeat relative "}
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/30356959/pexels-photo-30356959.jpeg')`
            }}>

            <div className={" text-center min-full p-5"}>
                <h1 className={"font-bold md:text-5xl text-3xl text-center text-white "}>
                    Escape Life For a While - <br/> To A Luxury Beyond Stress
                </h1>
                <BookingFormStartPage allHotels={allHotels} />
            </div>
        </section>
    )
}
export default HeroSection
