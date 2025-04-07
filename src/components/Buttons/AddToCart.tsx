"use client";
import { addToCart } from "@/RTK/Slices/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { Product } from "@/types/Product";

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
