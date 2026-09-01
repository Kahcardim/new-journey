import Link from "next/link";
import { Icon } from "@/components/Icons";
import { SiteShell } from "@/components/SiteShell";
import { PrimaryActionGrid, SubpageIntro } from "@/components/SubpageUI";

const criteria=["Perfil do paciente e público atendido","Reputação e referências verificáveis","Localização e acesso da família","Disponibilidade real de acolhimento","Estrutura e equipe informadas","Viabilidade financeira da família"];

const steps = [
  { number:"01", title:"Reunião inicial", text:"Alinhamento de público, capacidade, processo e responsabilidades.", cta:"Quero apresentar minha clínica", href:"/agendamento?origem=clinicas&etapa=reuniao" },
  { number:"02", title:"Homologação", text:"Coleta de dados, critérios mínimos e validação documental.", cta:"Quero entender os critérios", href:"/agendamento?origem=clinicas&etapa=homologacao" },
  { number:"03", title:"Contrato e cadastro", text:"Regras de rastreabilidade, conversão e remuneração transparentes.", cta:"Quero conhecer o modelo", href:"/agendamento?origem=clinicas&etapa=contrato" },
  { number:"04", title:"Projeto piloto", text:"Acompanhamento dos primeiros encaminhamentos e melhoria contínua.", cta:"Quero iniciar uma conversa", href:"/agendamento?origem=clinicas&etapa=piloto" },
];

export default function Clinicas(){return <SiteShell>
  <SubpageIntro kicker="CLÍNICAS PARCEIRAS" title="Como funciona uma parceria com a New Journey?" description="Veja primeiro as etapas da parceria. Os critérios e detalhes operacionais ficam logo depois." />

  <PrimaryActionGrid id="como-funciona" kicker="PROCESSO DE PARCERIA" title="Quatro etapas, com regras claras." description="A clínica pode iniciar a conversa a partir da etapa em que está hoje." items={steps} />

  <section className="section-pad content-page">
    <div className="section-heading"><span className="kicker">POR QUE TRABALHAMOS ASSIM</span><h2>Parcerias baseadas em critérios, não apenas em vagas.</h2><p>A New Journey aproxima famílias com contexto e intenção real de clínicas previamente avaliadas, com regras transparentes e acompanhamento do encaminhamento.</p></div>
    <div className="section-heading"><span className="kicker">CURADORIA</span><h2>O que avaliamos antes de apresentar uma opção.</h2><p>Critérios visíveis reduzem improviso e ajudam a proteger família, paciente e clínica.</p></div>
    <div className="criteria-grid">{criteria.map((item,i)=><div key={item}><span>0{i+1}</span><p>{item}</p></div>)}</div>
    <div className="partner-status"><div><span className="kicker">CATÁLOGO EM PREPARAÇÃO</span><h2>Clínicas parceiras serão exibidas após homologação.</h2><p>O seletor da página inicial já está preparado para receber nome, região, público, estrutura, disponibilidade e diferenciais de cada parceira.</p></div><span className="status-pill">0 clínicas publicadas</span></div>
    <div className="legal-callout"><Icon name="shield"/><div><h3>Relação transparente</h3><p>O contrato de tratamento é realizado diretamente entre clínica e paciente ou família. A New Journey não interfere na decisão clínica e não garante internação, permanência ou resultado terapêutico.</p></div></div>
    <div className="center-cta"><h2>Quer apresentar sua clínica?</h2><Link className="btn btn-dark" href="/agendamento?origem=clinicas">Agendar reunião de parceria <Icon name="arrow"/></Link></div>
  </section>
</SiteShell>}
