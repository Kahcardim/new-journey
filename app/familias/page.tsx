import "./familias.css";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { SiteShell } from "@/components/SiteShell";
import { PrimaryActionGrid, SubpageIntro } from "@/components/SubpageUI";

const services = [
  { number:"01", title:"Antes da decisão", text:"Ajudamos a organizar o que está acontecendo, reconhecer riscos e compreender alternativas.", cta:"Quero organizar a situação", href:"/agendamento?origem=familias&etapa=antes-da-decisao" },
  { number:"02", title:"Durante a escolha", text:"Explicamos critérios, comparamos opções e apoiamos a família na conversa com os serviços.", cta:"Quero comparar caminhos", href:"/agendamento?origem=familias&etapa=durante-a-escolha" },
  { number:"03", title:"Após o encaminhamento", text:"Mantemos o contato para orientar dúvidas, limites e a participação saudável da família.", cta:"Preciso de apoio nesta etapa", href:"/agendamento?origem=familias&etapa=apos-encaminhamento" },
  { number:"04", title:"Quando há recusa", text:"Acolhemos a angústia e ajudamos a evitar ameaças, discussões improdutivas ou decisões precipitadas.", cta:"Quero orientação sobre a recusa", href:"/agendamento?origem=familias&etapa=quando-ha-recusa" },
];

export default function Familias() {
  const assetBase = process.env.GITHUB_PAGES === "true" ? "/new-journey" : "";
  return <SiteShell>
    <SubpageIntro kicker="PARA FAMÍLIAS" title="Em que momento sua família está agora?" />
    <PrimaryActionGrid id="apoio-familia" kicker="COMO PODEMOS AJUDAR" title="Escolha o ponto de partida." note="Cada etapa pede um tipo diferente de orientação. Escolha a que mais se aproxima do momento atual." items={services} />

    <section className="family-editorial" aria-labelledby="familia-contexto-titulo">
      <div className="family-editorial-copy">
        <span className="kicker">ATENDIMENTO HUMANIZADO</span>
        <h2 id="familia-contexto-titulo">A família também precisa ser ouvida.</h2>
        <p>Quem está ao lado costuma carregar medo, culpa, cansaço e dúvidas. Nosso papel é transformar esse momento confuso em próximos passos mais claros e seguros.</p>
        <Link className="btn btn-dark" href="/agendamento?origem=familias">Conversar com um orientador <Icon name="arrow"/></Link>
      </div>
      <figure className="family-editorial-photo">
        <Image src={`${assetBase}/new-journey-familia.webp`} alt="Família em conversa acolhedora" width={1440} height={1086} sizes="(max-width: 760px) 0px, 460px" />
      </figure>
    </section>

    <section className="section-pad content-page family-content">
      <section className="do-dont">
        <div><h2>O que pode ajudar</h2><ul><li><Icon name="check"/> Escolher um momento mais seguro para conversar</li><li><Icon name="check"/> Falar sobre fatos e consequências, sem humilhar</li><li><Icon name="check"/> Definir limites possíveis de manter</li><li><Icon name="check"/> Buscar apoio para a própria família</li></ul></div>
        <div><h2>O que costuma piorar</h2><ul><li>× Discutir durante intoxicação ou crise</li><li>× Fazer ameaças que não serão cumpridas</li><li>× Esconder todas as consequências do uso</li><li>× Tentar controlar tudo sem ajuda</li></ul></div>
      </section>
      <div className="warm-callout"><span className="kicker">SEM CULPA, SEM PROMESSAS FÁCEIS</span><h2>Você pode oferecer ajuda sem assumir sozinho a responsabilidade pela mudança.</h2><p>Recuperação é um processo. Acolhimento e limites podem coexistir.</p><Link className="btn btn-dark" href="/agendamento">Falar com a New Journey <Icon name="arrow"/></Link></div>
    </section>
  </SiteShell>;
}
