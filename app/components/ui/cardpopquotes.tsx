"use client";
import { motion } from "framer-motion";

interface CommentCardProps {
  position: { bottom?: string; right?: string; left?: string; top?: string };
  quote: string;
  author: string;
  delay?: number;
}

const CommentCard = ({
  position,
  quote,
  author,
  delay = 0,
}: CommentCardProps) => {
  const isLeftPosition = "left" in position;

  const variants = {
    initial: {
      opacity: 0,
      x: isLeftPosition ? -100 : 100,
      rotate: isLeftPosition ? -5 : 5,
    },
    animate: {
      opacity: 1,
      x: 0,
      rotate: 0,
    },
  };

  return (
    <motion.div
      className="absolute max-w-sm"
      style={position}
      variants={variants}
      initial="initial"
      animate="animate"
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay,
        type: "spring",
        stiffness: 100,
      }}
      whileInView={{ opacity: 1 }}
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-md shadow-purple-500 border border-white/30">
        <p className="text-white/80 text-sm italic">"{quote}"</p>
        <p className="text-white/60 text-xs mt-2">- {author}</p>
      </div>
    </motion.div>
  );
};

export default CommentCard;
