import { ThemeToggle } from "./ThemeToggle";

type Props = { className?: string };

export const Navbar = ({ className = "" }: Props) => {
  return (
    <nav className={`py-4 bg-white dark:bg-gray-900 shadow-md ${className}`}>
      <div className="flex justify-between items-center min-w-full mx-auto px-3 ">
        <h1 className="text-xl font-bold">Medium Editor</h1>

        <ul className="flex gap-6 ">
          <li className="hover:underline cursor-pointer text-muted">Home</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>

        <ThemeToggle></ThemeToggle>
      </div>
    </nav>
  );
};
