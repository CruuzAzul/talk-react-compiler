import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/reset.css";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.ts";
import { ThemeProvider } from "./utils/useTheme.tsx";
import { AccountProvider } from "./utils/useAccount.tsx";
import { ShowRerenderProvider } from "./utils/useShowRerender.tsx";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AccountProvider>
        <ShowRerenderProvider>
          <RouterProvider router={router} />
        </ShowRerenderProvider>
      </AccountProvider>
    </ThemeProvider>
  </React.StrictMode>
);
