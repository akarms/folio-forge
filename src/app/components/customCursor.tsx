"use client";

import { useEffect, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface CustomCursorProps {
  children: ReactNode;
}

const CustomCursor: React.FC<CustomCursorProps> = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>(
    {
      x: 0,
      y: 0,
    }
  );
  const [cursorVariant, setCursorVariant] = useState<"default" | "text">(
    "default"
  );

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "green",
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      height: 150,
      width: 150,
      backgroundColor: "yellow",
      mixBlendMode: "difference" as const,
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div
      onMouseEnter={textEnter}
      onMouseLeave={textLeave}
      style={{ position: "relative" }}
    >
   
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </div>
  );
};

export default CustomCursor;
