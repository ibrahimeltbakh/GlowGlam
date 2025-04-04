"use client";
import ProductCard from "@/components/ProductCard";
import useProducts from "@/Hooks/useProducts";

export default function Home() {
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
  const { data, isLoading, isError } = useProducts();
  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }
  if (isError) {
    return <div className="text-center">Error fetching products</div>;
  }
  if (!data) {
    return <div className="text-center">No products found</div>;
  }
  return (
    <main className="container mx-auto text-center mt-10">
      <h1 className="text-4xl font-bold">Welcome to GlowGlam</h1>
      <p className="mt-4 text-lg">
        Your one-stop shop for all things beauty and glamour!
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {data.slice(0, 4).map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {data.slice(4, 8).map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {data.slice(8, 12).map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">On Sale</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {data.slice(12, 16).map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Trending Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {data.slice(16, 20).map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Customer Favorites</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {data.slice(20, 24).map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Limited Edition</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {data.slice(24, 28).map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Seasonal Specials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {data.slice(28, 32).map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
