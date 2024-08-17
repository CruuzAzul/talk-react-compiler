import { createFileRoute } from "@tanstack/react-router";
import { Login } from "../../components/Login";

export const Route = createFileRoute("/sign-in/")({
  component: () => <Login />,
});
