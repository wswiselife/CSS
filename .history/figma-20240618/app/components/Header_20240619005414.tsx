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
            <div className="
                flex
                justify-end
            ">
                <div className="text-2xl">{title}</div>
                <div className="text-sm">{desc}</div>
            </div>
        </div>
    )
}

export default Header