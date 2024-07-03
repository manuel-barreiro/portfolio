// Components
import Navbar from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Form from "@/components/Form";

export default function Home() {
  return (
    <>
      <main className="w-full h-auto font-bodyFont bg-gradient-to-bl from-slate-900 to-black text-textLight overflow-x-hidden scrollbar-hide ">
        <Navbar />
        <div className="w-full h-auto xl:flex items-center gap-20 justify-between bg-grid-white/[0.04] relative mt-20 lg:mt-[12vh]">
          <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
            <LeftSide />
          </div>
          <div className="h-auto mx-auto p-4">
            <Banner />
            <About />
            <Experience />
            <Projects />
            <Form />
          </div>
          <div className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
            <RightSide />
          </div>
        </div>
      </main>
    </>
  );
}
