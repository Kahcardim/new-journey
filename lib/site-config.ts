export const siteConfig = {
  name: "New Journey",
  tagline: "Orientação que transforma",
  description:
    "Orientação humana e segura para pessoas e famílias que buscam caminhos para o cuidado em dependência de álcool e outras drogas.",
  region: "São Paulo, Grande São Paulo e Campinas",
  // Substitua pelo número real, apenas dígitos: país + DDD + número.
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999",
  // Campos preparados para domínio, Google Analytics 4 e Search Console.
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://new-journey-orientacao.kauancardim134.chatgpt.site",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  googleSiteVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappUrl = whatsappUrl(
  "Olá, encontrei a New Journey e gostaria de receber uma orientação inicial.",
);

