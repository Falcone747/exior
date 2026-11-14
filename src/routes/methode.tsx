import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/methode")({
  beforeLoad: () => {
    throw redirect({ to: "/method" });
  },
  component: () => null,
});
