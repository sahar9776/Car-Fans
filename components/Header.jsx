import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "@/components/ui/button";
import { GiSkullShield } from "react-icons/gi";
import * as motion from "framer-motion/client";

function Header() {
  return (
    <div className="max-w-screen h-24 text-white bg-pink-50/20 flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo  */}
        <Link
          href="/"
          className="text-5xl font-semibold flex gap-0.5 items-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              type: "mirror",
              repeat: Infinity,
              repeatDelay: 2.4,
              ease: "linear",
            }}
          >
            <GiSkullShield className="text-accent text-6xl" />
          </motion.span>
          <span>
            Cars <span className="text-accent">Fans</span>
          </span>
        </Link>
        {/* desktop nav  */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact" className="text-xl">
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
