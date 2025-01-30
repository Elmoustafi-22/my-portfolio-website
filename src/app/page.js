import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="bg-slate-100">
    
      <Header />
      <main className="flex flex-col gap-20">
        <Hero />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}
