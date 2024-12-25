"use client";
import Aboutme from "./components/aboutme";
import Skills from "./components/skills";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Projects2 from "./components/projects2";
import Education from "./components/education";
import Contact from "./components/contact";
import AnimateOnScroll from "./components/ui/scrollAnimation";


export default function Home() {
  return (
    <div>
      {/* Navigation Menu */}
      <Navbar />

      {/* Sections */}
      <AnimateOnScroll className="lg">
        <div id="aboutme">
          <Aboutme />
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll className="lg">
        <div id="skill">
          <Skills />
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll className="lg">
        <div id="projects">
          <Projects />
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll className="lg">
        <div id="education">
          <Projects2 />
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll className="lg">
        <div id="education">
          <Education />
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll className="lg">
        <div id="contact">
          <Contact />
        </div>
      </AnimateOnScroll>
      
    </div>
  );
}
