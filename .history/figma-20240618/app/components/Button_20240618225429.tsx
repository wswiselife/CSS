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
                font-semibold
                ${secondry?'rounded':'rounded-full'}
                ${secondry?'rounded':'bg-green-800'}
                ${secondry?'rounded':'text-white '}
                
        `}>
            {label}
            {
                Icon && (<Icon size={20} ></Icon>)
            }
        </button>
    )
}

export default Button