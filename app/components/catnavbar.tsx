import { useLocation, Link } from "@remix-run/react";
import categories from "app/data/categories.json"

export default function CatNavbar(): React.ReactElement {
  const location = useLocation();
  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <nav className="fixed flex flex-col items-start pt-40 pl-14 w-64 bg-white/[.5] h-auto z-10">
      <div className="flex flex-col">
        <Link to="/" className="text-3xl font-semibold text-black mb-6 hover:text-[#3a3987]">Amy Wang</Link>
        <div className="flex flex-col">
            <Link
                key="Home"
                to={"/"}
                className={` text-2xl hover:text-[#3a3987] ${
                isActive("/") ? "text-purple" : "text-black"
                }`}
            >
                Home
            </Link>
            <Link
                key="Art"
                to={"/art"}
                className={` text-2xl hover:text-[#3a3987] mb-6 ${
                isActive("/art") ? "text-purple" : "text-black"
                }`}
            >
                Art
            </Link>
            {
              categories.map((cat) => (
                <Link
                  key={cat.name}
                  to={`/${cat.id}`}
                  className={`text-lg hover:text-[#3a3987] -mb-1 ${
                  isActive(`/${cat.id}`) ? "text-purple" : "text-black"
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
        </div>
      </div>
    </nav>
  );
}