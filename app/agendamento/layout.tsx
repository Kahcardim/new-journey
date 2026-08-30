import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Agendar conversa",
  "Solicite uma conversa 24 horas com a New Journey e organize o contexto antes de abrir o WhatsApp.",
  "/agendamento/",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
