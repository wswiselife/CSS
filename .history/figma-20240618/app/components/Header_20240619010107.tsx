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
        <div className="w-full flex flex-row justify-between items-center">
            {/* header */}
            <div className="
                flex
                justify-end
                items-end
                gap-4
                px-20
                py-14
            ">
                <div className="text-2xl flex items-end">{title}</div>
                <div className="text-sm">{desc}</div>
            </div>

            {/* operate */}
        </div>
    )
}

export default Header