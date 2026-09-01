import Link from "next/link";
import { Icon } from "@/components/Icons";
import { SiteShell } from "@/components/SiteShell";
import { PrimaryActionGrid, SubpageIntro } from "@/components/SubpageUI";

const pillars = [
  { icon:"heart", title:"Acolhimento", text:"Escuta respeitosa, sem reduzir a pessoa ao uso de substâncias.", cta:"Quero conversar sem julgamento", href:"/agendamento?origem=sobre&pilar=acolhimento" },
  { icon:"compass", title:"Clareza", text:"Informação compreensível para decisões menos impulsivas.", cta:"Quero entender os caminhos", href:"/tratamentos" },
  { icon:"shield", title:"Responsabilidade", text:"Sem diagnóstico pelo site, promessas de cura ou pressão comercial.", cta:"Conhecer nossos limites", href:"#papel" },
  { icon:"family", title:"Continuidade", text:"Amparo à família também depois do encaminhamento.", cta:"Ver apoio para famílias", href:"/familias" },
];

export default function Sobre(){return <SiteShell>
  <SubpageIntro kicker="SOBRE A NEW JOURNEY" title="O que você encontra aqui?" />
  <PrimaryActionGrid id="pilares" kicker="NOSSO JEITO DE ATENDER" title="Quatro compromissos na prática." note="Esses compromissos orientam a forma como acolhemos, explicamos possibilidades e acompanhamos cada encaminhamento." items={pillars} />

  <section className="section-pad content-page about-content">
    <div id="papel" className="about-statement about-section-anchor">
      <span className="kicker">NOSSO PAPEL</span>
      <h2>Uma orientação humana entre a dúvida e a decisão.</h2>
      <p>Nascemos para ajudar famílias que não sabem por onde começar a encontrar informação, critérios e apoio antes de escolher um caminho de cuidado.</p>
      <p>Não somos uma clínica, um ranking pago ou uma promessa de cura. Funcionamos como guia de jornada: escutamos o contexto, explicamos possibilidades e, quando faz sentido, apresentamos opções compatíveis. A família mantém o poder de decisão em todas as etapas.</p>
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
</SiteShell>}
