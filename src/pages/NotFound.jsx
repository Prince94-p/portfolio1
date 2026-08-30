import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-950 bg-grid-glow px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="font-display font-bold text-8xl gradient-text mb-4">
          404
        </div>
        <p className="font-mono text-sm text-slate-500 mb-2">
          console.error("page not found");
        </p>
        <h1 className="text-xl text-white font-semibold mb-6">
          This route doesn't exist — but the portfolio does.
        </h1>
        <Link to="/" className="btn-primary inline-flex">
          <FiArrowLeft /> Back to home
        </Link>
      </motion.div>
    </div>
  );
}
