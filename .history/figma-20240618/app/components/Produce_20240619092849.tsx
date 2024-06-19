'use client'
import Header from "./Header"
import Button from "./Button"

const Produce = ()=>{

    const operateContent = (
        <div className="hidden md:flex justify-center items-center gap-4">
            <Button label="Default" onClick={()=>{}} third></Button>
            <Button label="A-Z" onClick={()=>{}} secondry></Button>
            <Button label="List view" onClick={()=>{}} secondry></Button>
        </div>
    )

    return(
        <div className=" 
            flex
            flex-col
            p-8
            md:px-16
            lg:px-28
        ">
            <Header title="Produce" desc="Farm fresh - March 21, 2024" operate={operateContent} />

            <ProduceItem />
        </div>
    )
}

export default Produce