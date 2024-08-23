import { Navigate, Outlet, useRouterState } from "@tanstack/react-router";
import { Navbar } from "./components/Navbar";
import { useThemeContext } from "./utils/useTheme";
import { useAccount } from "./utils/useAccount";
import { Devtools } from "./components/Devtools";
import { useShowRerender } from "./utils/useShowRerender";

export const Root = () => {
  const { theme } = useThemeContext();
  const router = useRouterState();
  const { user, loading } = useAccount();
  const { showRerender } = useShowRerender();

  const isSignInPage = router.location.pathname.includes("sign-in");

  if (!loading && !user && !isSignInPage) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <main style={{ backgroundColor: theme }} data-rerendered={showRerender}>
      {!isSignInPage && <Navbar />}
      <Outlet />
      <Devtools />
    </main>
  );
};
