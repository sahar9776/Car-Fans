"use client";

import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";

function MobileNav() {
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
    {
      name: "contact",
      path: "/contact",
    },
  ];
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo  */}
        <div className="mt-32 mb-14 text-center text-accent">
          <Link href="/">
            <h1 className=" text-4xl font-semibold">
              Car <span className="text-accent">Fans</span>
            </h1>
          </Link>
        </div>
        {/* nav   */}
        <nav className="flex flex-col gap-8 justify-center items-center">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                pathname === link.path && "text-accent border-b-2 border-accent"
              } text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
