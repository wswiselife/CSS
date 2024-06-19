
import Basket from "./components/Basket";
import Hero from "./components/Hero";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
   <>
     <Navbar />
     <div className="mt-20">
        <Hero />
     </div>
     <Basket />
   </>
  );
}
