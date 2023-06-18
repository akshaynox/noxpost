"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface QueryWrapperProps {
  children?: ReactNode;
}

const queryClient = new QueryClient();
const QueryWrapper: React.FC<QueryWrapperProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default QueryWrapper;
