import { ReactNode } from "react";
import { ClerkProvider as _ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

const ClerkProvider = ({ children }: { children: ReactNode }) => {
  return (
    <_ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      {children}
    </_ClerkProvider>
  );
};

export default ClerkProvider;
