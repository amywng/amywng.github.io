import { useLocation, Link } from "@remix-run/react";

export default function Navbar(): React.ReactElement {
  const location = useLocation();
  console.log(location);
  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <nav className="relative flex items-center justify-between pt-16 mx-[10%] z-20">
      <Link to="/" className="text-3xl font-semibold no-underline">Amy Wang</Link>
      <div className="flex gap-[47px] text-2xl">
        <div className="flex gap-[47px] text-2xl">
            {[
            { name: "About", href: "#about" },
            { name: "Experience", href: "#experience" },
            { name: "Projects", href: "#projects" },
            { name: "Contact", href: "#contact" },
            ].map((link) => (
            <a
                key={link.name}
                href={link.href}
                className={` text-2xl ${
                isActive(link.href) ? "text-indigo-600" : "text-black"
                }`}
            >
                {link.name}
            </a>
            ))}
        </div>
        <Link
            className={`text-2xl mr-14 ${
            isActive("/art") ? "text-indigo-600" : "text-black"
            }`}
            to="/art"
        >
        Art
      </Link>
      </div>
    </nav>
  );
}