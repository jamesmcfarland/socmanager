import { ReactNode } from "react";
import ToasterProvider from "./ToasterProvider";
import ThemeProvider from "./ThemeProvider";
import ClerkProvider from "./ClerkProvider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ToasterProvider>
      <ThemeProvider>
        <ClerkProvider>{children}</ClerkProvider>
      </ThemeProvider>
    </ToasterProvider>
  );
};

export default Providers;
