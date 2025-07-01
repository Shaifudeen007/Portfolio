import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications"; // ✅ Import Certification
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16 scroll-smooth">
        <IntroSection />
        <About />
        <Skills />
        <Projects />
        <Certifications /> {/* ✅ Added Certifications section */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
