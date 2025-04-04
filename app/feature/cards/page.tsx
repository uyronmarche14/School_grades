"use client";
import React, { useState, useRef } from "react";
import Tilt from "@/app/components/animation/tilt";
import { motion, AnimatePresence } from "framer-motion";
import * as htmlToImage from "html-to-image";
import { ArrowDownToLine } from "lucide-react";
import Image from "next/image";

interface StudentData {
  "No.": string;
  "Student No.": string;
  Name: string;
  "Year Level": string;
  "Lowest Grade": string;
  GWA: string;
  profile: string;
}

const StudentCard: React.FC<{ student: StudentData }> = ({ student }) => {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const enlargedCardRef = useRef<HTMLDivElement>(null);

  // Generate image for sharing
  const generateShareableImage = async (): Promise<string> => {
    const elementToCapture = isEnlarged
      ? enlargedCardRef.current
      : cardRef.current;

    if (!elementToCapture) {
      throw new Error("Card element not found");
    }

    try {
      elementToCapture.classList.add("html-to-image-ready");
      const dataUrl = await htmlToImage.toPng(elementToCapture, {
        quality: 1.0,
        pixelRatio: 2,
        backgroundColor: "#000",
        style: {
          transform: "none",
          borderRadius: elementToCapture.style.borderRadius,
          overflow: "hidden",
        },
      });
      elementToCapture.classList.remove("html-to-image-ready");
      return dataUrl;
    } catch {
      throw new Error("Failed to generate image");
    }
  };

  // Handle download
  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const dataUrl = await generateShareableImage();
      const link = document.createElement("a");
      link.download = `${student.Name.replace(
        /\s+/g,
        "-",
      ).toLowerCase()}-card.png`;
      link.href = dataUrl;
      link.click();
    } catch {
      alert("There was an error generating the image. Please try again.");
    }
  };

  // Helper function to get correct suffix for year level
  const getYearSuffix = (yearLevel: string): string => {
    const year = parseInt(yearLevel);
    if (year === 1) return "st";
    if (year === 2) return "nd";
    if (year === 3) return "rd";
    return "th";
  };

  // Helper function to format grades
  const formatGrade = (grade: string): string => {
    try {
      return parseFloat(grade).toFixed(2);
    } catch {
      return grade;
    }
  };

  const CardContent = ({
    isEnlarged = false,
    forRef = "normal",
  }: {
    isEnlarged?: boolean;
    forRef?: string;
  }) => (
    <div
      ref={forRef === "enlarged" ? enlargedCardRef : cardRef}
      className={`w-full rounded-xl overflow-hidden shadow-2xl shadow-white/20 transition-all duration-300 ${
        !isEnlarged && "hover:shadow-purple-400/30 hover:scale-[1.02]"
      }`}
    >
      <div className="relative bg-gradient-to-b from-black to-slate-900 p-4 sm:p-5">
        <div className="flex flex-col gap-2 mb-4">
          <h1
            className={`font-bold text-white/90 leading-tight ${
              isEnlarged ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
            }`}
          >
            {student.Name}
          </h1>
          <div className="flex items-center gap-2 text-white/40">
            <span
              className={`font-medium ${
                isEnlarged ? "text-base sm:text-lg" : "text-sm sm:text-base"
              }`}
            >
              BSCS
            </span>
            <span className="text-xs opacity-50">•</span>
            <span
              className={`font-medium ${
                isEnlarged ? "text-base sm:text-lg" : "text-sm sm:text-base"
              }`}
            >
              {`${student["Year Level"]}${getYearSuffix(
                student["Year Level"],
              )} Year`}
            </span>
          </div>
        </div>

        <div className="w-full aspect-[4/5] rounded-lg bg-black/40 mb-4 overflow-hidden">
          <Image
            src={student.profile}
            alt={student.Name}
            className="w-full h-full object-cover object-center"
            width={500}
            height={700}
          />
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="space-y-1">
            <p
              className={`font-bold text-white/90 ${
                isEnlarged ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
              }`}
            >
              {formatGrade(student.GWA)}
            </p>
            <p
              className={`uppercase tracking-wider text-white/50 ${
                isEnlarged ? "text-sm" : "text-xs"
              }`}
            >
              GWA
            </p>
          </div>
          <div className="text-right space-y-2">
            <p
              className={`text-white/60 ${
                isEnlarged ? "text-base" : "text-sm"
              }`}
            >
              Lowest Grade: {formatGrade(student["Lowest Grade"])}
            </p>
            <p
              className={`text-white/60 ${
                isEnlarged ? "text-base" : "text-sm"
              }`}
            >
              SN: {student["Student No."]}
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10">
          <div className="flex justify-between items-center">
            <div>
              <p
                className={`text-white/40 uppercase tracking-wider mb-1 ${
                  isEnlarged ? "text-sm" : "text-xs"
                }`}
              >
                DEPARTMENT
              </p>
              <p
                className={`text-white/70 ${
                  isEnlarged ? "text-lg" : "text-sm"
                }`}
              >
                CICT
              </p>
            </div>
            <div className="text-right">
              <p
                className={`text-white/40 uppercase tracking-wider mb-1 ${
                  isEnlarged ? "text-sm" : "text-xs"
                }`}
              >
                Programs
              </p>
              <p
                className={`text-white/70 ${
                  isEnlarged ? "text-lg" : "text-sm"
                }`}
              >
                BSCS • BSIS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div
        style={{ perspective: "1500px" }}
        className="w-full max-w-[350px]"
        onClick={() => setIsEnlarged(true)}
      >
        <Tilt>
          <CardContent />
        </Tilt>
      </div>

      <AnimatePresence>
        {isEnlarged && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsEnlarged(false)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center backdrop-blur-sm cursor-pointer p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[500px] md:max-w-[600px] cursor-default"
            >
              <CardContent isEnlarged={true} forRef="enlarged" />

              {/* Download button */}
              <div className="absolute -bottom-16 right-4">
                <button
                  onClick={handleDownload}
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center transform transition-transform hover:scale-110"
                >
                  <ArrowDownToLine className="w-5 h-5 text-white" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Add new page component
const CardsPage: React.FC = () => {
  // Example student data - replace with your actual data source
  const exampleStudent: StudentData = {
    "No.": "1",
    "Student No.": "2020-12345",
    Name: "John Doe",
    "Year Level": "3",
    "Lowest Grade": "2.25",
    GWA: "1.75",
    profile: "/path/to/profile.jpg",
  };

  return (
    <div className="container mx-auto p-4">
      <StudentCard student={exampleStudent} />
    </div>
  );
};

export default CardsPage;
