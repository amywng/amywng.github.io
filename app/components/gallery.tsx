import categories from "app/data/categories.json"
import { Link } from "@remix-run/react"

export const Gallery = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 pt-16 pb-16 md:pt-40 md:pb-0 md:pl-40">
            {categories.map((category) => (
                <div
                    key={category.id}
                    className="text-center"
                >
                    <Link
                        to={`/${category.id}`}
                    >
                        <img src={category.image} 
                            alt={category.name}
                            className="w-40 h-40 md:w-[200px] md:h-[200px] object-cover"/>
                        <p className="mt-2 ">{category.name}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}