import Image from "next/image";

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
    return(
        <div className="
            flex
            flex-row
            gap-2
            w-full
        ">
            <div>
                <Image 
                    width={100}
                    height={90}
                    alt="photo"
                    src={'/image/photo1.jpg'}
                />
            </div> 
            <div className="flex flex-1 flex-col gap-2">

                <div className="flex flex-row justify-between items-start">
                    <div className="flex-1">
                        <p>{title}</p>
                        <p>${price}/{unit}</p>
                    </div>
                    <div className="font-semibold">${3.99}</div>
                </div>

            </div>
        </div>
    )
}

export default BasketItem