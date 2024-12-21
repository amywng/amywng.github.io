import { MetaFunction, useLoaderData } from "@remix-run/react";
import CatNavbar from "~/components/catnavbar";
import categories from "app/data/categories.json"
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ params }) => {
    const categoryId = params.categoryId;
    const category = categories.find((cat) => cat.id === categoryId)
    return { categoryId, categoryName: category?.name, pieces: category?.pieces };
}

export const meta: MetaFunction<typeof loader> = ({
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
        <CatNavbar />
        <div className="pt-36 pl-72">
          <div className="gallery flex gap-5 overflow-x-auto">
            {categoryId!="animated" && pieces.map((piece, index) => (
              <img
                src={piece.imageSrc}
                alt={piece.title}
                className={`w-auto h-[500px] ${index === pieces.length - 1 ? 'mr-16' : ''}`}
              />
            ))}
            {categoryId==="animated" && pieces.map((piece, index) => (
              <video className={`w-auto h-[500px] ${index === pieces.length - 1 ? 'mr-16' : ''}`} controls>
                <source src={piece.imageSrc} type="video/mp4"/>This browser doesn't support the video tag.
              </video>
            ))}
          </div>
        </div>
    </div>
  )
}