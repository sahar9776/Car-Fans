"use client";

import { RacingContext } from "@/context/RacingContext";
import { useContext } from "react";
import { BiSolidTime } from "react-icons/bi";
import { PiCalendarDotsFill } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { PiWarningOctagonBold } from "react-icons/pi";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.8,
    },
  },
};

const childVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function RacingInfo() {
  const { racingInformation } = useContext(RacingContext);

  return (
    <div className="w-full h-auto">
      {/* warning text  */}
      <h2 className="h2 text-red-500 uppercase flex">
        <PiWarningOctagonBold />
        warning
      </h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.3,
          ease: "easeInOut",
          yoyo: Infinity,
        }}
        className="flex justify-center lg:justify-start mt-5 mb-10"
      >
        Due to security, this page will be deleted very quickly, so please write
        down the date of the desired match.
      </motion.p>
      {/* Information about holding competitions */}
      <div className="grid grid-cols-1 gap-3 lg:gap-5 lg:grid-cols-2 xl:grid-cols-3 mx-auto">
        {racingInformation.map((item) => (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-h-[200px] my-5 shadow-md shadow-accent rounded-md text-center flex flex-col justify-center items-center p-10"
            key={item.id}
          >
            <motion.p
              variants={childVariants}
              className="mb-3 text-white/80 flex justify-center items-center gap-1"
            >
              <BiSolidTime className="text-xl text-accent" /> {item.time}
            </motion.p>
            <motion.h3
              variants={childVariants}
              className="h3 flex justify-center items-center gap-1"
            >
              <PiCalendarDotsFill className="text-3xl text-accent" />
              {item.date}
            </motion.h3>
            <motion.p
              variants={childVariants}
              className="mt-3 text-white/80 flex justify-center items-start gap-[2px]"
            >
              <IoLocationSharp className="text-2xl text-accent" />
              {item.location}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default RacingInfo;
