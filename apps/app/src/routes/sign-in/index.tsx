import { createFileRoute } from "@tanstack/react-router";
import { Login } from "../../components/other/Login";

export const Route = createFileRoute("/sign-in/")({
  component: () => <Login />,
});
