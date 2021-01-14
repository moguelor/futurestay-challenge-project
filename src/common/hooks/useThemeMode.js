import { useState, useEffect } from "react";

const useThemeMode = () => {
  const themeOS =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "default";

  const localTheme = window.localStorage.getItem("theme");
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    themeOS && !localTheme
      ? setTheme(themeOS)
      : localTheme && setTheme(localTheme);
  }, []);

  const toggleTheme = () => {
    if (theme === "default") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
      return;
    }

    window.localStorage.setItem("theme", "default");
    setTheme("default");
  };

  return [theme, toggleTheme];
};

export default useThemeMode;
