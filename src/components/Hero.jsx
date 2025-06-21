import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
const MotionDiv = motion.div;
function Hero() {
  return (
    <section
      className="relative bg-gradient-to-r from-blue-100 to-purple-200 text-center overflow-hidden px-4 sm:px-8"
      style={{ height: '500px' }}
    >
      {/* SVG wave në fund */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-[80px] sm:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.59,22,103.75,29.3,158,22.24C283.82,51.39,392.09,0,500,0s216.18,51.39,342,68.53c54.26,7.06,110.42-.25,158-22.24V0Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center justify-center h-full">
        <h1
          className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-snug min-h-[70px] sm:min-h-[90px] max-w-lg mx-auto"
          style={{ overflowWrap: 'break-word' }}
        >
          <TypeAnimation
            sequence={[
              "Hello, I'm Almedin Agushi",
              3000,
              "Junior Web Developer",
              3000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <motion.p
          className="text-base sm:text-lg text-gray-700 mt-8 mb-6 leading-relaxed max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          I am passionate about web development and enjoy creating interactive and engaging user experiences.
        </motion.p>

        <motion.a
          href="/Almedin--Agushi-CV.pdf"
          download
          className="inline-block bg-blue-600 !text-white px-6 py-3 rounded-xl hover:bg-blue-700 
                     transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, type: "spring", stiffness: 100 }}
        >
          Download CV
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
