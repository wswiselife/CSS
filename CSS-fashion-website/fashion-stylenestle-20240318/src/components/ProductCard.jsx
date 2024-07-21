// cretetime 20240322

import React from "react";
import { FaStar } from "react-icons/fa";
function ProductCard({ id, img, name, price, discount }) {
    return (
        // question 子组件map把数据列表传递,还是父组件map把数据项传递
        // 这里是后者,此时要注意key的位置
        <div
            key={id}
            className="h-[370px] 2xl:h-[420px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer">
            <div>
                <img
                    src={img}
                    alt="image"
                    className=" h-56 2xl:h-64 rounded-t-xl min-w-[300px] "
                />
            </div>
            <div className="flex flex-col items-center px-5">
                <h1 className="font-semibold text-md pt-4">{name}</h1>
                <div className=" flex gap-10 pt-2">
                    <div className=" font-medium text-base ">$ {price}</div>
                    <div className=" font-medium text-DarkColor">
                        {discount}
                    </div>
                </div>

                <div className=" flex gap-8 pt-4">
                    <button className=" bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800">
                        Add to Cart
                    </button>
                    <div className=" flex gap-1 items-center">
                        <h2>5.0</h2>
                        <FaStar className=" text-yellow-300" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
