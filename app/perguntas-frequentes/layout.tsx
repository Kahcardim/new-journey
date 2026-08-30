import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Perguntas frequentes",
  "Respostas sobre orientação, clínicas parceiras, internação e apoio familiar.",
  "/perguntas-frequentes/",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
