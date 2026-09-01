"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { defaultWhatsappUrl, siteConfig, whatsappUrl } from "@/lib/site-config";
import { Icon } from "./Icons";

const nav = [
  ["/", "Início"],
  ["/tratamentos", "Entender o tratamento"],
  ["/familias", "Para famílias"],
  ["/clinicas", "Clínicas parceiras"],
  ["/sobre", "Sobre nós"],
];

function setScrollSnapEnabled(enabled: boolean) {
  document.documentElement.classList.toggle("scroll-snap-enabled", enabled);
}

function scrollToDocumentTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function ScrollBehaviorManager() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Ao entrar em qualquer rota, o snap fica desligado para o navegador
    // respeitar o topo da página em vez de saltar para o primeiro card.
    setScrollSnapEnabled(false);

    if (!window.location.hash) {
      scrollToDocumentTop();
      const frame1 = window.requestAnimationFrame(() => {
        scrollToDocumentTop();
        window.requestAnimationFrame(scrollToDocumentTop);
      });
      const timeout1 = window.setTimeout(scrollToDocumentTop, 80);
      const timeout2 = window.setTimeout(scrollToDocumentTop, 220);

      const enableSnap = () => setScrollSnapEnabled(true);
      const enableSnapFromKeyboard = (event: KeyboardEvent) => {
        if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", " "].includes(event.key)) enableSnap();
      };

      // O snap só passa a existir depois de uma ação real de navegação do usuário.
      window.addEventListener("wheel", enableSnap, { once: true, passive: true });
      window.addEventListener("touchmove", enableSnap, { once: true, passive: true });
      window.addEventListener("keydown", enableSnapFromKeyboard, { once: true });

      return () => {
        window.cancelAnimationFrame(frame1);
        window.clearTimeout(timeout1);
        window.clearTimeout(timeout2);
        window.removeEventListener("wheel", enableSnap);
        window.removeEventListener("touchmove", enableSnap);
        window.removeEventListener("keydown", enableSnapFromKeyboard);
      };
    }

    return () => setScrollSnapEnabled(false);
  }, [pathname]);

  return null;
}

function resetBeforeNavigation() {
  if (typeof window === "undefined") return;
  setScrollSnapEnabled(false);
  scrollToDocumentTop();
}

export function Header() {
  const [open, setOpen] = useState(false);
  function handleNavigation() {
    setOpen(false);
    resetBeforeNavigation();
  }

  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="site-header">
      <Link className="brand" href="/" aria-label="New Journey, página inicial" onClick={resetBeforeNavigation}>
        <span className="brand-mark" aria-hidden="true">NJ</span>
        <span><strong>NEW JOURNEY</strong><small>{siteConfig.tagline}</small></span>
      </Link>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav" aria-label={open ? "Fechar menu" : "Abrir menu"}><Icon name={open ? "close" : "menu"} size={25}/><span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span></button>
      <nav id="main-nav" className={open ? "main-nav is-open" : "main-nav"} aria-label="Navegação principal">
        {nav.map(([href,label]) => <Link key={href} href={href} onClick={handleNavigation}>{label}</Link>)}
        <Link className="nav-schedule" href="/agendamento" onClick={handleNavigation}>Agendar conversa</Link>
      </nav>
    </header>
  </>;
}

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-main">
      <div><Link className="brand brand-light" href="/" onClick={resetBeforeNavigation}><span className="brand-mark">NJ</span><span><strong>NEW JOURNEY</strong><small>{siteConfig.tagline}</small></span></Link><p>Orientação responsável para decisões mais seguras.</p></div>
      <div><h2>Navegação</h2><Link href="/tratamentos" onClick={resetBeforeNavigation}>Tratamentos</Link><Link href="/familias" onClick={resetBeforeNavigation}>Para famílias</Link><Link href="/clinicas" onClick={resetBeforeNavigation}>Clínicas parceiras</Link><Link href="/sobre" onClick={resetBeforeNavigation}>Sobre nós</Link></div>
      <div><h2>Atendimento</h2><p>24 horas, todos os dias</p><p>{siteConfig.region}</p><a className="footer-whatsapp" href={defaultWhatsappUrl} target="_blank" rel="noreferrer">Falar pelo WhatsApp</a></div>
    </div>
    <div className="footer-legal"><span>© 2026 New Journey.</span><Link href="/privacidade" onClick={resetBeforeNavigation}>Privacidade e LGPD</Link><span>Em risco imediato, ligue 192 ou 190.</span></div>
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
  const pathname = usePathname();
  const isSubpage = pathname !== "/";
  return <><ScrollBehaviorManager/><Header/><main id="conteudo" className={isSubpage ? "subpage-main" : undefined} tabIndex={-1}>{children}</main><Footer/><WhatsAppFloat/></>;
}
