'use client'

import BasketItem from "./BasketItem"
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
        <div className="flex flex-col ">
            <Header title="Basket" desc="3 items"  />

            <div className="flex justify-center items-start">
                <BasketItem title="Crimson sweet melon" price="0.89" unit= />
            </div>
        </div>
    )
}

export default Basket