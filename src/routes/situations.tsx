import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/situations")({
  beforeLoad: () => {
    throw redirect({ to: "/resources" });
  },
  component: () => null,
});
