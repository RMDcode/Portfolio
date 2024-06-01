"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";


const StairTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
      />
      {children}
    </AnimatePresence>
  );
};

export default StairTransition;
