import { createFileRoute } from "@tanstack/react-router";
import { Compil } from "../../components/Compil";

export const Route = createFileRoute("/compil/$compilId")({
  component: () => <Compil />,
});