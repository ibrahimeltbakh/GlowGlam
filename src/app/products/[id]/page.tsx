"use client";
import { Product } from "@/types/Product";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AddToCart from "@/components/Buttons/AddToCart";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Fetch product details for the selected ID
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

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
          <p className="text-sm text-gray-500 mt-2">Rating: {product.rating}</p>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
