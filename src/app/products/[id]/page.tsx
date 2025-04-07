// src/app/products/[id]/page.tsx

import { Product } from "@/types/Product";
import AddToCart from "@/components/Buttons/AddToCart";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: Props) {
  const product = await fetchProduct(params.id);

  if (!product) return notFound();

  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row items-center">
        {/* Product Images */}
        <div className="flex flex-col items-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-64 h-64 object-cover rounded-lg mb-4"
          />
          <div className="flex space-x-2">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product Image ${index + 1}`}
                className="w-16 h-16 object-cover rounded-lg border"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="ml-8">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-green-500 font-bold text-xl mt-4">
            ${product.price}{" "}
            <span className="text-red-500 text-sm">
              (-{product.discountPercentage}%)
            </span>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Category: {product.category}
          </p>
          <p className="text-sm text-gray-500">Brand: {product.brand}</p>
          <p className="text-sm text-gray-500">Stock: {product.stock}</p>
          <p className="text-sm text-gray-500 mt-2">
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
}

async function fetchProduct(id: string): Promise<Product | null> {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) throw new Error("Failed to fetch");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
