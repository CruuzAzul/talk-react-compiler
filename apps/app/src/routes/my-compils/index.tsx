import { createFileRoute } from "@tanstack/react-router";
import { MyCompils } from "../../components/MyCompils";

export const Route = createFileRoute("/my-compils/")({
  component: () => <MyCompils />,
});
