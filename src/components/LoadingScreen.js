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
      transition={{ duration: 1.5, delay: 5.5, ease: "easeInOut", type:"spring" }} // 6초 후 페이드 아웃
    >
      <LoadingBar />
    </motion.div>
  );
};

export default LoadingScreen;
