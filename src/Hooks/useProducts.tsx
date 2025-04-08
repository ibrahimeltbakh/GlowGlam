import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const response = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        return data.products; // Return the products directly
      } catch (error) {
        console.error("Error fetching products:", error);
        return []; // Return an empty array in case of an error
      }
    },
    refetchInterval: false, // Disable periodic refetching
    staleTime: 10000, // Data is considered fresh for 10 seconds
    retry: 3, // Retry failed requests up to 3 times
    retryDelay: 1000, // Wait 1 second between retries
  });

  return response;
};

export default useProducts;
