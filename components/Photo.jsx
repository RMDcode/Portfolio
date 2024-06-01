"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 2,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
        }}
      >
        {/* Circle */}
        <motion.svg
          className="w-[250px] h-[250px] sm:w-[310px] sm:h-[310px] xl:w-[506px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 250", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: 'easeInOut' },
          }}
          className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] xl:w-[350px] xl:h-[350px] mix-blend-lighten absolute inset-0 m-auto"
        >
          <Image
            src="/assets/Profile1.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Photo;
