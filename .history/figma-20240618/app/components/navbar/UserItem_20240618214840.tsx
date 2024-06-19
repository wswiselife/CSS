interface UserItemProps {
    onClick:()=>void;
    label:string;
}

const UserItem:React.FC<UserItemProps> =({onClick,label})=>{
    return(
        <div className="
            w-full
            px-8
            py-4
            text-center
            rounded
            hover:bg-neutral-500
            cursor-pointer
            transition
        ">

        </div>
    )
} 

export default UserItem