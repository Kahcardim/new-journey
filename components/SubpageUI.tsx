import Link from "next/link";
import { Icon } from "./Icons";

type ActionItem = {
  title: string;
  text: string;
  cta: string;
  href: string;
  number?: string;
  icon?: string;
};

export function SubpageIntro({ kicker, title, description }: { kicker: string; title: string; description?: string }) {
  return (
    <section className="page-intro">
      <span className="kicker">{kicker}</span>
      <h1>{title}</h1>
      {description ? <p>{description}</p> : null}
    </section>
  );
}

export function PrimaryActionGrid({
  id,
  kicker,
  title,
  description,
  items,
}: {
  id?: string;
  kicker: string;
  title: string;
  description?: string;
  items: ActionItem[];
}) {
  return (
    <section id={id} className="priority-panel priority-panel-primary" aria-labelledby={id ? `${id}-title` : undefined}>
      <div className="priority-panel-head">
        <div>
          <span className="kicker">{kicker}</span>
          <h2 id={id ? `${id}-title` : undefined}>{title}</h2>
        </div>
        {description ? <p>{description}</p> : null}
      </div>
      <div className="priority-grid priority-grid-actionable">
        {items.map((item) => (
          <article className="priority-action-card" key={item.title}>
            {item.icon ? <Icon name={item.icon} size={28} /> : <span>{item.number}</span>}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            {item.href.startsWith("#") ? (
              <a className="priority-card-cta" href={item.href}>{item.cta} <Icon name="arrow" /></a>
            ) : (
              <Link className="priority-card-cta" href={item.href}>{item.cta} <Icon name="arrow" /></Link>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
