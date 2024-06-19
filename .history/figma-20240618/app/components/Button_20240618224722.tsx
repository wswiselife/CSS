import { IconType } from "react-icons";

interface ButtonProps {
    label: string;
    onClick:()=>void
    secondry?:boolean
    disabled?:boolean
    icon?:IconType
}

const Button:React.FC<ButtonProps> = ({
    label,
    onClick,
    secondry,
    disabled,
    icon:Icon
})=>{
    return (
        <button 
            onClick={onClick}
            disabled={disabled}
            className={`
                flex 
                flex-row 
                items-center 
                gap-3 
                px-6 
                py-3 
                text-white 
                bg-green-800 
                font-semibold
                ${secondry?'rounded':'rounded-full'}
                
        `}>
            {label}
        </button>
    )
}

export default Button