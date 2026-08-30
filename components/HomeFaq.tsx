import Link from "next/link";
const items=[
  ["A New Journey é uma clínica?","Não. Somos um serviço de orientação e curadoria. O tratamento é contratado diretamente com a clínica ou serviço escolhido pela família."],
  ["A conversa obriga a escolher uma internação?","Não. A orientação pode incluir alternativas ambulatoriais e serviços públicos. A família decide sem pressão."],
  ["Qual a diferença entre internação voluntária e involuntária?","Na voluntária há consentimento. A involuntária é excepcional e exige avaliação e formalização profissional conforme a legislação."],
  ["O atendimento funciona de madrugada?","A solicitação pode ser feita 24 horas por dia. Em risco imediato, ligue 192 ou 190 em vez de aguardar uma conversa."],
];
export function HomeFaq(){return <section className="section-pad home-faq"><div className="section-heading"><span className="kicker">PERGUNTAS FREQUENTES</span><h2>Informação clara reduz a ansiedade.</h2></div><div>{items.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div><Link className="text-link" href="/perguntas-frequentes">Ver todas as perguntas →</Link></section>}

