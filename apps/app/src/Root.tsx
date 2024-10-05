import { Navigate, Outlet, useRouterState } from "@tanstack/react-router";
import { Navbar } from "./components/Navbar";
import { useThemeContext } from "./utils/useTheme";
import { useAccount } from "./utils/useAccount";
import { Devtools } from "./components/Devtools";
import { useShowRerender } from "./utils/useShowRerender";
import { contrast } from "./utils/contract";
import { hexToRgb } from "./utils/hexToRgb";

export const Root = () => {
  const { theme } = useThemeContext();
  const router = useRouterState();
  const { user, loading } = useAccount();
  const { showRerender } = useShowRerender();

  const isSignInPage = router.location.pathname.includes("sign-in");

  if (!loading && !user && !isSignInPage) {
    return <Navigate to="/sign-in" />;
  }

  const rgb = hexToRgb(theme) ?? [255, 255, 255];
  const textColor = contrast(rgb, [255, 255, 255]) > 4.5 ? "white" : "black";

  return (
    <main
      style={
        {
          backgroundColor: theme,
          "--color-text": textColor,
        } as React.CSSProperties
      }
      data-rerendered={showRerender}
    >
      {!isSignInPage && <Navbar />}
      <Outlet />
      <Devtools />
    </main>
  );
};
