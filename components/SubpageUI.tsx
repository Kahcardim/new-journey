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

export function SubpageIntro({ kicker, title }: { kicker: string; title: string }) {
  return (
    <header className="page-intro">
      <span className="kicker">{kicker}</span>
      <h1>{title}</h1>
    </header>
  );
}

export function PrimaryActionGrid({
  id,
  kicker,
  title,
  note,
  items,
}: {
  id?: string;
  kicker: string;
  title: string;
  note?: string;
  items: ActionItem[];
}) {
  const headingId = id ? `${id}-title` : undefined;

  return (
    <section id={id} className="priority-panel priority-panel-primary" aria-labelledby={headingId}>
      <div className="priority-panel-head">
        <span className="kicker">{kicker}</span>
        <h2 id={headingId}>{title}</h2>
      </div>

      <div className="priority-grid priority-grid-actionable">
        {items.map((item) => (
          <article className="priority-action-card" key={item.title}>
            {item.icon ? <Icon name={item.icon} size={28} /> : <span className="priority-card-number">{item.number}</span>}
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

      {note ? <p className="priority-panel-note">{note}</p> : null}
    </section>
  );
}
