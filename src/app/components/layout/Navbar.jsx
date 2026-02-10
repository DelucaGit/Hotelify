"use client";
import React, { useState } from 'react';
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navList = ["Home", "Listings", "Reviews", "Contact"];

    return (
        <nav className={"relative flex w-full justify-between items-center px-10 py-5"}>
            {/* Logo */}
            <div>
                <p className={"text-3xl font-bold"}>Hotelify</p>
            </div>

            {/* Desktop Menu */}
            <div className={"hidden md:flex flex-1"}>
                <ul className={"flex justify-end items-center w-full space-x-8"}>
                    {navList.map(item => (
                        <li key={item}>
                            <Link
                                className={"font-bold"}
                                href={item === "Home" ? "/public" : `/${item.toLowerCase()}`}>{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg z-50">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        {navList.map(item => (
                            <li key={item}>
                                <Link
                                    className={"font-bold"}
                                    href={item === "Home" ? "/public" : `/${item.toLowerCase()}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
