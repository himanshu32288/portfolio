import { useContext } from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { ThemeContext } from "./components/Context";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/project/ProjectList";
import Toggle from "./components/toggle/Toggle";
function App() {
  const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkMode;
  return (
    <>
      <div
        style={{
          backgroundColor: darkmode ? "#222" : "white",
          color: darkmode ? "white" : "black",
        }}
      >
        <Toggle />
        <Intro />
        <About />
        <ProjectList />
        <Contact />
      </div>
    </>
  );
}

export default App;
