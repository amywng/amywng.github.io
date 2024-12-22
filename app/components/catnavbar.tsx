import { useLocation, Link } from "@remix-run/react";
import { useState } from "react";
import categories from "app/data/categories.json"

export default function CatNavbar(): React.ReactElement {
  const location = useLocation();
  console.log(location)
  const isActive = (path: string): boolean => location.pathname === path;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative px-8 shrink-0 grid grid-cols-5 gap-x-3 
    gap-y-4 md:gap-0 md:items-start text-center
    md:flex md:flex-col mt-24 md:fixed md:mx-7 md:pl-14 md:mt-[300px]">
      {
        categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/${cat.id}`}
            onClick={() => {setIsOpen(!isOpen)}}
            className={`text-sm md:text-lg hover:text-[#3a3987] md:-mb-1 ${
            isActive(`/${cat.id}`) ? "text-purple" : "text-black"
            }`}
          >
            {cat.name}
          </Link>
        ))}   
    </nav>
  );
}