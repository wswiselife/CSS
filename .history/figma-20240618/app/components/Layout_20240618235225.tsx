interface LayoutProps {
    children: React.ReactNode
}

const Layout:React.FC<LayoutProps> = ({children})=>{
    return (
        <div className="h-screen w-screen py-30">
            <div className="h-full w-full ">
                {children}
            </div>
        </div>
    )
}

export default Layout