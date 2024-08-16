import { Outlet } from "@tanstack/react-router";
import { Navbar } from "./components/Navbar";
import { useThemeContext } from "./utils/useTheme";

export const Root = () => {
  const { theme } = useThemeContext();

  console.log("theme", theme);

  return (
    <main data-theme={theme}>
      <Navbar />
      <Outlet />
    </main>
  );
};
