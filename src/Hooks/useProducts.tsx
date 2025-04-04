import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProducts = () => {
  const response = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        return response.data.products; // Return the products directly
      } catch (error) {
        console.error("Error fetching products:", error);
        return []; // Return an empty array in case of an error
      }
    },
    refetchInterval: 3000,
    staleTime: 10000,
    // Uncomment and configure additional options as needed:
    // refetchIntervalInBackground: true,
    // retry: 6,
    // retryDelay: 5000,
    // gcTime: 5000,
    // select: (data) => data.data.data,
  });

  return response;
};

export default useProducts;
