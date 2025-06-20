// File: src/components/Contact.jsx
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">Contact Me</h2>
        
        {/* <p className="text-gray-600 mb-8 text-base sm:text-lg">
          Feel free to reach out for collaborations, job offers, or just to say hi!
        </p> */}

        <div className="grid sm:grid-cols-2 gap-8 text-left">
          {/* Email */}
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-blue-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-700">Email</h4>
              <p className="text-gray-600">a.agushi23@gmail.com</p>
            </div>
          </div>

          {/* Phone 1 */}
          <div className="flex items-start gap-4">
            <FaPhone className="text-blue-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-700">Phone 1</h4>
              <p className="text-gray-600">+383 44 493 583</p>
            </div>
          </div>

          {/* Phone 2 */}
          <div className="flex items-start gap-4">
            <FaPhone className="text-blue-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-700">Phone 2</h4>
              <p className="text-gray-600">+381 62 962 5653</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-700">Location</h4>
              <p className="text-gray-600">Bujanoc</p>
            </div>
          </div>
        </div>
      </div>

    <div className="mt-12">
  <p className="text-sm sm:text-base text-gray-500 italic text-center px-4">
    *I'm currently updating my portfolio. More projects will be added soon, along with a contact form for direct email communication.
  </p>
</div>

    </section>
  );
}
