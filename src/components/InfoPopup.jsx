import { motion, AnimatePresence } from "framer-motion";
const MotionDiv = motion.div;
export default function InfoPopup({ isOpen, setIsOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black z-40"
          />

          {/* Popup Box */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-xl sm:w-[80vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw] bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 transform -translate-x-1/2 -translate-y-1/2 overflow-y-auto max-h-[90vh]"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-white">
              About This Portfolio
            </h2>

            <p className="mb-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              This portfolio showcases my skills, projects, and experience as a Junior Web Developer. Built with:
            </p>

            <ul className="list-disc list-inside space-y-2 mb-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              <li><strong>React.js</strong> – UI with reusable components</li>
              <li><strong>Vite</strong> – Fast dev + optimized build</li>
              <li><strong>Tailwind CSS</strong> – Utility-first CSS</li>
              <li><strong>Framer Motion</strong> – Smooth animations</li>
              <li><strong>React Icons</strong> – Icon library</li>
              <li><strong>React Type Animation</strong> – Typing effect</li>
              <li><strong>Netlify</strong> – Free deployment</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
              Features:
            </h3>

            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              <li>Responsive design for all screens</li>
              <li>Animated hero + typing effect</li>
              <li>Interactive project & skills sections</li>
              <li>Downloadable CV & contact</li>
              <li>Mobile menu with hamburger</li>
              <li>Clean modular React code</li>
            </ul>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 px-4 py-2 !bg-red-600 hover:!bg-red-500 text-white rounded-md text-sm sm:text-base transition"
            >
              Close
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
