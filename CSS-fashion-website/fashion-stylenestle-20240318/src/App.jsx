import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";
import Collections from "./components/Collections.jsx";

export default function App() {
    return (
        <>
            <Navbar></Navbar>
            <Home />
            <Shop />
            <Collections />
        </>
    );
}
