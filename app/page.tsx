"use client";
import Image from "next/image";
import Bg from "@/app/components/ui/bg";
import StudentCard from "@/app/components/cards/StudentCard";
import CSdata from "@/data/csdata.json";
import quotesData from "@/data/quotesData.json";
import { motion } from "framer-motion";
import BSCS from "@/public/BSCS.png";
import CICT from "@/public/CICT.png";
import BSIS from "@/public/BSIS.png";
import CommentCard from "@/app/components/ui/cardpopquotes";
import React from "react";

interface Quote {
  quote: string;
  author: string;
  position: {
    top: string;
    left?: string;
  };
  delay: number;
}

export default function Home() {
  const quotes: Quote[] = quotesData;
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <main className="relative w-full min-h-screen bg-black overflow-x-hidden">
      <div className="fixed w-full h-full pt-4">
        <Bg
          speed={0.4}
          squareSize={75}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        className="min-h-screen flex items-center justify-center relative z-20 py-16 xs:py-20 sm:py-0"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
          <div className="relative w-full h-full">
            {quotes.map((quote, index) => (
              <CommentCard key={index} {...quote} />
            ))}
          </div>
        </div>

        <div className="absolute top-4 flex justify-center w-full gap-2 sm:gap-4 z-30">
          {[BSCS, CICT, BSIS].map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`${logo} Logo`}
              width={40}
              height={40}
              className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 object-contain"
              priority
            />
          ))}
        </div>

        <div className="text-center relative z-30 px-4 max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          >
            From yours truly ICT-SF Organization
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.7)] tracking-tight mt-2 sm:mt-4"
          >
            CICT DEAN&apos;S LISTER
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xs xs:text-sm sm:text-base md:text-lg text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.5)] mt-2 sm:mt-4 max-w-2xl mx-auto"
          >
            To all students who worked hard to make it to the Dean&apos;s List,
            we salute you!
          </motion.p>
        </div>
      </motion.div>

      <motion.div className="relative z-10 container mx-auto py-10 px-4">
        <h1 className="text-2xl sm:text-4xl font-bold text-white/90 mb-8 text-center">
          Bachelor Of Science In Computer Science
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-8 justify-items-center">
          {CSdata.map((student) => (
            <div
              key={student["Student No."]}
              className="w-full flex justify-center"
            >
              <StudentCard student={student} />
            </div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
