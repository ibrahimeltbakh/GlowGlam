"use client";

import { createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  count: number;
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

// Helper function to get the initial cart from localStorage
const getInitialCart = (): Product[] => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  }
  return [];
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: getInitialCart(),
  reducers: {
    addToCart: (state, action) => {
      const productExist = state.find(
        (product: Product) => product.id === action.payload.id
      );
      if (productExist) {
        productExist.count += 1;
      } else {
        const cloneProduct = { ...action.payload, count: 1 };
        state.push(cloneProduct);
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    deleteFromCart: (state, action) => {
      const newCart = state.filter(
        (product: Product) => product.id !== action.payload
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(newCart));
      }
      return newCart;
    },
    clearCart: () => {
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      return [];
    },
    increaseProduct: (state, action) => {
      const productExist = state.find(
        (product: Product) => product.id === action.payload.id
      );
      if (productExist) productExist.count++;
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    decreaseProduct: (state, action) => {
      const productExist = state.find(
        (product: Product) => product.id === action.payload.id
      );
      if (productExist) {
        if (productExist.count > 1) productExist.count--;
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  clearCart,
  increaseProduct,
  decreaseProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
