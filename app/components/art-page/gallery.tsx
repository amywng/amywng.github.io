import categories from "app/data/categories.json"
import { Link } from "@remix-run/react"

export const Gallery = () => {
    return (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-5 flex-1">
            {categories.map((category) => (
                <div
                    key={category.id}
                    className="flex flex-col items-center text-center"
                >
                    <Link
                        to={`/${category.id}`}
                    >
                        <img src={category.image} 
                            alt={category.name}
                            className="w-full h-auto rounded-[8px]"/>
                        <p className="mt-2 ">{category.name}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}