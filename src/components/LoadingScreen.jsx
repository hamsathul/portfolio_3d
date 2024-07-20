import { useProgress } from "@react-three/drei";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = ({ started, setStarted }) => {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setStarted(true);
      }, 700);
    }
  }, [progress, setStarted]);

  return (
    <AnimatePresence>
      {!started && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: started ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-indigo-200 relative">
            <motion.div
              className="absolute left-0 top-0 overflow-hidden truncate text-clip"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            >
              Hamsathul Haris
            </motion.div>
            <div className="opacity-40">Hamsathul Haris</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
