import Image from "next/image";

interface ProduceItemProps {
    cover?:string;
    title:string;
    desc:string;
    price:number;
    unit:string;
    onClick:()=>void
}

const ProduceItem:React.FC<ProduceItemProps> = ({
    cover,
    title,
    desc,
    price,
    unit,
    onClick
})=>{
    return(
        <div className="
            flex
            flex-wrap
            flex-row
            gap-4
            items-center
            bg-neutral-400
            rounded-lg
        ">
            <div 
                className="
                    flex
                    flex-col
                    
            ">
                <div className="relative min-w-80 h-72">
                    <Image 
                        fill
                        alt="photo"
                        src={cover || '/images/photo.jpg'}
                        style={{
                            objectFit:'cover'
                        }}
                        
                        className="
                            rounded-t-lg
                        "

                    />
                </div>

                {/* description */}
                <div className="flex flex-col justify-between p-3">
                    <div className="flex">
                        <p>{title}</p>
                        <p>${price} / {unit}</p>
                    </div>
                    <div className="text-neutral-800">{desc}</div>
                </div>

            </div>
        </div>
    )
}

export default ProduceItem