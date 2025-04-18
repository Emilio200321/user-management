import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';
import { useEffect } from 'react';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    console.log(isDarkMode)
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-md text-sm hover:shadow"
    >
      {isDarkMode ? <Sun/> : <Moon />}
    </button>
  );
};

export default ThemeToggle;