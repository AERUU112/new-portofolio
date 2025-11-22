"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/post", label: "Post" },
  ];

  return (
    <nav className="bg-primaary p-4 shadow-lg shadow-accent/20 border-b border-secondary/30">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Title */}
        <Link
          href="/"
          className="text-light text-2xl font-extrabold tracking-wider hover:text-accent transition-colors duration-300"
        >
          MY-<span className="text-accent">kisah</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-2">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-3 py-2 rounded-md font-semibold uppercase tracking-wide transition-all duration-300 ${
                pathname === href
                  ? "bg-secondary text-light shadow-md shadow-accent/50"
                  : "text-grayish hover:bg-secondary hover:text-light hover:shadow-accent/30"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
