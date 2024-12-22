import { useLocation, Link } from "@remix-run/react";
import { useState } from "react";

export default function HNavbar(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between pt-16 mx-[10%] z-20 text-purple">
      <Link to="/" className="text-2xl md:text-3xl font-medium no-underline hover:text-dark_purple">Amy Wang</Link>
      <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src="/nav/menuIconP.png" 
            className={`w-6 h-6 mr-6 ${isOpen ? "hidden" : "block"}
            absolute top-[68px] -right-5`}/>
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src="/nav/closeIconP.png" 
            className={`w-6 h-6 mr-6 ${isOpen ? "block" : "hidden"}
            absolute top-[68px] -right-5`}/>
          </button>
      </div>
      <div className={`${
        isOpen ? "block" : "md:flex scale-y-0 md:scale-100"} 
        relative md:static flex flex-col md:flex-row md:gap-[47px] text-right transition-all duration-500
        
        `}>
        <div className="absolute md:static flex flex-col md:flex-row gap-2 md:gap-[47px]
        top-7 right-4 overflow-hidden md:overflow-auto">
            {[
            { name: "About", href: "/#about" },
            { name: "Experience", href: "/#experience" },
            { name: "Projects", href: "/#projects" },
            { name: "Contact", href: "/#contact" },
            ].map((link) => (
            <Link
                key={link.name}
                to={link.href}
                className={`md:text-2xl text-purple hover:text-dark_purple`}
            >
                {link.name}
            </Link>
            ))}
            <Link
            className={`md:text-2xl text-purple hover:text-dark_purple`}
            to="/art"
            >
              Art
            </Link>
        </div>
        
      </div>
    </nav>
  );
}