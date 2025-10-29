'use client';
import { motion } from "framer-motion";

export default function PageLoading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-blue-50 flex items-center justify-center z-50">
      
      <motion.div
        className="w-24 h-24 rounded-full border-8 border-blue-500 border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      
    </div>
  );
}
