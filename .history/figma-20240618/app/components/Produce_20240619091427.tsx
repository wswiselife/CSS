import Header from "./Header"
import Button from "./Button"

const Produce = ()=>{

    const operateContent = (
        <div className="flex justify-center items-center gap-4">
            <Button label="Default" onClick={()=>{}} ></Button>
            <Button label="A-Z" onClick={()=>{}} ></Button>
            <Button label="List view" onClick={()=>{}} ></Button>
        </div>
    )

    return(
        <div>
            <Header title="Produce" desc="Farm fresh - March 21, 2024" operate={operateContent} />
        </div>
    )
}

export default Produce