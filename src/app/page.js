import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="dark:bg-darkBgDeep bg-slate-100 h-full">
    
      <Header />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      <Footer />
    </div>
  );
}
