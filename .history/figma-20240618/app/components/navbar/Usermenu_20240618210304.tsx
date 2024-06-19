import Image from "next/image"
import { FiShoppingBag } from "react-icons/fi";

const Usermenu = ()=>{
    return(
        <div className="
            flex
            items-center
            gap-4
        ">
            <div className="px-6 py-2 text-white bg-green-800 ">
                <p className="">Basker</p>
                
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
            <div className="flex justify-center items-center">
                
            </div>
        </div>
    )
}

export default Usermenu