import Logo from './Logo'

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

        </div>
    )
}

export default Navbar