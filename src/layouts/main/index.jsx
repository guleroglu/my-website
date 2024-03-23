import About from "../../pages/about";
import Home from "../../pages/home";
import Projects from "../../pages/projects";
import "../../App.css";

export default function MainLayout() {
  return (
    <>
      <Home />
      <About />
      <Projects />
    </>
  );
}
