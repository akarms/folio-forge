"use client";
import Aboutme from "./components/aboutme";
import Skills from "./components/skills";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import AnimateOnScroll from "./components/ui/scrollAnimation";


export default function Home() {
  return (
    <div>
      {/* Navigation Menu */}
      <Navbar />

      {/* Sections */}
      <AnimateOnScroll>
        <div id="aboutme">
          <Aboutme />
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll >
        <div id="skill">
          <Skills />
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <div id="projects">
          <Projects />
        </div>
      </AnimateOnScroll>
    </div>
  );
}
