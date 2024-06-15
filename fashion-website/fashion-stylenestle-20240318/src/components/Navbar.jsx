// createtime 20240318

import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-scroll";

export default function Navbar() {
    const [toggleBtn, setToggleBtn] = useState(false);

    return (
        <header className="flex flex-row justify-between items-center fixed top-0 left-0 right-0 p-5 md:px-16 bg-PrimaryColor ">
            {/* logo/title */}
            <h1 className="text-2xl font-semibold text-ExtraDarkColor cursor-pointer">
                StyleNestle
            </h1>

            <div className="flex flex-row justify-between items-center gap-5">
                {/* navbar elements */}
                <nav
                    className="
                        absolute
                        top-[99%]
                        right-0
                        w-full
                        sm:w-3/5
                        sm:left-none
                        flex
                        flex-col
                        bg-SecondaryColor
                        text-black
                        font-semibold
                        text-md
                        text-center
                        pt-8
                        pb-4
                        gap-8
                        transition-transform
                        md:relative
                        md:flex
                        md:flex-row
                        md:w-auto
                        md:bg-PrimaryColor
                        md:font-semibold
                        md:text-base
                        md:text-ExtraDarkColor
                        md:pt-0
                        md:pb-0
                        md:gap-4
                    ">
                    <Link
                        href="#"
                        duration={500}
                        className="duration-300 hover:text-black">
                        Home
                    </Link>
                    <a href="#" className="duration-300 hover:text-black">
                        Shop
                    </a>
                    <a href="#" className="duration-300 hover:text-black">
                        Features
                    </a>
                    <a href="#" className="duration-300 hover:text-black">
                        Products
                    </a>
                    <a href="#" className="duration-300 hover:text-black">
                        Review
                    </a>
                </nav>

                {/* navbar icons */}
                <div className="flex flex-row gap-5">
                    <FaUser size={25} className=" text-DarkColor" />
                    <FaShoppingCart size={25} className=" text-DarkColor" />
                    {toggleBtn ? (
                        <AiOutlineClose className="md:hidden" size={28} />
                    ) : (
                        <RiMenu2Line className="md:hidden" size={28} />
                    )}
                </div>
            </div>
        </header>
    );
}
