interface LayoutProps {
    children: React.ReactNode
}

const Layout:React.FC<LayoutProps> = ({children})=>{
    return (
        <div className="h-screen w-screen overflow-x-hidden">
            <div className="h-full w-full ">
                {children}
            </div>
        </div>
    )
}

export default Layout