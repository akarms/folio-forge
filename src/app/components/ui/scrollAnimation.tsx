/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, TargetAndTransition } from "framer-motion";

const AnimateOnScroll = ({
  children,
  className,
  animation,
  triggerOnce = false, // Control re-triggering
}: {
  children: React.ReactNode;
  className?: string;
  animation?: TargetAndTransition; // Restrict type to TargetAndTransition
  triggerOnce?: boolean; // Whether the animation should run only once
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (!triggerOnce) {
          setIsVisible(false); // Reset visibility if `triggerOnce` is false
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [triggerOnce]);

  return (
<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 50 }}
  animate={isVisible ? animation || { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className={className}
>
  {children}
</motion.div>
  );
};

export default AnimateOnScroll;
