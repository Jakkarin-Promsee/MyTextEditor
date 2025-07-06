import { ThemeToggle } from "./ThemeToggle";

type Props = { className?: string };

export const Navbar = ({ className = "" }: Props) => {
  return (
    <nav
      className={`navbar-container py-4 shadow-md animate-colors ${className}`}
    >
      <div className="flex justify-between items-center min-w-full mx-auto px-3 ">
        <h1 className="text-xl font-bold">Medium Editor</h1>

        <ul className="flex gap-6 ">
          <li className="navbar-menu text-muted-foreground">Home</li>
          <li className="navbar-menu">About</li>
          <li className="navbar-menu">Contact</li>
        </ul>

        <ThemeToggle></ThemeToggle>
      </div>
    </nav>
  );
};
