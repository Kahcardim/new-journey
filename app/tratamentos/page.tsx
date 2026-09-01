import Link from "next/link";
import { Icon } from "@/components/Icons";
import { SiteShell } from "@/components/SiteShell";
import { PrimaryActionGrid, SubpageIntro } from "@/components/SubpageUI";

const paths = [
  { number:"01", title:"CAPS AD e rede pública", text:"Acompanhamento territorial e gratuito pelo SUS, com equipe multiprofissional.", cta:"Quero entender esta opção", href:"/agendamento?origem=tratamentos&tipo=caps-ad" },
  { number:"02", title:"Atendimento ambulatorial", text:"Consultas e terapias sem afastamento integral da rotina, quando há segurança e adesão.", cta:"Quero avaliar este caminho", href:"/agendamento?origem=tratamentos&tipo=ambulatorial" },
  { number:"03", title:"Acolhimento residencial", text:"Ambiente protegido e rotina estruturada, conforme modalidade e indicação.", cta:"Quero saber se faz sentido", href:"/agendamento?origem=tratamentos&tipo=acolhimento-residencial" },
  { number:"04", title:"Internação clínica", text:"Pode ser considerada quando cuidado intensivo é necessário, sempre com avaliação médica.", cta:"Quero orientação sobre internação", href:"/agendamento?origem=tratamentos&tipo=internacao-clinica" },
];

export default function Tratamentos(){return <SiteShell>
  <SubpageIntro kicker="ENTENDER O TRATAMENTO" title="Qual caminho de cuidado faz sentido agora?" />

  <PrimaryActionGrid id="caminhos" kicker="CAMINHOS DE CUIDADO" title="Escolha por onde começar." description="Os principais caminhos aparecem primeiro para que a decisão não fique escondida em textos longos." items={paths} />

  <section className="section-pad content-page">
    <div className="section-heading"><span className="kicker">ENTENDA AS DIFERENÇAS</span><h2>Tratamento não é uma escolha única para todos.</h2><p>A necessidade deve ser avaliada por profissionais habilitados. Conhecer as possibilidades ajuda a família a fazer perguntas melhores e evitar decisões tomadas somente pelo medo.</p></div>
    <section className="admission-compare"><div><span className="kicker">INTERNAÇÃO VOLUNTÁRIA</span><h2>Com consentimento</h2><p>A pessoa concorda com a internação e formaliza sua vontade. A alta pode ser solicitada pelo paciente ou determinada pelo médico responsável, conforme o caso.</p><Link className="card-cta" href="/agendamento?origem=tratamentos&tipo=voluntaria">Tirar dúvidas sobre esta modalidade <Icon name="arrow"/></Link></div><div><span className="kicker">INTERNAÇÃO INVOLUNTÁRIA</span><h2>Sem consentimento</h2><p>É uma medida excepcional. Depende de avaliação e formalização médica, pedido de familiar ou responsável e comunicação aos órgãos previstos em lei. Não é decidida pelo site ou pelo captador.</p><Link className="card-cta" href="/agendamento?origem=tratamentos&tipo=involuntaria">Entender os critérios <Icon name="arrow"/></Link></div></section>
    <div className="legal-callout"><Icon name="shield" size={26}/><div><h3>Importante</h3><p>A New Journey oferece orientação e curadoria; não realiza diagnóstico, prescrição, remoção ou decisão de internação. Regras legais e clínicas devem ser confirmadas com profissionais e instituições habilitadas.</p></div></div>
    <div className="center-cta"><h2>Não sabe qual caminho considerar?</h2><p>Uma conversa inicial pode organizar a situação sem compromisso de contratação.</p><Link className="btn btn-dark" href="/agendamento">Agendar orientação <Icon name="arrow"/></Link></div>
  </section>
</SiteShell>}
