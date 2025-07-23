"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Nav() {
  const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "cars",
      path: "/cars",
    },
    {
      name: "componies",
      path: "/componies",
    },
    {
      name: "racing",
      path: "/racing",
    },
  ];
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${link.path === pathname && "text-accent border-b-2 border-accent"}
             capitalize text-2xl font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
