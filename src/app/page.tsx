import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Certifications from "@/components/certifications";
import Interests from "@/components/interests";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Interests />
      <Contact />
    </>
  );
}
