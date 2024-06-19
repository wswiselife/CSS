import Image from "next/image"
import { FiShoppingBag } from "react-icons/fi";
import { IoAppsOutline } from "react-icons/io5";

const Usermenu = ()=>{
    return(
        <div className="
            flex
            items-center
            gap-4
        ">
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
            <div className="
                flex 
                justify-center 
                items-center 
                p-4 
                cursor-pointer
                transition
                lg:hidden
            
            ">
                <IoAppsOutline size={22} />
            </div>
        </div>
    )
}

export default Usermenu