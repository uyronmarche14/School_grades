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
  return (
    <motion.div
      className="absolute max-w-sm"
      style={position}
      initial={{ opacity: 0, y: 20, rotate: -5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: delay,
      }}
      whileInView={{ opacity: 1 }}
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-md shadow-purple-500 border border-white/30 ">
        <div className="flex items-start space-x-4">
          <div className="flex-1">
            <p className="text-white/80 text-sm italic">"{quote}"</p>
            <p className="text-white/60 text-xs mt-2">- {author}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CommentCard;
