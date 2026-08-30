import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Política de Privacidade",
  "Saiba como a New Journey trata informações enviadas pelo site e pelo WhatsApp.",
  "/privacidade/",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
