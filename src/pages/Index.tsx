import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Discussion from "@/components/Discussion";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Resume />
      <Contact />
      <Discussion />
    </div>
  );
};

export default Index;
