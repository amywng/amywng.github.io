import { useLocation, Link } from "@remix-run/react";

export default function VNavbar(): React.ReactElement {
  const location = useLocation();
  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <nav className="flex flex-col items-start pt-40 pr-14 gap-5 w-[200px]">
      <div className="flex gap-[47px] text-2xl">
        <Link to="/" className="font-3xl font-semibold text-black">Amy Wang</Link>
        <div>
            {[
            { name: "Home", href: "/" },
            { name: "Art", href: "/art" },
            { name: "Contact", href: "/#contact" },
            ].map((link) => (
            <Link
                key={link.name}
                to={link.href}
                className={` text-2xl hover:text-slate-500${
                isActive(link.href) ? "text-indigo-600" : "text-black"
                }`}
            >
                {link.name}
            </Link>
            ))}
        </div>
      </div>
    </nav>
  );
}