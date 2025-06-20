import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact } from "react-icons/fa";
import { SiMysql, SiTailwindcss, SiWordpress, SiGithub } from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiWordpress />, name: "WordPress" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiGithub />, name: "GitHub" },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-100 text-center px-4 sm:px-6">
      <h2 className="text-3xl font-bold mb-10 text-blue-600 animate-fade-in">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
          >
            <div className="text-4xl text-blue-600 mb-2 flex justify-center">{skill.icon}</div>
            <p className="font-semibold text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}