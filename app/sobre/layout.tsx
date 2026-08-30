import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Sobre a New Journey",
  "Conheça o posicionamento, os limites e os critérios transparentes de orientação da New Journey.",
  "/sobre/",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
