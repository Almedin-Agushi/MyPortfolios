import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
      <div className="mb-2 flex justify-center gap-4 text-xl">
        <a href="https://github.com/Almedin-Agushi/" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-black" />
        </a>
        <a href="https://www.linkedin.com/in/almedin-agushi-227682304/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-700" />
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox">
          <FaEnvelope className="hover:text-red-500" />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Almedin Agushi. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
