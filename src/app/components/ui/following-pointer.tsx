/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface FollowerPointerCardProps {
  children: React.ReactNode;
  className?: string;
}

export const FollowerPointerCard: React.FC<FollowerPointerCardProps> = ({
  children,
  className,
}) => {
  const x = useMotionValue<number>(0);
  const y = useMotionValue<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, [ref.current]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (rect) {
        const { scrollX, scrollY } = window;
        x.set(e.clientX - rect.left + scrollX);
        y.set(e.clientY - rect.top + scrollY);
      }
    },
    [rect, x, y]
  );

  const handleMouseLeave = useCallback(() => setIsInside(false), []);
  const handleMouseEnter = useCallback(() => setIsInside(true), []);

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={{ cursor: "none" }}
      ref={ref}
      className={cn("relative", className)}
    >
      <AnimatePresence>
        {isInside && <FollowPointer x={x} y={y} />}
      </AnimatePresence>
      {children}
    </div>
  );
};

interface FollowPointerProps {
  x: ReturnType<typeof useMotionValue<number>>;
  y: ReturnType<typeof useMotionValue<number>>;
}

export const FollowPointer: React.FC<FollowPointerProps> = ({ x, y }) => {
  return (
    <motion.div
      className="h-4 w-4 rounded-full absolute z-50"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
      initial={{ scale: 1, opacity: 1 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
    >
      <div
        className="h-6 w-6 rounded-full bg-[#02f7a6] "
        style={{
          transform: "translate(-50%, -50%)",
          opacity: 0.5, // Adjust transparency

        }}
      />
    </motion.div>
  );
};
