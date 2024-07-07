// Components
import Navbar from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Form from "@/components/contact/Form";
import Approach from "@/components/Approach";

export default function Home() {
  return (
    <>
      <main className="w-full h-auto font-bodyFont bg-gradient-to-bl from-slate-900 to-black text-textLight overflow-x-hidden scrollbar-hide ">
        <Navbar />
        <div className="w-full h-auto xl:flex items-center gap-20 justify-between bg-grid-white/[0.04] relative mt-20 lg:mt-[12vh]">
          <div className="hidden lg:inline-flex w-20 xl:w-32 h-full fixed left-0 bottom-0">
            <LeftSide />
          </div>
          <div className="h-auto mx-auto p-4">
            <Hero />
            <About />
            <Experience />
            <Approach />
            <Projects />
            <Form />
          </div>
          <div className="hidden lg:inline-flex w-20 xl:w-32 h-full fixed right-0 bottom-0">
            <RightSide />
          </div>
        </div>
      </main>
    </>
  );
}
