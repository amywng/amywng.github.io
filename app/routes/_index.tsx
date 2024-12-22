import type { MetaFunction } from "@remix-run/node";
import HNavbar from "~/components/hnavbar";
import Hero from "~/components/home-page/hero"
import About from "~/components/home-page/about";
import Experience from "~/components/home-page/experience";
import Projects from "~/components/home-page/projects/projects";
import Contact from "~/components/home-page/contact";

export const meta: MetaFunction = () => {
  return [
    { title: "Amy Wang" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
};

export default function Index() {
  return (
    <div>
      <HNavbar />
      <div className="flex flex-col items-center overflow-x-clip">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}