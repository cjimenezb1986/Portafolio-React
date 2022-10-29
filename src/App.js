import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
   <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <WorkExperience />
      <Contact />
    
   </div>
  );
}

export default App;
