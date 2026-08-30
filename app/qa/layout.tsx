import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Qualidade e transparência",
  "Consulte as fases de QA aplicadas ao site New Journey.",
  "/qa/",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
