interface LayoutProps {
    children: React.ReactNode
}

const Layout:React.FC<LayoutProps> = ({children})=>{
    return (
        <div className="h-screen w-screen">
            <div className="h-full w-full overflow-x-hidden">
                {children}
            </div>
        </div>
    )
}

export default Layout