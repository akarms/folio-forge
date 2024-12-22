'use client'
import Aboutme from "./components/aboutme";
import Skills from "./components/skills";
import Navbar from "./components/navbar";


export default function Home() {
  return (
    <div>
      {/* Navigation Menu */}
      <Navbar />

      {/* Sections */}
      <div id="aboutme">
        <Aboutme />
      </div>
      <div id="skill">
        <Skills />
      </div>
    </div>
  );
}
