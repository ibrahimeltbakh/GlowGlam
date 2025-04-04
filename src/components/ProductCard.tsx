import React from "react";
import Link from "next/link";
import AddToCart from "./Buttons/AddToCart";

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

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/products/${product.id}`} className="w-full h-full">
      <div className="bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
        <p className="line-clamp-4 overflow-hidden">{product.description}</p>
        <p className="text-green-500 font-bold">${product.price}</p>
        <p className="text-sm text-gray-400">Stock: {product.stock}</p>
        <AddToCart product={product} />
      </div>
    </Link>
  );
};

export default ProductCard;
