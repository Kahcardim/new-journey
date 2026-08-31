import "./sobre.css";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { SiteShell } from "@/components/SiteShell";

export default function Sobre(){
  return <SiteShell>
    <nav className="about-local-nav" aria-label="Navegação da página Sobre">
      <div className="about-local-nav-inner">
        <strong>Sobre a New Journey</strong>
        <div className="about-local-links">
          <a href="#papel">Nosso papel</a>
          <a href="#valores">Valores</a>
          <a href="#modelo">Como funciona</a>
        </div>
        <Link className="btn btn-dark about-local-cta" href="/agendamento">Falar conosco <Icon name="arrow"/></Link>
      </div>
    </nav>

    <section className="page-hero about-hero">
      <div className="about-hero-inner">
        <span className="kicker kicker-light">SOBRE A NEW JOURNEY</span>
        <h1>Uma orientação humana entre a dúvida e a decisão.</h1>
        <p>Nascemos para ajudar famílias que não sabem por onde começar a encontrar informação, critérios e apoio antes de escolher um caminho de cuidado.</p>
        <div className="about-hero-actions">
          <Link className="btn btn-mint" href="/agendamento">Conversar com a New Journey <Icon name="arrow"/></Link>
          <a className="btn btn-outline-light" href="#papel">Conhecer nosso papel</a>
        </div>
      </div>
    </section>

    <section className="section-pad content-page about-content">
      <div id="papel" className="about-statement about-section-anchor">
        <span className="kicker">NOSSO PAPEL</span>
        <h2>Não somos uma clínica, um ranking pago ou uma promessa de cura.</h2>
        <p>Funcionamos como guia de jornada: escutamos o contexto, explicamos possibilidades e, quando faz sentido, apresentamos opções compatíveis. A família mantém o poder de decisão em todas as etapas.</p>
      </div>

      <div id="valores" className="values-grid about-values about-section-anchor">
        <article><Icon name="heart" size={28}/><h3>Acolhimento</h3><p>Escuta respeitosa, sem reduzir a pessoa ao uso de substâncias.</p></article>
        <article><Icon name="compass" size={28}/><h3>Clareza</h3><p>Informação compreensível para decisões menos impulsivas.</p></article>
        <article><Icon name="shield" size={28}/><h3>Responsabilidade</h3><p>Sem diagnóstico pelo site, promessas de cura ou pressão comercial.</p></article>
        <article><Icon name="family" size={28}/><h3>Continuidade</h3><p>Amparo à família também depois do encaminhamento.</p></article>
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
