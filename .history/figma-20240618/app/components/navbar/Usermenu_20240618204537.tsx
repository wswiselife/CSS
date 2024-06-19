import Image from "next/image"

const Usermenu = ()=>{
    return(
        <div className="
            flex
            items-center
            gap-4
        ">
            <div className="px-6 py-2 text-white bg-green-800 ">
                Basker
            </div>
            <div className="flex justify-center items-center">
                <Image 
                    width={80}
                    height={80}
                    alt="Basket"
                    src=''
                />
            </div>
        </div>
    )
}

export default Usermenu