import { ReactNode } from "react";
import { Toaster } from "../ui/toaster";

const ToasterProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default ToasterProvider;
