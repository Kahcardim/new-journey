import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qualidade e QA | New Journey",
  description: "Área técnica interna com critérios e fases de validação do projeto New Journey.",
  robots: { index: false, follow: false, noarchive: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
