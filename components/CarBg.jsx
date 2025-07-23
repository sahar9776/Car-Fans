import Image from "next/image";
import pic1 from "../public/images/1.jpg";
import pic2 from "../public/images/2.jpg";
import pic3 from "../public/images/3.jpg";
import * as motion from "framer-motion/client";

function CarBg() {
  const pictures = [pic1, pic2, pic3];
  const reverseIndex = (index) => {
    const totalSteps = 3;
    return totalSteps - index - 1;
  };
  return (
    <>
      <div className="grid grid-cols-3 gap-2 ">
        {pictures.map((picture, index) => (
          <motion.div
            key={index}
            initial={{ y: "-100vh" }}
            animate={{ y: "0" }}
            transition={{
              duration: 0.9,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.2,
            }}
          >
            <Image
              src={picture}
              width={160}
              height={25}
              alt="contain"
              className="min-h-[340px]"
            />
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default CarBg;
