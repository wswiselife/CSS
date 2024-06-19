import { IconType } from "react-icons";

interface ButtonProps {
    label: string;
    onClick:()=>void
    secondry?:boolean
    disabled?:boolean
    icon?:IconType
}