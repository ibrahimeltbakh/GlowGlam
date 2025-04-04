"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@/components/ProductCard";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}
const Page = () => {
  const { category } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  console.log(category);

  useEffect(() => {
    // Fetch products for the selected category
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/category/${category}`
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (category) {
      fetchProducts();
    }
  }, [category]);

  return (
    <div className="flex ">
      <div className="p-4">
        <h1 className="text-2xl text-center font-bold mb-4">
          Products in {category}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products available for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
