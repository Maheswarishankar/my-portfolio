

import About from './About/About';
import './App.css';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import ProjectsData from './Projects/ProjectsData';
import Skills from './Skills/Skills';


function App() {
  return (
    <div className="App">
      <Navbar/>

      <section id='Home'>
        <Home/>
      </section>
      <section id='About'>
        <About/>
      </section>
      <section id='Skills'>
        <Skills/>
      </section>

      <section id='ProjectsData'>
        <ProjectsData/>
      </section>

      <section id='Contact'>
        <Contact/>
      </section>

     
     
    </div>
  );
}

export default App;
