import { useTheme } from "../../hooks/useTheme";
import ToggleButton from "../ui/ToggleButton";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-center gap-3 animate-colors">
      <ToggleButton
        checked={theme === "dark"}
        onToggle={toggleTheme}
        iconOn={<MoonIcon className="text-theme-toggle-icon w-3 h-3" />}
        iconOff={<SunIcon className="text-theme-toggle-icon w-3 h-3" />}
      />
    </div>
  );
}
