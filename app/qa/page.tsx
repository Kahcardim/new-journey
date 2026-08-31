import Link from "next/link";
import { Icon } from "@/components/Icons";
import { SiteShell } from "@/components/SiteShell";

const phases=[
  ["01","Requisitos e regras de negócio","Rastreabilidade entre pedido, fluxo, critérios de aceite e restrições legais."],
  ["02","Testes funcionais","Menus, links, seletores, validações, agendamento e composição da mensagem do WhatsApp."],
  ["03","Interface e experiência","Hierarquia, consistência, legibilidade, confiança, ausência de cortes e clareza dos CTAs."],
  ["04","Responsividade","Celular, tablet e desktop; orientações, larguras, zoom e ausência de rolagem horizontal."],
  ["05","Acessibilidade","Teclado, foco visível, contraste, texto ampliado, semântica, rótulos e leitores de tela."],
  ["06","Compatibilidade","Chrome, Edge, Firefox e Safari; Android e iOS nas versões atuais."],
  ["07","Performance","Peso de imagens, carregamento, estabilidade visual e Core Web Vitals."],
  ["08","SEO técnico","Títulos, descrições, headings, canonical, indexação, sitemap e dados estruturados."],
  ["09","Segurança e LGPD","Minimização de dados, consentimento, links externos, exposição de segredos e conteúdo sensível."],
  ["10","Regressão","Reexecução dos fluxos críticos após cada mudança para evitar quebra do que já funcionava."],
  ["11","Aceitação","Validação dos critérios pelo responsável do projeto antes de publicar."],
  ["12","Produção","Smoke test, métricas, conversões, erros, Search Console e plano de reversão."],
];

export default function QA(){return <SiteShell>
  <section className="page-hero">
    <span className="kicker kicker-light">TRANSPARÊNCIA E QUALIDADE</span>
    <h1>Qualidade faz parte da experiência desde o primeiro acesso.</h1>
    <p>Testamos o site para reduzir erros, proteger dados, manter acessibilidade e garantir que os caminhos de contato funcionem em diferentes dispositivos.</p>
    <div className="page-primary-actions">
      <a className="btn btn-mint" href="#detalhes">Ver como validamos <Icon name="arrow"/></a>
      <Link className="btn btn-outline-light" href="/agendamento">Falar com a New Journey</Link>
    </div>
  </section>

  <section className="priority-panel" aria-labelledby="qualidade-resumo">
    <div className="priority-panel-head"><div><span className="kicker">O QUE ISSO SIGNIFICA PARA VOCÊ</span><h2 id="qualidade-resumo">Menos atrito, mais confiança.</h2></div><p>A camada técnica existe para que o usuário encontre informação, navegue com clareza e consiga pedir ajuda sem enfrentar erros desnecessários.</p></div>
    <div className="priority-grid">
      <article><Icon name="check"/><h3>Contato funcionando</h3><p>Fluxos críticos como agendamento e WhatsApp são validados antes de publicar.</p></article>
      <article><Icon name="shield"/><h3>Privacidade</h3><p>O site evita armazenar dados sensíveis e deixa claro quando informações seguem para o WhatsApp.</p></article>
      <article><Icon name="heart"/><h3>Acessibilidade</h3><p>Teclado, contraste, zoom, leitura e preferências do dispositivo fazem parte da validação.</p></article>
      <article><Icon name="compass"/><h3>Responsividade</h3><p>Celular, tablet e desktop são testados para evitar cortes e perda de conteúdo.</p></article>
    </div>
  </section>

  <section id="detalhes" className="section-pad content-page">
    <div className="qa-summary"><div><strong>12</strong><span>fases de qualidade</span></div><p>Para quem quer ver os detalhes técnicos, mantemos uma estratégia completa de prevenção, evidência, cobertura de risco e regressão contínua.</p></div>
    <div className="qa-grid">{phases.map(([n,title,text])=><article key={n}><span>{n}</span><div><h2>{title}</h2><p>{text}</p></div><Icon name="check"/></article>)}</div>
    <section className="test-matrix"><h2>Matriz mínima antes de publicar</h2><div><span>Fluxo principal</span><b>Agendamento → WhatsApp</b></div><div><span>Viewport crítico</span><b>360 px até 1440 px</b></div><div><span>Acessibilidade</span><b>WCAG 2.2 AA como referência</b></div><div><span>Privacidade</span><b>Nenhum dado sensível armazenado no site</b></div><div><span>Regressão</span><b>Home, menu, formulários e links</b></div></section>
    <div className="legal-callout"><Icon name="shield"/><div><h3>Estado desta versão</h3><p>Os testes automatizados e manuais executados para cada entrega serão documentados no README e no histórico do repositório público.</p></div></div>
  </section>
</SiteShell>}
