"use client"

import { useEffect, useState } from "react";
import { Moon } from "lucide-react";
import { useTheme } from "next-themes";

type Theme = "light" | "dark";

const ThemeToggle: React.FC = () => {
  const { theme: NextTheme, setTheme: setNextTheme } = useTheme();

  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Check for stored theme preference in localStorage
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (savedTheme) {
      setTheme(savedTheme);
      setNextTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      const initialTheme: Theme = "light";
      setTheme(initialTheme);
      setNextTheme(initialTheme);
      document.documentElement.classList.add(initialTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
    setNextTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button onClick={toggleTheme} className="cursor-pointer px-2  !z-20">
      <Moon size={30} />
    </button>
  );
};

export default ThemeToggle;
