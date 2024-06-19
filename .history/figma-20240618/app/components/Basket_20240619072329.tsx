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
        <div className="
            flex
            flex-col
            p-8
            md:px-16
            lg:px-28
        ">
            <Header title="Basket" desc="3 items"  />

            <div className="
                flex 
                justify-center 
                items-start
                flex-wrap
                mt-12
            ">
                {/* basket */}
                <div className="
                    flex
                    flex-1
                    flex-col
                    gap-3
                    items-center
                    min-w-[400px]
                ">
                    <BasketItem title="Crimson sweet melon" price="0.89" unit='lb' />
                    <BasketItem title="Crimson sweet melon" price="0.89" unit='lb' />
                    <BasketItem title="Crimson sweet melon" price="0.89" unit='lb' />
                </div>

                {/* order summary */}
                <div className="w-[350px]">
                    {/* title */}
                    <div className="text-3xl">
                        Order summary
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Basket