import { motion } from "framer-motion";
import { useLoading } from "./LoadingContext";
import LoadingBar from "./LoadingBar";

const LoadingScreen = () => {
  const { loading } = useLoading();
  if (!loading) return null;

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.1, delay: 2.4, ease: "easeInOut" }} 
    >
      <LoadingBar />
    </motion.div>
  );
};

export default LoadingScreen;
