"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PTransitionVariants = {
  initial: { opacity: 1 },
  animate: {
    opacity: 0,
    transition: {
      delay: 1,
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

// PTransition = PageTransition
function PTransition({ children }) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          variants={PTransitionVariants}
          initial="initial"
          animate="animate"
          className="h-screen w-screen fixed top-0 bg-primary pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
}

export default PTransition;
