'use client'

import { FiShoppingBag } from "react-icons/fi";
import { IoAppsOutline } from "react-icons/io5";

import useUserMenuModal from "../hooks/useUserMenu";
import UserItem from "./UserItem";

const Usermenu = ()=>{

    const userMenuModal = useUserMenuModal()

    const onToggle = ()=>{
        userMenuModal.isOpen?userMenuModal.onClose():userMenuModal.onOpen()
    }

    return(
        <div className="
            flex
            items-center
            gap-4
            md:gap-4
        ">

            {/* desktop */}
            <div className="
                md:flex
                flex-row
                justify-between
                items-center
                md:gap-4
                hidden
                
            ">
                <div className="p-4 font-semibold text-xl">Shop</div>
                <div className="p-4 font-semibold text-xl">Newstand</div>
                <div className="p-4 font-semibold text-xl">Who we are</div>
            </div>

            {/* basket */}
            <div className="flex flex-row items-center gap-3 px-6 py-3 text-white bg-green-800 rounded-full font-semibold ">
                <p className="">Basker</p>
                <FiShoppingBag size={20} />
                {/* <Image 
                    width={20}
                    height={20}
                    alt="Basket"
                    src={'/icon/bag-handle-outline.svg'}
                    className="
                        text-white
                    "
                /> */}
            </div>

            {/* mobile */}
            <div 
                onClick={onToggle}
                className="
                    flex 
                    justify-center 
                    items-center 
                    relative
                    p-4 
                    cursor-pointer
                    transition
                    md:hidden
            ">
                <IoAppsOutline size={22} />

                {/* menu */}
                {
                    userMenuModal.isOpen && (
                        <div className="
                            absolute
                            top-0
                            right-0
                            w-80
                            bg-white
                        ">
                            <UserItem onClick={() =>{}} label="shop"/>
                            <UserItem onClick={() =>{}} label="newstand"/>
                            <UserItem onClick={() =>{}} label="who we are"/>
                        </div>
                    )
                }

            </div>

            
        </div>
    )
}

export default Usermenu