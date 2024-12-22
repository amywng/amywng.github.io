import { MetaFunction, useLoaderData } from "@remix-run/react";
import CatNavbar from "~/components/catnavbar";
import categories from "app/data/categories.json"
import type { LoaderFunction } from "@remix-run/node";
import VNavbar from "~/components/vnavbar";

export const clientLoader: LoaderFunction = async ({ params }) => {
    const categoryId = params.categoryId;
    const category = categories.find((cat) => cat.id === categoryId)
    return { categoryId, categoryName: category?.name, pieces: category?.pieces };
}

export const meta: MetaFunction<typeof clientLoader> = ({
  data,
}) => {
  const { categoryName } = data as {categoryName: string};
  return [
    { title: `${categoryName}` },
    { name: "description", content: `Artworks of mine related to ${categoryName}` },
  ];
};

export default function ArtCategory() {
    const { categoryId, categoryName, pieces } = useLoaderData<{
      categoryId: string;
      categoryName: string;
      pieces: { title: string; imageSrc: string }[];
    }>();

  return (
    <div>
      <VNavbar />
      <div className="flex flex-col relative">
        <CatNavbar />
        <div className="pt-16 md:pt-36 pl-8 md:pl-72">
          <div className="gallery flex gap-5 overflow-x-auto">
            {categoryId!="animated" && pieces.map((piece, index) => (
              <div className={`relative flex-shrink-0 h-[500px] w-auto ${
              index === pieces.length - 1 ? 'mr-8 md:mr-16' : ''}`}>
                <img
                  src={piece.imageSrc}
                  alt={piece.title}
                  className="object-contain h-48 md:h-full w-auto"
                />
              </div>
            ))}
            {categoryId==="animated" && pieces.map((piece, index) => (
              <div className={`relative flex-shrink-0 h-[500px] w-auto ${
              index === pieces.length - 1 ? 'mr-8 md:mr-16' : ''}`}>
                <video className="h-48 md:h-full w-auto"controls>
                  <source src={piece.imageSrc} 
                  type="video/mp4"/>This browser doesn't support the video tag.
                </video>
              </div>
            ))}
          </div>
          <div className="absolute top-[65%] left-8 flex items-center md:hidden gap-x-1">
            <h2>Swipe</h2>
            <img src="/nav/ArrowRight.png" 
            alt="right arrow"
            className="w-4 h-4"/>
          </div>
          <div className="hidden md:relative mt-5 md:flex items-center gap-x-1">
            <h2>Scroll</h2>
            <img src="/nav/ArrowRight.png" 
            alt="right arrow"
            className="w-4 h-4"/>
          </div>
        </div>
      </div>
    </div>
  )
}