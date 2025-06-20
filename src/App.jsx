import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from "./components/Skills";
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="pt-20">
      <Navbar />
      {/* <Home/> */}
      <Hero/>
      <About/>
       <Skills/>
      <Projects/>
      <Contact />
      <Footer/>

    </div>
  );
}


export default App;
