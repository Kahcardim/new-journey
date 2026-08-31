import Link from "next/link";
import { Icon } from "@/components/Icons";
import { SiteShell } from "@/components/SiteShell";

const criteria=["Perfil do paciente e público atendido","Reputação e referências verificáveis","Localização e acesso da família","Disponibilidade real de acolhimento","Estrutura e equipe informadas","Viabilidade financeira da família"];

export default function Clinicas(){return <SiteShell>
  <section className="page-hero">
    <span className="kicker kicker-light">REDE PARCEIRA</span>
    <h1>Parcerias baseadas em critérios, não apenas em vagas.</h1>
    <p>A New Journey aproxima famílias com contexto e intenção real de clínicas previamente avaliadas, com regras transparentes e acompanhamento do encaminhamento.</p>
    <div className="page-primary-actions">
      <Link className="btn btn-mint" href="/agendamento">Quero apresentar minha clínica <Icon name="arrow"/></Link>
      <a className="btn btn-outline-light" href="#como-funciona">Como funciona a parceria</a>
    </div>
  </section>

  <section id="como-funciona" className="priority-panel" aria-labelledby="parceria-titulo">
    <div className="priority-panel-head"><div><span className="kicker">COMO FUNCIONA</span><h2 id="parceria-titulo">Uma parceria com processo claro.</h2></div><p>O foco é compatibilidade entre perfil, estrutura, disponibilidade e necessidade da família — não apenas geração de volume.</p></div>
    <div className="priority-grid">
      <article><span>01</span><h3>Reunião inicial</h3><p>Alinhamento de público, capacidade, processo e responsabilidades.</p></article>
      <article><span>02</span><h3>Homologação</h3><p>Coleta de dados, critérios mínimos e validação documental.</p></article>
      <article><span>03</span><h3>Contrato e cadastro</h3><p>Regras de rastreabilidade, conversão e remuneração transparentes.</p></article>
      <article><span>04</span><h3>Projeto piloto</h3><p>Acompanhamento dos primeiros encaminhamentos e melhoria contínua.</p></article>
    </div>
    <div className="priority-panel-actions"><Link className="btn btn-dark" href="/agendamento">Agendar reunião de parceria <Icon name="arrow"/></Link></div>
  </section>

  <section className="section-pad content-page">
    <div className="section-heading"><span className="kicker">CURADORIA</span><h2>O que avaliamos antes de apresentar uma opção.</h2><p>Critérios visíveis reduzem improviso e ajudam a proteger família, paciente e clínica.</p></div>
    <div className="criteria-grid">{criteria.map((item,i)=><div key={item}><span>0{i+1}</span><p>{item}</p></div>)}</div>
    <div className="partner-status"><div><span className="kicker">CATÁLOGO EM PREPARAÇÃO</span><h2>Clínicas parceiras serão exibidas após homologação.</h2><p>O seletor da página inicial já está preparado para receber nome, região, público, estrutura, disponibilidade e diferenciais de cada parceira.</p></div><span className="status-pill">0 clínicas publicadas</span></div>
    <div className="legal-callout"><Icon name="shield"/><div><h3>Relação transparente</h3><p>O contrato de tratamento é realizado diretamente entre clínica e paciente ou família. A New Journey não interfere na decisão clínica e não garante internação, permanência ou resultado terapêutico.</p></div></div>
    <div className="center-cta"><h2>Quer apresentar sua clínica?</h2><p>Agende uma reunião para conhecer o modelo de parceria e os critérios de homologação.</p><Link className="btn btn-dark" href="/agendamento">Agendar reunião de parceria <Icon name="arrow"/></Link></div>
  </section>
</SiteShell>}
