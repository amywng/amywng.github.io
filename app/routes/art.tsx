import type { MetaFunction } from "@remix-run/node";
import { Gallery } from "~/components/gallery";
import VNavbar from "~/components/vnavbar";

export const meta: MetaFunction = () => {
  return [
    { title: "Art" },
    { name: "description", content: "A collection of my artwork" },
  ];
};

export default function Index() {
  return (
    <div>
      <VNavbar />
      <div className="flex flex-col items-center">
        <Gallery />
      </div>
    </div>
  );
}