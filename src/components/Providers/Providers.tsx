"use client";

import { trpc } from "@/app/_trpc/Client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { PropsWithChildren, useState } from "react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "/api/trpc",
        }),
      ],
    })
  );

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </trpc.Provider>
    </ThemeProvider>
  );
};

export default Providers;
