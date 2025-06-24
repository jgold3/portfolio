"use client";

import { useState } from "react";
import { motion } from "motion/react";

type FlipCardProps = {
  front: string | React.ReactNode;
  back: string | React.ReactNode;
  dimensions?: {
    width: number;
    height: number;
  };
};

export function FlipCard({ front, back, dimensions = { width: 24, height: 24 } }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleInteraction = () => {
    setIsFlipped(!isFlipped);
  };
  console.log(isFlipped);
  return (
    <div className={`h-${dimensions.height} w-${dimensions.width} perspective-distant`}>
      <motion.div
        className="preserve-3d relative h-full w-full cursor-pointer touch-manipulation"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        whileHover={{ rotateY: 180 }}
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
        onTap={handleInteraction}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flex h-full w-full items-center justify-center rounded bg-secondary p-2 shadow-lg backface-hidden">
          {front}
        </div>
        <div
          className="absolute inset-0 flex h-full w-full items-center justify-center rounded bg-primary p-2 text-center text-sm font-semibold text-white shadow-lg backface-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
}
