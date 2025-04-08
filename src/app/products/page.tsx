import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/Product";

const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch("https://dummyjson.com/products", {
      next: { revalidate: 60 }, // Revalidate the data every 60 seconds
    });
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const ProductsPage = async () => {
  const products = await fetchProducts();

  return (
    <div className="flex flex-col items-center justify-center pt-5">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.length > 0 ? (
          products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
