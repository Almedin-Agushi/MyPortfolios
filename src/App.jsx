import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from "./components/Skills";
import Footer from './components/Footer';
import SectionWrapper from "./components/SectionWrapper";


import './App.css';

function App() {
  return (
    <div className="pt-20">
  
      <Navbar />
     
     <SectionWrapper>
        <Hero />
      </SectionWrapper>
      
       <SectionWrapper>
        <About />
      </SectionWrapper>
       <SectionWrapper>
        <Skills/>
      </SectionWrapper>
        <SectionWrapper>
        <Projects/>
      </SectionWrapper>
        <SectionWrapper>
        <Contact />
      </SectionWrapper>
      
      <SectionWrapper>
        <Footer />
      </SectionWrapper>

    </div>
  );
}


export default App;
