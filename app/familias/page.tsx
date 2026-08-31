import "./familias.css";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { SiteShell } from "@/components/SiteShell";

const services = [
  ["Antes da decisão", "Ajudamos a organizar o que está acontecendo, reconhecer riscos e compreender alternativas."],
  ["Durante a escolha", "Explicamos critérios, comparamos opções e apoiamos a família na conversa com os serviços."],
  ["Após o encaminhamento", "Mantemos o contato para orientar dúvidas, limites e a participação saudável da família."],
  ["Quando há recusa", "Acolhemos a angústia e ajudamos a evitar ameaças, discussões improdutivas ou decisões precipitadas."],
];

export default function Familias() {
  const assetBase = process.env.GITHUB_PAGES === "true" ? "/new-journey" : "";
  return (
    <SiteShell>
      <section className="family-mobile-hero" aria-labelledby="familia-titulo">
        <div className="family-hero-copy">
          <div className="family-hero-copy-inner">
            <span className="kicker">ATENDIMENTO HUMANIZADO</span>
            <h1 id="familia-titulo">A família também precisa ser ouvida.</h1>
            <p>Quem está ao lado costuma carregar medo, culpa, cansaço e dúvidas. Nosso papel é transformar esse momento confuso em próximos passos mais claros e seguros.</p>
            <Link className="btn btn-dark" href="/agendamento">Conversar com um orientador <Icon name="arrow"/></Link>
          </div>
        </div>
        <div className="family-page-photo">
          <img src={`${assetBase}/new-journey-familia.webp`} alt="Família em conversa acolhedora" />
        </div>
      </section>

      <section className="section-pad content-page family-content">
        <div className="section-heading family-section-heading">
          <span className="kicker">COMO APOIAMOS</span>
          <h2>Orientação que acompanha a jornada.</h2>
          <p>Um processo simples, objetivo e humano para que a família saiba o que observar, perguntar e decidir em cada etapa.</p>
        </div>
        <div className="service-grid family-service-grid">{services.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="priority-panel-actions family-inline-cta"><Link className="btn btn-dark" href="/agendamento">Quero orientação para minha família <Icon name="arrow"/></Link></div>
        <section className="do-dont">
          <div><h2>O que pode ajudar</h2><ul><li><Icon name="check"/> Escolher um momento mais seguro para conversar</li><li><Icon name="check"/> Falar sobre fatos e consequências, sem humilhar</li><li><Icon name="check"/> Definir limites possíveis de manter</li><li><Icon name="check"/> Buscar apoio para a própria família</li></ul></div>
          <div><h2>O que costuma piorar</h2><ul><li>× Discutir durante intoxicação ou crise</li><li>× Fazer ameaças que não serão cumpridas</li><li>× Esconder todas as consequências do uso</li><li>× Tentar controlar tudo sem ajuda</li></ul></div>
        </section>
        <div className="warm-callout"><span className="kicker">SEM CULPA, SEM PROMESSAS FÁCEIS</span><h2>Você pode oferecer ajuda sem assumir sozinho a responsabilidade pela mudança.</h2><p>Recuperação é um processo. Acolhimento e limites podem coexistir.</p></div>
      </section>
    </SiteShell>
  );
}
