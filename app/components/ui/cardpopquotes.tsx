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
      x: isLeftPosition ? -50 : 50,
      rotate: isLeftPosition ? -3 : 3,
    },
    animate: {
      opacity: 1,
      x: 0,
      rotate: 0,
    },
  };

  return (
    <motion.div
      className="absolute max-w-[300px] lg:max-w-sm xl:max-w-md "
      style={position}
      variants={variants}
      initial="initial"
      animate="animate"
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay,
        type: "spring",
        stiffness: 100,
      }}
      whileInView={{ opacity: 1 }}
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 lg:p-5 shadow-md shadow-purple-500/30 border border-white/20 hover:border-white/30 transition-colors">
        <p className="text-white/80 text-sm lg:text-base italic leading-relaxed">
          &quot;{quote}&quot;
        </p>
        <p className="text-white/60 text-xs lg:text-sm mt-2 font-medium">
          - {author}
        </p>
      </div>
    </motion.div>
  );
};

export default CommentCard;
