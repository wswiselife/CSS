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
        ">
            <div>
                <Image 
                    width={100}
                    height={90}
                    alt="photo"
                    src={cover || '/images/photo.jpg'}
                    className="
                        object-cover
                    "
                />
            </div> 
            <div className="flex flex-1 flex-col gap-2">

                {/* desc */}
                <div className="flex flex-row justify-between items-start">
                    <div className="flex-1">
                        <p>{title}</p>
                        <p>${price}/{unit}</p>
                    </div>
                    <div className="font-semibold">${3.99}</div>
                </div>

                {/* count */}
                <div className="flex">
                    <span>-</span>
                    <span>{count}</span>
                    <span>+</span>
                </div>

            </div>
        </div>
    )
}

export default BasketItem