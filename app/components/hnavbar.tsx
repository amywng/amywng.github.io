import { useLocation, Link } from "@remix-run/react";

export default function HNavbar(): React.ReactElement {
  const location = useLocation();
  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <nav className="relative flex items-center justify-between pt-16 mx-[10%] z-20 text-purple">
      <Link to="/" className="text-3xl font-semibold no-underline hover:text-dark_purple">Amy Wang</Link>
      <div className="flex gap-[47px]">
        <div className="flex gap-[47px]">
            {[
            { name: "About", href: "#about" },
            { name: "Experience", href: "#experience" },
            { name: "Projects", href: "#projects" },
            { name: "Contact", href: "#contact" },
            ].map((link) => (
            <a
                key={link.name}
                href={link.href}
                className={`text-2xl text-purple hover:text-dark_purple`}
            >
                {link.name}
            </a>
            ))}
        </div>
        <Link
            className={`text-2xl`}
            to="/art"
        >
        Art
      </Link>
      </div>
    </nav>
  );
}