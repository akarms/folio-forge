'use client'
import Aboutme from "./components/aboutme";
import Skills from "./components/skills";
import Navbar from "./components/navbar";
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
      <AnimateOnScroll>
      <div id="skill">
        <Skills />
      </div>
      </AnimateOnScroll>
    </div>
  );
}
