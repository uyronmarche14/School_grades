"use client";
import React, { useState, ReactNode } from "react";

interface TiltProps {
  children: ReactNode;
}

const Tilt: React.FC<TiltProps> = ({ children }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;

    const centerX = box.width / 2;
    const centerY = box.height / 2;

    const rotateX = ((y - centerY) / 15).toFixed(2); // Reduced tilt effect
    const rotateY = (-(x - centerX) / 15).toFixed(2); // Reduced tilt effect

    setRotation({ x: parseFloat(rotateX), y: parseFloat(rotateY) });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className="transition-transform duration-200 ease-out"
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.01, 1.01, 1.01)`, // Reduced scale effect
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default Tilt;
