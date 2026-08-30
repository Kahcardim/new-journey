import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Problemas relacionados ao álcool",
  "Sinais de uso problemático de álcool e orientação para pessoas e famílias em São Paulo.",
  "/alcool/",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
