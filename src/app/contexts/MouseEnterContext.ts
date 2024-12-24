import { createContext, useContext } from "react";

export const MouseEnterContext = createContext<{
  isMouseEntered: boolean;
  setIsMouseEntered: React.Dispatch<React.SetStateAction<boolean>>;
} | undefined>(undefined);

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (!context) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context; // Returns both isMouseEntered and setIsMouseEntered
};
