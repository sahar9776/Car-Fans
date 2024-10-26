import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <div className="py-8 xl:py-12 text-white bg-pink-50/20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo  */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Cars <span className="text-accent">Fans</span>
          </h1>
        </Link>
        {/* desktop nav  */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Contact us</Button>
          </Link>
        </div>
        {/* mobile nav  */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
}
export default Header;
