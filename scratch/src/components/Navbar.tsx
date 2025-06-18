import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 shadow-md bg-white dark:bg-gray-900 dark:text-white">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Medium Editor</h1>
        <ThemeToggle></ThemeToggle>
      </div>
    </nav>
  );
};
