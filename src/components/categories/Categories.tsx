import { SinglePostQueryResult } from "@/sanity/types";

type CategoriesProps = {
  categories: NonNullable<SinglePostQueryResult>["categories"];
};

const Categories = ({ categories }: CategoriesProps) => {
  return categories.map((category) => (
    <span
      key={category._id}
      className="bg-cyan-50 rounded-full px-2 py-1 leading-none whitespace-nowrap text-sm font-semibold text-cyan-700"
    >
      {category.title}
    </span>
  ));
};

export default Categories;
