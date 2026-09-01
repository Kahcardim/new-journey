import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/agendamento", "/tratamentos", "/familias", "/clinicas", "/sobre", "/privacidade", "/quando-procurar-ajuda", "/dependencia-quimica", "/alcool", "/drogas", "/perguntas-frequentes"].map(route=>({url:`${siteConfig.siteUrl}${route}`,lastModified:new Date(),changeFrequency:route===""?"weekly":"monthly",priority:route===""?1:route==="/agendamento"?.9:.7}));
}
