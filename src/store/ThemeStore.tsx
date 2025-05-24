import { create } from "zustand";
import { Dark, Light } from "../styles/Themes";

interface ThemeStore {
  theme: "light" | "dark";
  themeStyle: typeof Light | typeof Dark;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "dark",
  themeStyle: Dark,
  toggleTheme: () => {
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    }));
    set((state) => ({
      themeStyle: state.theme === "light" ? Light : Dark,
    }));
  },
}));
