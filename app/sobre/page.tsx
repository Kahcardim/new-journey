import "./sobre.css";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { SiteShell } from "@/components/SiteShell";

const pillars = [
  ["heart","Acolhimento","Escuta respeitosa, sem reduzir a pessoa ao uso de substâncias.","Quero conversar sem julgamento","/agendamento"],
  ["compass","Clareza","Informação compreensível para decisões menos impulsivas.","Quero entender os caminhos","/tratamentos"],
  ["shield","Responsabilidade","Sem diagnóstico pelo site, promessas de cura ou pressão comercial.","Conhecer nossos limites","#papel"],
  ["family","Continuidade","Amparo à família também depois do encaminhamento.","Ver apoio para famílias","/familias"],
];

export default function Sobre(){
  return <SiteShell>
    <section className="page-hero about-hero">
      <div className="about-hero-inner">
        <span className="kicker kicker-light">SOBRE A NEW JOURNEY</span>
        <h1>Uma orientação humana entre a dúvida e a decisão.</h1>
        <p>Nascemos para ajudar famílias que não sabem por onde começar a encontrar informação, critérios e apoio antes de escolher um caminho de cuidado.</p>
        <div className="about-hero-actions">
          <Link className="btn btn-mint" href="/agendamento">Conversar com a New Journey <Icon name="arrow"/></Link>
          <a className="btn btn-outline-light" href="#pilares">Como podemos ajudar</a>
        </div>
      </div>
    </section>

    <section id="pilares" className="priority-panel priority-panel-primary" aria-labelledby="pilares-titulo">
      <div className="priority-panel-head"><div><span className="kicker">O QUE VOCÊ ENCONTRA AQUI</span><h2 id="pilares-titulo">Quatro compromissos que orientam cada conversa.</h2></div><p>Estes pontos resumem o que a New Journey oferece na prática e permitem seguir diretamente para o próximo passo mais útil.</p></div>
      <div className="priority-grid priority-grid-actionable">
        {pillars.map(([icon,title,text,cta,href])=><article className="priority-action-card" key={title}><Icon name={icon} size={28}/><h3>{title}</h3><p>{text}</p>{href.startsWith("#")?<a className="priority-card-cta" href={href}>{cta} <Icon name="arrow"/></a>:<Link className="priority-card-cta" href={href}>{cta} <Icon name="arrow"/></Link>}</article>)}
      </div>
      <div className="priority-panel-actions"><Link className="btn btn-dark" href="/agendamento">Falar com a New Journey <Icon name="arrow"/></Link></div>
    </section>

    <section className="section-pad content-page about-content">
      <div id="papel" className="about-statement about-section-anchor">
        <span className="kicker">NOSSO PAPEL</span>
        <h2>Não somos uma clínica, um ranking pago ou uma promessa de cura.</h2>
        <p>Funcionamos como guia de jornada: escutamos o contexto, explicamos possibilidades e, quando faz sentido, apresentamos opções compatíveis. A família mantém o poder de decisão em todas as etapas.</p>
      </div>

      <section id="modelo" className="transparency about-model about-section-anchor">
        <h2>Como o modelo funciona financeiramente</h2>
        <p>A conversa de orientação não tem custo de consultoria para a família nesta etapa. Clínicas parceiras não pagam mensalidade: a remuneração comercial da New Journey ocorre somente quando há conversão e internação, conforme contrato. Essa relação deve ser transparente e não substitui a avaliação de adequação do serviço.</p>
        <small>O modelo contratual e as regras de remuneração devem passar por validação jurídica antes da operação definitiva.</small>
      </section>

      <div className="center-cta about-final-cta">
        <h2>Vamos entender juntos o próximo passo.</h2>
        <p>Uma conversa inicial pode organizar dúvidas antes de qualquer decisão.</p>
        <Link className="btn btn-dark" href="/agendamento">Falar com a New Journey <Icon name="arrow"/></Link>
      </div>
    </section>
  </SiteShell>
}
