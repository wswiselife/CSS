import Logo from './Logo'
import Usermenu from './Usermenu'

const Navbar = ()=>{
    return (
        <div className='fixed top-0 w-full'>
            <div className="
                flex
                justify-between
                items-center
                px-8
                py-4
                md:px-12
                md:py-8
                lg:px-[111px]
                lg:py-[32px]
                
            ">
                <Logo />
                <Usermenu />
            </div>
        </div>
    )
}

export default Navbar