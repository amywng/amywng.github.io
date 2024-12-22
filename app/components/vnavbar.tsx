import { useLocation, Link } from "@remix-run/react";
import { useState } from "react";

export default function VNavbar(): React.ReactElement {
  const location = useLocation();
  console.log(location)
  const isActive = (path: string): boolean => location.pathname === path;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative md:fixed flex items-center justify-between pt-16 mx-[10%] z-10
    md:mx-0 md:flex-col md:pt-40 md:pl-14 md:w-64">
      <div className="md:flex md:flex-col">
        <Link to="/" className="text-2xl md:text-3xl font-medium text-black mb-6 hover:text-[#3a3987]">Amy Wang</Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src="app/assets/nav/menuIconB.png" 
            className={`w-6 h-6 mr-6 ${isOpen ? "hidden" : "block"}
            absolute top-[68px] -right-5`}/>
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src="app/assets/nav/closeIconB.png" 
            className={`w-6 h-6 mr-6 ${isOpen ? "block" : "hidden"}
            absolute top-[68px] -right-5`}/>
          </button>
        </div>
        <div className={`${
            isOpen ? "block" : "scale-y-0 md:flex md:scale-100"}
            relative flex flex-col text-right transition-all duration-300`}>
          <div className="absolute md:static flex flex-col gap-2 md:gap-0 md:text-start
            -top-3 left-72 overflow-hidden md:overflow-auto">
              <Link
                  key="Home"
                  to={"/"}
                  className={` md:text-2xl hover:text-[#3a3987] ${
                  isActive("/") ? "text-purple" : "text-black"
                  }`}
              >Home</Link>
              <Link
                  key="Art"
                  to={"/art"}
                  className={` md:text-2xl hover:text-[#3a3987] md:mb-6 ${
                  isActive("/art") ? "text-purple" : "text-black"
                  }`}
              >Art</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}