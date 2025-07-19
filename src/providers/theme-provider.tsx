"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Componente wrapper para prover tema com suporte a troca dinâmica
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
