import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import InfoPopup from "./InfoPopup";
import { useState } from "react";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <footer className="bg-gray-100 py-6 px-4 text-center text-sm text-gray-600">

        <div className="mb-3 flex flex-wrap justify-center items-center gap-5 text-xl">
          <a
            href="https://github.com/Almedin-Agushi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="hover:text-black transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/almedin-agushi-227682304/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="hover:text-blue-700 transition" />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FaEnvelope className="hover:text-red-500 transition" />
          </a>

          <button
            onClick={() => setIsOpen(true)}
            title="About this portfolio"
            className="p-0 bg-transparent text-gray-600 hover:text-blue-600 transition"
            aria-label="Info"
          >
            <AiOutlineInfoCircle size={20} />
          </button>
        </div>

        
        <p className="text-xs sm:text-sm">
          © {new Date().getFullYear()} Almedin Agushi. All rights reserved.
        </p>
      </footer>

      
      <InfoPopup isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Footer;
