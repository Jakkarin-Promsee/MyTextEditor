import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 shadow-md bg-white dark:bg-gray-900 dark:text-white">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary-light dark:text-primary-dark">
          Medium Editor
        </h1>
        <ul className="flex gap-6">
          <li className="hover:underline cursor-pointer muted-text">Home</li>
          <li className="hover:underline cursor-pointer muted">About</li>
          <li className="hover:underline cursor-pointer muted">Contact</li>
        </ul>
        <ThemeToggle></ThemeToggle>
      </div>
    </nav>
  );
};
