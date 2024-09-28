import { createFileRoute } from "@tanstack/react-router";
import { Compils } from "../../components/Compils";

export const Route = createFileRoute("/compils/")({
  component: () => <Compils title="Compils" />,
});
