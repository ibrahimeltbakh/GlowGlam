import axios from "axios";
import Link from "next/link";

const CategoriesSidebar = async () => {
  let categories: string[] = [];
  try {
    const response = await axios.get(
      "https://dummyjson.com/products/category-list"
    );
    categories = response.data;
  } catch (error) {
    console.log("Error fetching categories", error);
  }

  return (
    <div className="flex flex-col items-center justify-center pt-5">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <div className="grid grid-cols-1  gap-4 p-4">
        {categories.length > 0 ? (
          categories.map((category: string) => (
            <Link
              href={`/categories/${category}`}
              key={category}
              className="flex flex-col items-center justify-center pt-5 border-2 border-gray-300 rounded-lg ">
              <h1 className="text-2xl font-bold mb-4 ">{category}</h1>
            </Link>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default CategoriesSidebar;
