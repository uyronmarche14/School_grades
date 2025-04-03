"use client";
import React from "react";
import Tilt from "@/app/components/animation/tilt";
import dataCs from "@/data/csdata.json";

interface StudentData {
  "No.": string;
  "Student No.": string;
  Name: string;
  "Year Level": string;
  "Lowest Grade": string;
  GWA: string;
  profile: string;
}

interface StudentCardProps {
  student: StudentData;
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <div style={{ perspective: "1500px" }} className="w-[350px]">
      <Tilt>
        <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl shadow-white/20 hover:shadow-purple-400/30 transition-all duration-300 hover:scale-[1.02]">
          <div className="relative w-full h-full bg-gradient-to-b from-black to-slate-900 p-4 sm:p-5">
            {/* Header */}
            <div className="flex flex-col gap-2 mb-4">
              <h1 className="text-xl sm:text-2xl font-bold text-white/90 leading-tight mask-t-from-0.5">
                {student.Name}
              </h1>
              <div className="flex items-center gap-2 text-white/40">
                <span className="text-sm sm:text-base font-medium">BSCS</span>
                <span className="text-xs opacity-50">•</span>
                <span className="text-sm sm:text-base font-medium">
                  {`${student["Year Level"]}st Year`}
                </span>
              </div>
            </div>

            {/* Profile Image */}
            <div className="w-full aspect-[4/5] rounded-lg bg-black/40 mb-4 overflow-hidden">
              <img
                src={student.profile}
                alt={student.Name}
                className="w-full h-full object-cover object-center"
                style={{
                  boxShadow: "inset 0 0 100px rgba(0,0,0,0.5)",
                }}
              />
            </div>

            {/* Stats */}
            <div className="flex justify-between items-center mb-6">
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-bold text-white/90">
                  {parseFloat(student.GWA).toFixed(2)}
                </p>
                <p className="text-xs text-white/50 uppercase tracking-wider">
                  GWA
                </p>
              </div>
              <div className="text-right space-y-2">
                <p className="text-sm text-white/60">
                  Lowest Grade: {parseFloat(student["Lowest Grade"]).toFixed(2)}
                </p>
                <p className="text-sm text-white/60">
                  SN: {student["Student No."]}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-white/10">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider mb-1">
                    DEPARTMENT
                  </p>
                  <p className="text-sm text-white/70">CICT</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-white/40 uppercase tracking-wider mb-1">
                    Programs
                  </p>
                  <p className="text-sm text-white/70">BSCS • BSIS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default StudentCard;
