"use client";

import { SessionProvider } from "next-auth/react";
import { Provider as ReduxProvider } from "react-redux";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { store } from "@/RTK/store";
import { ReactNode } from "react";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ReduxProvider>
    </SessionProvider>
  );
}
