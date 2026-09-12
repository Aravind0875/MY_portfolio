import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      
      <footer className="py-8 text-center text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-white/10 mt-10">
        <p>© {new Date().getFullYear()} Gamma Aravind. All rights reserved.</p>
        <p className="mt-1">
          Designed based on Sahil Bhatane's Developer Portfolio.
        </p>
      </footer>
    </main>
  );
}
