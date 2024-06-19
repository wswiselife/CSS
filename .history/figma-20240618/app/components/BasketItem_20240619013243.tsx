import Image from "next/image";

interface BasketItemProps {
    title:string;
    price?:string;
    cover?:string;
    
}

const Basket:React.FC<BasketItemProps> = ({
    title,
    price,
    cover
})=>{
    return(
        <div className="
            flex
            flex-row
            justify-between
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
            <div className="flex flex-col gap-2">

                <div className="flex flex-row justify-between items-start">
                    <div>
                        <p>Crimson sweet melon</p>
                        <p>${price}/</p>
                    </div>
                    <div className="font-semibold">${3.99}</div>
                </div>

            </div>
        </div>
    )
}

export default Basket