import { ThemeToggle } from "./ThemeToggle";

type Props = { className?: string };

export const Navbar = ({ className = "" }: Props) => {
  return (
    <nav className={`bg-white dark:bg-gray-900 shadow-md py-4 ${className}`}>
      <div className="min-w-full mx-auto px-3 flex justify-between items-center">
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
