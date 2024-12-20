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
    { name: "description", content: `Pieces of mine in category ${categoryName}` },
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
        {pieces.map((piece) => (
          <img
            src={piece.imageSrc}
            alt={piece.title}
            className="w-[100px]"
          />
        ))}
    </div>
  )
}