'use client'
import { ReactNode } from "react";

interface HeaderProps {
    title:string;
    desc?:string;
    operate?:ReactNode
}

const Header:React.FC<HeaderProps> = ({
    title,
    desc,
    operate
})=>{
    return(
        <div className="
            w-full 
            flex 
            flex-row 
            justify-between 
            items-center
            p-8
            md:p-16
            lg:p-24
        ">
            {/* header */}
            <div className="
                flex
                items-end
                gap-4
                
            ">
                <div className="text-2xl flex items-end">{title}</div>
                <div className="text-sm">{desc}</div>
            </div>

            {/* operate */}
            <div >
                {operate}
            </div>
        </div>
    )
}

export default Header