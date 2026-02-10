import React from 'react'
import Link from "next/link";

const Navbar = () => {

    const navList = ["Home","Listings", "Reviews", "Contact"]

    return (
        <nav className={"flex w-full justify-between items-center px-10 py-5"}>
            {/*Logo*/}
            <div className={""}>
                <p className={"text-3xl font-bold"}>Hotelify</p>
            </div>
            {/*Menu*/}
            <div className={"flex-1"}>
                <ul className={"flex justify-end items-center w-full space-x-8 "}>
                    {navList.map(item => (
                        <li key={item}>
                            {/*TODO: Add tailwind to LI items*/}
                            <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>

        </nav>
    )
}
export default Navbar
