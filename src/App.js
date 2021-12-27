import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/project/ProjectList";
function App() {
  return (
    <>
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </>
  );
}

export default App;
