import Link from "next/link";
import { Icon } from "@/components/Icons";
import { SiteShell } from "@/components/SiteShell";

const criteria=["Perfil do paciente e público atendido","Reputação e referências verificáveis","Localização e acesso da família","Disponibilidade real de acolhimento","Estrutura e equipe informadas","Viabilidade financeira da família"];

const steps = [
  ["01","Reunião inicial","Alinhamento de público, capacidade, processo e responsabilidades.","Quero apresentar minha clínica"],
  ["02","Homologação","Coleta de dados, critérios mínimos e validação documental.","Quero entender os critérios"],
  ["03","Contrato e cadastro","Regras de rastreabilidade, conversão e remuneração transparentes.","Quero conhecer o modelo"],
  ["04","Projeto piloto","Acompanhamento dos primeiros encaminhamentos e melhoria contínua.","Quero iniciar uma conversa"],
];

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

  <section id="como-funciona" className="priority-panel priority-panel-primary" aria-labelledby="parceria-titulo">
    <div className="priority-panel-head"><div><span className="kicker">COMO FUNCIONA</span><h2 id="parceria-titulo">Uma parceria com processo claro.</h2></div><p>Estas são as etapas mais importantes para uma clínica que quer trabalhar com a New Journey. Você pode iniciar a conversa a partir de qualquer uma delas.</p></div>
    <div className="priority-grid priority-grid-actionable">
      {steps.map(([n,title,text,cta])=><article className="priority-action-card" key={title}><span>{n}</span><h3>{title}</h3><p>{text}</p><Link className="priority-card-cta" href="/agendamento">{cta} <Icon name="arrow"/></Link></article>)}
    </div>
    <div className="priority-panel-actions"><Link className="btn btn-dark" href="/agendamento">Agendar reunião de parceria <Icon name="arrow"/></Link></div>
  </section>

  <section className="section-pad content-page">
    <div className="section-heading"><span className="kicker">CURADORIA</span><h2>O que avaliamos antes de apresentar uma opção.</h2><p>Critérios visíveis reduzem improviso e ajudam a proteger família, paciente e clínica.</p></div>
    <div className="criteria-grid">{criteria.map((item,i)=><div key={item}><span>0{i+1}</span><p>{item}</p></div>)}</div>
    <div className="partner-status"><div><span className="kicker">CATÁLOGO EM PREPARAÇÃO</span><h2>Clínicas parceiras serão exibidas após homologação.</h2><p>O seletor da página inicial já está preparado para receber nome, região, público, estrutura, disponibilidade e diferenciais de cada parceira.</p></div><span className="status-pill">0 clínicas publicadas</span></div>
    <div className="legal-callout"><Icon name="shield"/><div><h3>Relação transparente</h3><p>O contrato de tratamento é realizado diretamente entre clínica e paciente ou família. A New Journey não interfere na decisão clínica e não garante internação, permanência ou resultado terapêutico.</p></div></div>
  </section>
</SiteShell>}
