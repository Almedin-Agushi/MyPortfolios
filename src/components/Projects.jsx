// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// export default function Projects() {
//   const projects = [
//     {
//       title: "Portfolio Website",
//       description: "A personal portfolio built with React and Tailwind CSS.",
//       tech: ["React", "Tailwind", "Netlify"],
//       link: "https://yourportfolio.netlify.app",
//     },
//     {
//       title: "Blog Platform",
//       description: "A simple blog built with PHP and MySQL.",
//       tech: ["PHP", "MySQL"],
//       link: "https://github.com/yourusername/blog-platform",
//     },
//     {
//       title: "Landing Page",
//       description: "A responsive landing page built with HTML, CSS, and JS.",
//       tech: ["HTML", "CSS", "JavaScript"],
//       link: "https://github.com/yourusername/landing-page",
      
//     },
//      {
//       title: "Landing 1",
//       description: "A responsive landing page built with HTML, CSS, and JS.",
//       tech: ["HTML", "CSS", "JavaScript"],
//       link: "https://github.com/yourusername/landing-page",
//     },
//   ];

//   return (
//     <section id="projects" className="py-16 bg-white text-center">
//       <h2 className="text-3xl font-bold mb-10 text-blue-600">My Projects</h2>
//       <div className="max-w-3xl mx-auto">
//         <Swiper
//   modules={[Pagination, Navigation]}
//   spaceBetween={30}
//   slidesPerView={1}
//   navigation
//   pagination={{ clickable: true }}
//   className="max-w-5xl mx-auto px-8"
// >
//   {projects.map((project, index) => (
//     <SwiperSlide key={index}>
//       <div className="bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition text-center">
//         <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
//         <p className="text-gray-700 mb-3">{project.description}</p>
//         <div className="flex flex-wrap justify-center gap-2 mb-4">
//           {project.tech.map((t, i) => (
//             <span key={i} className="bg-blue-200 text-blue-800 px-2 py-1 text-sm rounded-full">
//               {t}
//             </span>
//           ))}
//         </div>
//         <a
//           href={project.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-600 font-medium hover:underline"
//         >
//           View Project
//         </a>
//       </div>
//     </SwiperSlide>
//   ))}
// </Swiper>
//       </div>
//     </section>
//   );
// }



// File: src/components/Projects.jsx
export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "Built with React and Tailwind CSS to showcase my skills and projects.",
      link: "#"
    },
    {
      title: "BusinessPro Theme – WordPress Theme for Businesses and Hotels",
      description: "A custom-built WordPress theme from scratch, designed for promoting businesses or hotels. It features a responsive design, dynamic content fields using ACF, and integration of modern technologies such as JavaScript, PHP, and SASS.",
      link: "https://github.com/Almedin-Agushi/alphatheme2"
    },
    {
      title: "FreelanceHub Theme – WordPress Theme for Freelancers and Job Listings",
      description: "A modern and lightweight WordPress theme built from scratch for freelance platforms or job listing websites. It uses PHP for backend functionality, Tailwind CSS for responsive and clean design, and JavaScript for interactivity. Ideal for showcasing freelance gigs, posting jobs, and connecting clients with professionals.",
      link: "https://github.com/Almedin-Agushi/freelancer"
    }
  ];

  return (
    <section id="projects" className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          My Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} className="text-sm text-blue-500 hover:underline">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



/*  export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Tailwind CSS.",
      tech: ["React", "Tailwind", "Netlify"],
      link: "https://yourportfolio.netlify.app",
    },
    {
      title: "Blog Platform",
      description: "A simple blog built with PHP and MySQL.",
      tech: ["PHP", "MySQL"],
      link: "https://github.com/yourusername/blog-platform",
    },
    {
      title: "Landing Page",
      description: "A responsive landing page built with HTML, CSS, and JS.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/yourusername/landing-page",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10 text-blue-600">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-10 px-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-3">{project.description}</p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-blue-200 text-blue-800 px-2 py-1 text-sm rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
} */