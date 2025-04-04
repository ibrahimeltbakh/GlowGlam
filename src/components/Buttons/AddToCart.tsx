"use client";
import { addToCart } from "@/RTK/Slices/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";
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
export default function AddToCart({ product }: { product: Product }) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={(e) => {
        dispatch(addToCart(product));
        e.preventDefault();
        e.stopPropagation();
      }}
      className="bg-blue-500 text-white py-2 px-4 rounded mt-4 cursor-pointer">
      Add to Cart
    </button>
  );
}
