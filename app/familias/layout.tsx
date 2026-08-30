import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Apoio à família",
  "Orientação acolhedora à família antes, durante e depois de um possível encaminhamento.",
  "/familias/",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
