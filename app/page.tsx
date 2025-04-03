"use client";
import Image from "next/image";
import Bg from "@/app/components/ui/bg";
import StudentCard from "@/app/feature/cards/page";
import CSdata from "@/data/csdata.json";
import quotesData from "@/data/quotesData.json";
import { motion } from "framer-motion";
import BSCS from "@/public/BSCS.png";
import CICT from "@/public/CICT.png";
import BSIS from "@/public/BSIS.png";
import CommentCard from "@/app/components/ui/cardpopquotes";

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
        className="h-screen flex items-center justify-center relative z-20"
      >
        <div className="absolute inset-0 overflow-hidden">
          {quotes.map((quote, index) => (
            <CommentCard key={index} {...quote} />
          ))}
        </div>

        <div className="absolute top-4 flex justify-center w-full gap-4 z-30">
          {[BSCS, CICT, BSIS].map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`${logo} Logo`}
              width={index === 2 ? 70 : 60}
              height={index === 2 ? 70 : 60}
              className="object-contain"
            />
          ))}
        </div>

        <div className="text-center  relative z-30 px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          >
            From yours truly ICT-SF Organization
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[90px] font-bold text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.7)] tracking-tight"
          >
            CICT DEAN'S LISTER
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-md text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]"
          >
            To all students who worked hard to make it to the Dean's List, we
            salute you!
          </motion.p>
        </div>
      </motion.div>

      <motion.div className="relative z-10 container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-white/90 mb-8 text-center">
          Bachelor Of Science In Computer Science
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {CSdata.map((student) => (
            <div key={student["Student No."]} className="flex justify-center">
              <StudentCard student={student} />
            </div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
