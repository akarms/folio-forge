'use client'
import Aboutme from "./components/aboutme";
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
        <Aboutme />
      </div>
    </div>
  );
}
