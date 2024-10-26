import CarBg from "./CarBg";
import car from "../images/car.png";
import Image from "next/image";
import * as motion from "framer-motion/client";

function Photo() {
  return (
    <div className="w-full py-10 xl:py-0 relative">
      <CarBg />
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          delay: 1,
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="absolute top-[200px]"
      >
        <Image src={car} width={1000} height={250} className=" scale-[1.1] xl:scale-[1.4] rotate-1" />
      </motion.div>
    </div>
  );
}

export default Photo;
