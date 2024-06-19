import Image from "next/image";
import { useState } from "react";

interface BasketItemProps {
    title:string;
    price?:string;
    cover?:string;
    unit?:string;
}

const BasketItem:React.FC<BasketItemProps> = ({
    title,
    price,
    cover,
    unit
})=>{

    const [count,setCount] = useState(1)

    return(
        <div className="
            flex
            flex-row
            gap-2
            w-full
            bg-[#edefe4]
            rounded-lg
            shadow
            transition
            hover:shadow-md
        ">
            <div className="w-[122px] h-[122px] relative">
                <Image 
                    
                    fill
                    alt="photo"
                    src={cover || '/images/photo.jpg'}
                    style={{
                        objectFit:'cover'
                    }}
                    
                    className="
                        rounded-l-lg
                    "
                />
            </div> 
            <div className="flex flex-1 flex-col justify-between gap-2 p-4">

                {/* desc */}
                <div className="flex flex-row justify-between items-start">
                    <div className="flex-1">
                        <p className="capitalize font-semibold">{title}</p>
                        <p className="text-neutral-500">${price} / {unit}</p>
                    </div>
                    <div className="font-semibold">${3.99}</div>
                </div>

                {/* count */}
                <div className=" ">
                  <button className="flex items-center gap-2 w-auto px-6 py-4 font-semibold bg-white rounded-full">
                        <span>-</span>
                        <span>{count}</span>
                        <span>+</span>
                  </button>
                </div>

            </div>
        </div>
    )
}

export default BasketItem