"use client";
import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/RTK/store";
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
  const cartProducts = useSelector((state: RootState) => state.cart);
  const totalPrice = cartProducts.reduce(
    (total: number, product: Product) => total + product.price,
    0
  );
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <p className="mt-4">Your selected items are listed below:</p>
        <table className="bg-gray-800 mt-5 w-full text-left border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-600 text-white">
              <th className="border border-gray-300 p-2">title</th>
              <th className="border border-gray-300 p-2">Image</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">category</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product: Product) => (
              <tr key={product.id} className="border border-gray-300">
                <td className="border border-gray-300 p-2">{product.title}</td>
                <td className="border border-gray-300 p-2">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-20 h-20"
                  />
                </td>
                <td className="border border-gray-300 p-2">${product.price}</td>
                <td className="border border-gray-300 p-2">
                  {product.category}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-600 text-white">
              <td className="border border-gray-300 p-2" colSpan={3}>
                Total
              </td>
              <td className="border border-gray-300 p-2">{`$${totalPrice}`}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Page;
