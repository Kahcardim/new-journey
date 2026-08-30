import Link from "next/link";
import { Icon } from "./Icons";
import { SiteShell } from "./SiteShell";
export function ArticlePage({kicker,title,intro,children}:{kicker:string;title:string;intro:string;children:React.ReactNode}){return <SiteShell><section className="page-hero compact"><span className="kicker kicker-light">{kicker}</span><h1>{title}</h1><p>{intro}</p></section><article className="section-pad policy editorial">{children}<div className="article-cta"><h2>Quer organizar a situação com alguém?</h2><p>Uma conversa inicial não obriga nenhuma contratação ou internação.</p><Link className="btn btn-dark" href="/agendamento">Agendar orientação <Icon name="arrow"/></Link></div></article></SiteShell>}

