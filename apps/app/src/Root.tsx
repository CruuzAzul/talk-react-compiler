import { Navigate, Outlet, useRouterState } from "@tanstack/react-router";
import { Navbar } from "./components/Navbar";
import { useThemeContext } from "./utils/useTheme";
import { useAccount } from "./utils/useAccount";

export const Root = () => {
  const { theme } = useThemeContext();
  const router = useRouterState();
  const { user, loading } = useAccount();

  const isSignInPage = router.location.pathname.includes("sign-in");

  if (!loading && !user && !isSignInPage) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <main data-theme={theme}>
      {!isSignInPage && <Navbar />}
      <Outlet />
    </main>
  );
};
