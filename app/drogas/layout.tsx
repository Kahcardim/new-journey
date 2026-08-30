import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Cocaína, crack e outras drogas",
  "Orientação acolhedora sobre uso de cocaína, crack, medicamentos e múltiplas substâncias.",
  "/drogas/",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
