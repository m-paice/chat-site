import { createContext } from "react";

export const DarkContext = createContext({
  dark: true,
  toggleDark: () => {}
});
