"use client";
import { FormEvent, useMemo, useState } from "react";
import { Icon } from "@/components/Icons";
import { SiteShell } from "@/components/SiteShell";
import { whatsappUrl } from "@/lib/site-config";

const initial = { name:"", relation:"Para um familiar", city:"", age:"", substance:"Álcool", duration:"", admission:"Ainda não sei", risk:"Não", date:"", time:"", notes:"", consent:false };
export default function Agendamento() {
  const [form,setForm]=useState(initial); const [error,setError]=useState("");
  const minDate=useMemo(()=>new Date().toISOString().slice(0,10),[]);
  function update(name:string,value:string|boolean){setForm(v=>({...v,[name]:value}));}
  function submit(e:FormEvent){e.preventDefault(); if(!form.name||!form.city||!form.date||!form.time||!form.consent){setError("Preencha nome, cidade, data, horário e confirme o consentimento.");return;} setError(""); const msg=`Olá, gostaria de agendar uma conversa com a New Journey.\n\nNome: ${form.name}\nAjuda para: ${form.relation}\nCidade: ${form.city}\nIdade aproximada do paciente: ${form.age||"Não informada"}\nSubstância principal: ${form.substance}\nTempo de uso: ${form.duration||"Não informado"}\nPossibilidade de internação: ${form.admission}\nRisco imediato informado: ${form.risk}\nData preferida: ${form.date}\nHorário preferido: ${form.time}\nObservação: ${form.notes||"Sem observação"}`; window.open(whatsappUrl(msg),"_blank","noopener,noreferrer");}
  return <SiteShell>
    <section className="page-hero compact">
      <span className="kicker kicker-light">CONVERSA 24 HORAS</span>
      <h1>Agende no horário que fizer sentido para você.</h1>
      <p>Preencha apenas o essencial. O envio abre o WhatsApp com um resumo para o orientador entender o contexto antes da conversa.</p>
      <div className="page-primary-actions">
        <a className="btn btn-mint" href="#formulario-agendamento">Preencher agendamento <Icon name="arrow"/></a>
        <a className="btn btn-outline-light" href="#orientacoes-agendamento">Ver orientações importantes</a>
      </div>
    </section>

    <section id="formulario-agendamento" className="schedule-layout section-pad">
      <aside id="orientacoes-agendamento">
        <div className="info-card"><Icon name="clock" size={26}/><h2>Disponível todos os dias</h2><p>Escolha qualquer data e horário. A solicitação é enviada diretamente pelo WhatsApp.</p></div>
        <div className="emergency-card"><strong>Existe risco imediato?</strong><p>Em overdose, perda de consciência, convulsão, agressão, risco de suicídio ou ameaça à vida, não aguarde reunião: ligue para o SAMU 192 ou Polícia 190.</p></div>
        <div className="privacy-note"><Icon name="shield"/><p>Os dados não são armazenados neste site. A mensagem é montada no seu aparelho e enviada somente quando você abrir o WhatsApp.</p></div>
      </aside>
      <form className="lead-form" onSubmit={submit} noValidate>
        <div className="form-heading"><span className="step-badge">1</span><div><h2>Sobre o contato</h2><p>Comece com informações básicas.</p></div></div>
        <div className="form-grid"><label>Seu primeiro nome *<input value={form.name} onChange={e=>update("name",e.target.value)} autoComplete="given-name"/></label><label>Você busca ajuda para quem?<select value={form.relation} onChange={e=>update("relation",e.target.value)}><option>Para um familiar</option><option>Para mim</option><option>Para outra pessoa</option></select></label><label>Cidade *<input value={form.city} onChange={e=>update("city",e.target.value)} autoComplete="address-level2"/></label><label>Idade aproximada do paciente<input type="number" min="12" max="100" value={form.age} onChange={e=>update("age",e.target.value)}/></label></div>
        <div className="form-heading"><span className="step-badge">2</span><div><h2>Contexto essencial</h2><p>Não é uma avaliação médica.</p></div></div>
        <div className="form-grid"><label>Substância principal<select value={form.substance} onChange={e=>update("substance",e.target.value)}><option>Álcool</option><option>Cocaína ou crack</option><option>Maconha</option><option>Medicamentos</option><option>Múltiplas substâncias</option><option>Outro ou não sei</option></select></label><label>Há quanto tempo ocorre o uso?<input value={form.duration} onChange={e=>update("duration",e.target.value)} placeholder="Ex.: cerca de 3 anos"/></label><label>Possibilidade de internação<select value={form.admission} onChange={e=>update("admission",e.target.value)}><option>Ainda não sei</option><option>Voluntária</option><option>Involuntária</option><option>Não busco internação</option></select></label><label>Há risco imediato agora?<select value={form.risk} onChange={e=>update("risk",e.target.value)}><option>Não</option><option>Não tenho certeza</option><option>Sim</option></select></label></div>
        <div className="form-heading"><span className="step-badge">3</span><div><h2>Melhor horário</h2><p>Solicitações abertas 24 horas, sem limite por faixa.</p></div></div>
        <div className="form-grid"><label>Data preferida *<input type="date" min={minDate} value={form.date} onChange={e=>update("date",e.target.value)}/></label><label>Horário preferido *<input type="time" value={form.time} onChange={e=>update("time",e.target.value)}/></label><label className="full">Algo importante para a conversa?<textarea value={form.notes} onChange={e=>update("notes",e.target.value)} rows={4} maxLength={600} placeholder="Evite nomes completos, documentos, diagnósticos ou detalhes desnecessários."/></label></div>
        <label className="consent"><input type="checkbox" checked={form.consent} onChange={e=>update("consent",e.target.checked)}/><span>Concordo em enviar essas informações pelo WhatsApp para receber orientação da New Journey. Entendo que este contato não substitui atendimento médico ou de emergência.</span></label>
        {error&&<p className="form-error" role="alert">{error}</p>}
        <button className="btn btn-dark submit-btn" type="submit">Abrir conversa no WhatsApp <Icon name="arrow"/></button>
      </form>
    </section>
  </SiteShell>;
}
