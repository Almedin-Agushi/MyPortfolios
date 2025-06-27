import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet";
const MotionDiv = motion.div;
function Hero() {
  return (
    <section
      className="relative bg-gradient-to-r from-blue-100 to-purple-200 text-center overflow-hidden px-4 sm:px-8"
      style={{ height: '500px' }}
    >

    <Helmet>
            <title>About | Almedin Agushi</title>
            <meta
              name="description"
              content="Learn more about Almedin Agushi, a passionate web developer."
            />
          </Helmet>
      {/* SVG wave në fund */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
         <svg
          className="relative block w-full h-[90px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
         
        </svg>

      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center h-full">
        <h1
          className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-snug min-h-[70px] sm:min-h-[90px] max-w-4xl mx-auto"
          style={{ overflowWrap: 'break-word' }}
        >
          <TypeAnimation
            sequence={[
              "Hello, I'm Almedin Agushi 👋",
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
          className="text-base sm:text-lg text-gray-700 mt-8 mb-6 leading-relaxed max-w-4xl mx-auto"
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
