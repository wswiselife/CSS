'use client'
import Image from "next/image"
import Button from "./Button"
import { useMemo } from "react"

const Hero = ()=>{

    const widthComp = useMemo(()=>{

    },[])

    return(
        <div className="">

            {/* first path */}
            <div className="flex flex-col justify-center items-center">
                {/* title */}
                <div className="
                    flex
                    flex-col
                    items-center
                    gap-2
                    md:gap-4
                    lg:gap-8
                    py-12
                    md:py-20
                    lg:py-[121px]
                ">
                    <p className="hero-p">We're <span className="hero-span font-playwrite">farmers,purveyors,</span></p>
                    <p className="hero-p"> and <span className="hero-span font-playwrite">eaters </span>of originically</p>
                    <p className="hero-p">grown food.</p>
                </div>

                <Button label="Browse our shop" onClick={()=>{}} />
            </div>

            {/* image path */}
            <div className="flex flex-row flex-wrap justify-center items-center gap-10 py-20 ">

                <img 
                    src="/images/photo4.jpg" 
                    alt="photo" 
                    className="
                    
                        w-[450px]
                        h-[480px]
                        md:w-[380px]
                        md:h-[420px]
                        lg:w-[520px]
                        lg:h-[580px]
                        rounded-lg
                    "
                />

                <Image 
                    width={400}
                    height={300}
                    alt="image"
                    src={'/images/photo5.jpg'}
                />

            </div>
        </div>
    )
}

export default Hero