import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Caminhos de cuidado",
  "Conheça possibilidades de cuidado e entenda internação voluntária e involuntária com responsabilidade.",
  "/tratamentos/",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
