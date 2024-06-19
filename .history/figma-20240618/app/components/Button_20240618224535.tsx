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
                
                
        `}>
            {label}
        </button>
    )
}

export default Button