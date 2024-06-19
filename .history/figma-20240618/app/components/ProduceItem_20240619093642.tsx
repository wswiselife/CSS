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
        ">
            <div 
                className="
                    flex
                    flex-col
                    items-center
            ">
                <div>
                    <Image 
                        fill
                        
                    />
                </div>
            </div>
        </div>
    )
}

export default ProduceItem