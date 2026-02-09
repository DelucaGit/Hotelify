import React from 'react'

const Navbar = () => {
    return (
        <div className={"flex px-5"}>
            {/*TODO: Correct the navbar widht and positioning*/}
            {/*Logo*/}
            <div className={"border border-black"}>
                <p className={"text-3xl font-bold"}>Hotelify</p>
            </div>
            {/*Menu*/}
            <div className={"border border-black"}>
                <ul className={"flex justify-end items-center w-full "}>
                    <li>Start</li>
                    <li>Hotels</li>
                    <li>Reviews</li>
                    <li>Contact</li>
                </ul>
            </div>

        </div>
    )
}
export default Navbar
