"use client";
import * as React from "react";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const AnimatedDiv = ({
  className,
  children,
  radius = 100, // Radius of the hover effect
}: {
  className?: string;
  children?: React.ReactNode;
  radius?: number;
}) => {
  const [visible, setVisible] = React.useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
        radial-gradient(
          ${visible ? `${radius}px` : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className={cn(
        "p-[3px] rounded-lg transition duration-300 shadow-hover-div", // Apply Tailwind shadow
        className
      )}
    >
      <div
        className={cn(
          "h-full w-full flex items-center justify-center  bg-black text-black dark:text-white shadow-input rounded-md",
          "group-hover:shadow-none transition duration-400",
          className
        )}
      >
        {children}
      </div>
    </motion.div>
  );
};
