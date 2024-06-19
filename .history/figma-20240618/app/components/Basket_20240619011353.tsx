'use client'

import Button from "./Button"
import Header from "./Header"

const Basket = ()=>{

    const operateContent = (
        <div className="flex justify-center items-center gap-4">
            <Button label="Default" onClick={()=>{}} ></Button>
            <Button label="A-Z" onClick={()=>{}} ></Button>
            <Button label="List view" onClick={()=>{}} ></Button>
        </div>
    )

    return(
        <div>
            <Header title="Basket" desc="3 items" operate={operateContent} />
        </div>
    )
}

export default Basket