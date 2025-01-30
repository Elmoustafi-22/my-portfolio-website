import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-8">
        <Hero />
        <Projects />
        
      </main>
    </>
  );
}
