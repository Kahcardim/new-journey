import Link from "next/link";
import { Icon } from "./Icons";
import { SiteShell } from "./SiteShell";

export function ArticlePage({kicker,title,intro,children}:{kicker:string;title:string;intro:string;children:React.ReactNode}){
  return <SiteShell>
    <section className="page-hero compact">
      <span className="kicker kicker-light">{kicker}</span>
      <h1>{title}</h1>
      <p>{intro}</p>
      <div className="page-primary-actions">
        <Link className="btn btn-mint" href="/agendamento">Conversar com um orientador <Icon name="arrow"/></Link>
        <a className="btn btn-outline-light" href="#conteudo-artigo">Continuar leitura</a>
      </div>
    </section>
    <article id="conteudo-artigo" className="section-pad policy editorial article-readable">
      {children}
      <div className="article-cta"><h2>Quer organizar a situação com alguém?</h2><p>Uma conversa inicial não obriga nenhuma contratação ou internação.</p><Link className="btn btn-dark" href="/agendamento">Agendar orientação <Icon name="arrow"/></Link></div>
    </article>
  </SiteShell>
}
