import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Quando procurar ajuda",
  "Sinais que podem indicar a necessidade de orientação para uso de álcool e outras drogas.",
  "/quando-procurar-ajuda/",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
