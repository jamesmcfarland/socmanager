import { ReactNode } from "react";
import { ThemeProvider as _ThemeProvider } from "../theming/themeprovider";
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <_ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </_ThemeProvider>
  );
};

export default ThemeProvider;
