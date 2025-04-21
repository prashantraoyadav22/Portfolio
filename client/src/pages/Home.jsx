import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="min-h-screen bg-black text-white"
    >
      {/* Your actual home content */}
      <div className="min-h-screen from-gray-900 via-black to-gray-800 text-white">
        
        <main className="pt-32 px-6 md:px-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hey, I'm <span className="text-blue-500">Your Name</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            I'm a passionate full-stack developer who loves building modern,
            fast and beautiful web apps with MERN stack.
          </p> 
        </main>
      </div>
    </motion.div>
  );
}
