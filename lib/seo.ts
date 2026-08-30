import type { Metadata } from "next";

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | New Journey`,
      description,
      type: "website",
      locale: "pt_BR",
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | New Journey`,
      description,
    },
  };
}
