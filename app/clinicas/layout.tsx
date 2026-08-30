import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Clínicas parceiras",
  "Entenda os critérios de curadoria e a estrutura preparada para futuras clínicas homologadas.",
  "/clinicas/",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
