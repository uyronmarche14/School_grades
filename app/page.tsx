"use client";
import Image from "next/image";
import Bg from "@/app/components/ui/bg";
import StudentCard from "@/app/feature/cards/page";
import CSdata from "@/data/csdata.json";
import { motion } from "framer-motion";
import BSCS from "@/public/BSCS.png";
import BSIS from "@/public/BSIS Logo.png";
import CICT from "@/public/CICT Logo.png";
import CommentCard from "@/app/components/ui/cardpopquotes";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-black overflow-x-hidden">
      {/* Background wrapper */}
      <div className="fixed w-full h-full pt-4">
        <Bg
          speed={1.0}
          squareSize={75}
          direction="up"
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.5,
        }}
        className="h-[100vh] w-full flex items-center justify-center"
      >
        <CommentCard
          position={{ top: "10rem", left: "4rem" }}
          quote="Success is not final, failure is not fatal: it is the courage to continue that counts."
          author="Winston Churchill"
          delay={0.3}
        />
        <CommentCard
          position={{ top: "20rem", left: "2rem" }}
          quote="Education is the most powerful weapon which you can use to change the world."
          author="Nelson Mandela"
          delay={0.5}
        />
        <CommentCard
          position={{ top: "30rem", left: "1rem" }}
          quote="Education is the most powerful weapon which you can use to change the world."
          author="Nelson Mandela"
          delay={0.7}
        />
        <CommentCard
          position={{ top: "40rem", left: "2rem" }}
          quote="Education is the most powerful weapon which you can use to change the world."
          author="Nelson Mandela"
          delay={0.9}
        />
        <CommentCard
          position={{ top: "50rem", left: "4rem" }}
          quote="Education is the most powerful weapon which you can use to change the world."
          author="Nelson Mandela"
          delay={1.1}
        />
        <CommentCard
          position={{ top: "10rem", right: "4rem" }}
          quote="Success is not final, failure is not fatal: it is the courage to continue that counts."
          author="Winston Churchill"
          delay={0.3}
        />
        <CommentCard
          position={{ top: "20rem", right: "2rem" }}
          quote="Education is the most powerful weapon which you can use to change the world."
          author="Nelson Mandela"
          delay={0.5}
        />
        <CommentCard
          position={{ top: "30rem", right: "1rem" }}
          quote="Education is the most powerful weapon which you can use to change the world."
          author="Nelson Mandela"
          delay={0.7}
        />
        <CommentCard
          position={{ top: "40rem", right: "2rem" }}
          quote="Education is the most powerful weapon which you can use to change the world."
          author="Nelson Mandela"
          delay={0.9}
        />
        <CommentCard
          position={{ top: "50rem", right: "4rem" }}
          quote="Education is the most powerful weapon which you can use to change the world."
          author="Nelson Mandela"
          delay={1.1}
        />
        <div className="absolute inset-0 z-0 ">
          <div className="flex flex-row justify-center items-center mt-4">
            <Image
              src={BSCS}
              alt="BSCS Logo"
              width={60}
              height={60}
              className="object-contain mr-2 "
            />
            <Image
              src={CICT}
              alt="CICT Logo"
              width={60}
              height={60}
              className="object-contain"
            />

            <Image
              src={BSIS}
              alt="BSIS Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
        <div className="mx-auto text-center">
          <h1 className="text-8xl font-bold text-white/90 py-4">
            CICT GRADES VIEW
          </h1>
          <p className="text-lg text-white/90">
            To all students who worked hard to make it to the Dean's List, we
            salute you!
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-white/90 mb-8 text-center">
          Student Records
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 auto-rows-max">
          {CSdata.map((student) => (
            <div key={student["Student No."]} className="flex justify-center">
              <StudentCard student={student} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
