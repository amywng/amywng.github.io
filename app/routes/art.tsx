import type { MetaFunction } from "@remix-run/node";
import { Gallery } from "~/components/art-page/gallery";
import VNavbar from "~/components/vnavbar";

export const meta: MetaFunction = () => {
  return [
    { title: "Amy Wang" },
    { name: "description", content: "Welcome to my portfolio!" },
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