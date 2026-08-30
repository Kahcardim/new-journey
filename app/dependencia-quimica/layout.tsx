import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Dependência química",
  "Entenda dependência química, fatores de risco e possibilidades de cuidado sem estigma.",
  "/dependencia-quimica/",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
