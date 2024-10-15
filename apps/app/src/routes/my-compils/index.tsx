import { createFileRoute } from "@tanstack/react-router";
import { MyCompils } from "../../components/other/MyCompils";

export const Route = createFileRoute("/my-compils/")({
  component: () => <MyCompils />,
});
