import { useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
const MotionDiv = motion.div;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full bg-white shadow z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
    
        <a href="/" className="flex items-center space-x-2 h-full">
 
    <img 
      src="/icon.png" 
      alt="Logo" 
      className="h-12 w-12 sm:h-16 sm:w-16 md:h-15 md:w-15 object-contain" 
    />
  
    {/* <span className="text-lg sm:text-xl md:text-3xl font-bold text-black">
      Alm<span className="text-blue-600">edin</span>
    </span> */}
  </a>


        
        <ul className="hidden md:flex space-x-6">
          <li><a href="#about" className="text-gray-700 hover:text-blue-600">About</a></li>
          <li><a href="#skills" className="text-gray-700 hover:text-blue-600">Skills</a></li>
          <li><a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a></li>
        </ul>

       
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl text-blue-600 dark:text-blue-600 focus:outline-none">

            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      
      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col items-center bg-white px-4 py-6 space-y-4 shadow"
        >
          <li><a href="#about" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#skills" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </motion.ul>
      )}
    </motion.nav>
  );
}
