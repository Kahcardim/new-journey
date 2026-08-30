"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { defaultWhatsappUrl, siteConfig, whatsappUrl } from "@/lib/site-config";
import { Icon } from "./Icons";

const nav = [
  ["/", "Início"],
  ["/tratamentos", "Entender o tratamento"],
  ["/familias", "Para famílias"],
  ["/clinicas", "Clínicas parceiras"],
  ["/sobre", "Sobre nós"],
  ["/qa", "Qualidade"],
];

export function AccessibilityBar() {
  const [contrast, setContrast] = useState(false);
  const [fontScale, setFontScale] = useState(1);
  useEffect(() => {
    document.documentElement.dataset.contrast = contrast ? "high" : "normal";
    document.documentElement.style.setProperty("--font-scale", String(fontScale));
  }, [contrast, fontScale]);
  return <div className="a11y-bar" aria-label="Ferramentas de acessibilidade">
    <span>Acessibilidade</span>
    <button onClick={() => setFontScale(Math.min(1.2, fontScale + .1))} aria-label="Aumentar texto"><Icon name="text" size={15}/> A+</button>
    <button onClick={() => setFontScale(Math.max(.9, fontScale - .1))} aria-label="Diminuir texto">A−</button>
    <button onClick={() => setContrast(!contrast)} aria-pressed={contrast}><Icon name="eye" size={15}/> Alto contraste</button>
  </div>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <AccessibilityBar />
    <header className="site-header">
      <Link className="brand" href="/" aria-label="New Journey, página inicial">
        <span className="brand-mark" aria-hidden="true">NJ</span>
        <span><strong>NEW JOURNEY</strong><small>{siteConfig.tagline}</small></span>
      </Link>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav"><Icon name={open ? "close" : "menu"} size={25}/><span className="sr-only">Menu</span></button>
      <nav id="main-nav" className={open ? "main-nav is-open" : "main-nav"} aria-label="Navegação principal">
        {nav.map(([href,label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link className="nav-schedule" href="/agendamento">Agendar conversa</Link>
      </nav>
    </header>
  </>;
}

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-main">
      <div><Link className="brand brand-light" href="/"><span className="brand-mark">NJ</span><span><strong>NEW JOURNEY</strong><small>{siteConfig.tagline}</small></span></Link><p>Orientação responsável para decisões mais seguras.</p></div>
      <div><h2>Navegação</h2><Link href="/tratamentos">Tratamentos</Link><Link href="/familias">Para famílias</Link><Link href="/clinicas">Clínicas parceiras</Link><Link href="/qa">Qualidade e QA</Link></div>
      <div><h2>Atendimento</h2><p>24 horas, todos os dias</p><p>{siteConfig.region}</p><a className="footer-whatsapp" href={defaultWhatsappUrl} target="_blank" rel="noreferrer">Falar pelo WhatsApp</a></div>
    </div>
    <div className="footer-legal"><span>© 2026 New Journey.</span><Link href="/privacidade">Privacidade e LGPD</Link><span>Em risco imediato, ligue 192 ou 190.</span></div>
  </footer>;
}

export function WhatsAppFloat() {
  function trackSource(event: React.MouseEvent<HTMLAnchorElement>) {
    const source = window.location.pathname.replaceAll("/", " ").trim() || "página inicial";
    event.currentTarget.href = whatsappUrl(`Olá, encontrei a New Journey pela página ${source} e gostaria de receber uma orientação inicial.`);
  }
  return <a className="whatsapp-float" href={defaultWhatsappUrl} onClick={trackSource} data-conversion="whatsapp-float" target="_blank" rel="noreferrer" aria-label="Falar com a New Journey pelo WhatsApp"><Icon name="message" size={24}/><span>Falar agora</span></a>;
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <><Header/><main id="conteudo">{children}</main><Footer/><WhatsAppFloat/></>;
}
