import Link from "next/link";
import { Icon } from "@/components/Icons";
import { SiteShell } from "@/components/SiteShell";

const paths = [
  ["CAPS AD e rede pública","Acompanhamento territorial e gratuito pelo SUS, com equipe multiprofissional."],
  ["Atendimento ambulatorial","Consultas e terapias sem afastamento integral da rotina, quando há segurança e adesão."],
  ["Acolhimento residencial","Ambiente protegido e rotina estruturada, conforme modalidade e indicação."],
  ["Internação clínica","Pode ser considerada quando cuidado intensivo é necessário, sempre com avaliação médica."],
];

export default function Tratamentos(){return <SiteShell>
  <section className="page-hero">
    <span className="kicker kicker-light">ENTENDER ANTES DE DECIDIR</span>
    <h1>Tratamento não é uma escolha única para todos.</h1>
    <p>A necessidade deve ser avaliada por profissionais habilitados. Conhecer as possibilidades ajuda a família a fazer perguntas melhores e evitar decisões tomadas somente pelo medo.</p>
    <div className="page-primary-actions">
      <Link className="btn btn-mint" href="/agendamento">Falar com um orientador <Icon name="arrow"/></Link>
      <a className="btn btn-outline-light" href="#caminhos">Ver caminhos de cuidado</a>
    </div>
  </section>

  <section id="caminhos" className="priority-panel" aria-labelledby="caminhos-titulo">
    <div className="priority-panel-head"><div><span className="kicker">CAMINHOS DE CUIDADO</span><h2 id="caminhos-titulo">Comece pelas possibilidades.</h2></div><p>Essas opções podem fazer parte de um plano individual. A conversa inicial ajuda a organizar qual delas vale investigar primeiro.</p></div>
    <div className="priority-grid">{paths.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    <div className="priority-panel-actions"><Link className="btn btn-dark" href="/agendamento">Quero entender meu caso <Icon name="arrow"/></Link></div>
  </section>

  <section className="section-pad content-page">
    <div className="section-heading"><span className="kicker">TIPOS DE INTERNAÇÃO</span><h2>Voluntária e involuntária não são a mesma coisa.</h2><p>A internação é uma possibilidade entre outras e depende de critérios clínicos e legais.</p></div>
    <section className="admission-compare"><div><span className="kicker">INTERNAÇÃO VOLUNTÁRIA</span><h2>Com consentimento</h2><p>A pessoa concorda com a internação e formaliza sua vontade. A alta pode ser solicitada pelo paciente ou determinada pelo médico responsável, conforme o caso.</p></div><div><span className="kicker">INTERNAÇÃO INVOLUNTÁRIA</span><h2>Sem consentimento</h2><p>É uma medida excepcional. Depende de avaliação e formalização médica, pedido de familiar ou responsável e comunicação aos órgãos previstos em lei. Não é decidida pelo site ou pelo captador.</p></div></section>
    <div className="legal-callout"><Icon name="shield" size={26}/><div><h3>Importante</h3><p>A New Journey oferece orientação e curadoria; não realiza diagnóstico, prescrição, remoção ou decisão de internação. Regras legais e clínicas devem ser confirmadas com profissionais e instituições habilitadas.</p></div></div>
    <div className="center-cta"><h2>Não sabe qual caminho considerar?</h2><p>Uma conversa inicial pode organizar a situação sem compromisso de contratação.</p><Link className="btn btn-dark" href="/agendamento">Agendar orientação <Icon name="arrow"/></Link></div>
  </section>
</SiteShell>}
