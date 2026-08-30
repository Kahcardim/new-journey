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
export default function QA(){return <SiteShell><section className="page-hero"><span className="kicker kicker-light">QUALIDADE TRANSPARENTE</span><h1>QA faz parte do produto, não apenas do final.</h1><p>Esta página registra as fases que protegem a experiência, a conversão e a segurança da New Journey em cada publicação.</p></section><section className="section-pad content-page"><div className="qa-summary"><div><strong>12</strong><span>fases de qualidade</span></div><p>Estratégia inspirada na prática profissional de Quality Assurance: prevenção, evidência, cobertura de risco e regressão contínua.</p></div><div className="qa-grid">{phases.map(([n,title,text])=><article key={n}><span>{n}</span><div><h2>{title}</h2><p>{text}</p></div><Icon name="check"/></article>)}</div><section className="test-matrix"><h2>Matriz mínima antes de publicar</h2><div><span>Fluxo principal</span><b>Agendamento → WhatsApp</b></div><div><span>Viewport crítico</span><b>360 px até 1440 px</b></div><div><span>Acessibilidade</span><b>WCAG 2.2 AA como referência</b></div><div><span>Privacidade</span><b>Nenhum dado sensível armazenado no site</b></div><div><span>Regressão</span><b>Home, menu, formulários e links</b></div></section><div className="legal-callout"><Icon name="shield"/><div><h3>Estado desta versão</h3><p>Os testes automatizados e manuais executados para cada entrega serão documentados no README e no histórico do repositório público.</p></div></div></section></SiteShell>}

