import Logo from './Logo'
import Usermenu from './Usermenu'

const Navbar = ()=>{
    return (
        <div className="
            flex
            justify-between
            items-center
            px-8
            py-4
            lg:px-12
            lg:py-8
            
        ">
            <Logo />
            <Usermenu />
        </div>
    )
}

export default Navbar