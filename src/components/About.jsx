import React from 'react';
import myPhoto from '../assets/my-profile.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-10">
        
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src={myPhoto} 
            alt="My Photo" 
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 object-cover rounded-full shadow-lg transition duration-300 hover:scale-105"
          />
        </div>

       
        <div className="w-full md:w-1/2 text-center md:text-left px-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
            About Me
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed animate-fade-in delay-200">
            I'm a passionate web developer with a strong foundation in 
            <span className="font-semibold text-blue-600"> HTML</span>, 
            <span className="font-semibold text-blue-600"> CSS</span>, 
            <span className="font-semibold text-blue-600"> JavaScript</span>, 
            <span className="font-semibold text-blue-600"> React</span>, and 
            <span className="font-semibold text-blue-600"> Tailwind CSS</span>. <br />
            I enjoy building responsive, dynamic, and user-friendly websites.
            My goal is to continuously grow and contribute to amazing digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
