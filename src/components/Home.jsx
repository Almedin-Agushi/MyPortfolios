import { motion } from "framer-motion";

const MotionDiv = motion.div;

export default function Home() {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-white">
      <MotionDiv
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-600">Hi, I'm Almedin 👋</h1>
        <p className="mt-4 text-gray-700 text-lg">I’m a Web Developer specialized in React and PHP</p>
      </MotionDiv>
    </section>
  );
}
