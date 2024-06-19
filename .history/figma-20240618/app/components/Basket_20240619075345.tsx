'use client'
import { FiArrowRight } from "react-icons/fi";

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

    const data = [
        {
            id:1,
            title:'crimson sweet melon',
            price:'1.78',
            unit:"lb",
            cover:'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id:2,
            title:'crimson sweet melon',
            price:'1.78',
            unit:"lb",
            cover:'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id:3,
            title:'crimson sweet melon',
            price:'1.78',
            unit:"lb",
            cover:'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
    ]

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
                gap-8
                md:gap-16
                lg:gap-16
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
                    {
                        data.map((product)=>(
                            <div>
                                <BasketItem title="Crimson sweet melon" price="0.89" unit='lb' />
                            </div>
                        ))
                    }
                    
                   
                </div>

                {/* order summary */}
                <div className="w-full md:w-[350px]">
                    {/* title */}
                    <div className="text-3xl text-center md:text-left font-playwrite">
                        Order summary
                    </div>

                    <div className="
                        flex
                        flex-col
                        gap-1
                        py-3
                    ">
                        <div className="flex justify-between items-center">
                            <p>Subtotal</p>
                            <p>${27.44}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>Shipping</p>
                            <p>${3.99}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>Tax</p>
                            <p>$2.00</p>
                        </div>
                        <div className="flex justify-between items-center font-semibold">
                            <p>Total</p>
                            <p>${27.44}</p>
                        </div>
                    </div>

                    {/* button */}
                    <div className="w-full mt-4">
                        <Button label="Check out" onClick={()=>{}} fullWidth icon={FiArrowRight} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Basket