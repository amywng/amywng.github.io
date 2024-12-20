import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/home-page/hero"
import About from "~/components/home-page/about";
import Experience from "~/components/home-page/experience";
import Projects from "~/components/home-page/projects/projects";

export const meta: MetaFunction = () => {
  return [
    { title: "Amy Wang" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}