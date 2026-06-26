import Navbar from "@/components/navbar";
import AnimateIn from "@/components/animate-in";
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
      <Navbar />
      <Hero />
      <AnimateIn><About /></AnimateIn>
      <AnimateIn><Services /></AnimateIn>
      <AnimateIn><Skills /></AnimateIn>
      <AnimateIn><Experience /></AnimateIn>
      <AnimateIn><Projects /></AnimateIn>
      <AnimateIn><Certifications /></AnimateIn>
      <AnimateIn><Interests /></AnimateIn>
      <AnimateIn><Contact /></AnimateIn>
    </>
  );
}
