import Button from "./Button"

const Hero = ()=>{
    return(
        <div className="
        ">
            <div className="text-center">
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
                    <p className="hero-p">We're <span className="hero-span">farmers,purveyors,</span></p>
                    <p className="hero-p"> and <span className="hero-span">eaters </span>of originically</p>
                    <p className="hero-p">grown food</p>
                </div>

                <Button label="Browse our shop" onClick={()=>{}} />
            </div>
        </div>
    )
}

export default Hero