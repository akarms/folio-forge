"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface ShinyHoverContainerProps {
  children: React.ReactNode;
  borderColor?: string; // Default color for the shine
  intensity?: number; // Intensity of the glow effect
  className?: string;
}

export const ShinyHoverContainer: React.FC<ShinyHoverContainerProps> = ({
  children,
  borderColor = "#6c63ff", // Default to the purple color
  intensity = 20,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const glowX = useTransform(x, (value) => `${value / intensity}px`);
  const glowY = useTransform(y, (value) => `${value / intensity}px`);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      className={`relative p-4 rounded-lg shadow-lg overflow-hidden transition-all duration-500 ${className}`}
      style={{
        boxShadow: isHovered
          ? `0 0 20px ${borderColor}, 0 0 40px ${borderColor}`
          : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[-1]"
        style={{
          background: isHovered
            ? `radial-gradient(circle at ${glowX.get()} ${glowY.get()}, ${borderColor}, transparent 70%)`
            : "transparent",
          filter: "blur(15px)",
        }}
      />

      {/* Border Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-lg"
        style={{
          border: isHovered ? `2px solid ${borderColor}` : "2px solid transparent",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
