import Link from "next/link";
import { Icon } from "@/components/Icons";
import { SiteShell } from "@/components/SiteShell";

export default function Privacidade(){
  return <SiteShell>
    <section className="page-hero compact">
      <span className="kicker kicker-light">PRIVACIDADE E LGPD</span>
      <h1>Informação sensível exige cuidado redobrado.</h1>
      <p>Entenda de forma clara como esta versão do site trata os dados usados na orientação inicial.</p>
      <div className="page-primary-actions">
        <a className="btn btn-mint" href="#politica">Ver como seus dados são tratados <Icon name="arrow"/></a>
        <Link className="btn btn-outline-light" href="/agendamento">Falar com a New Journey</Link>
      </div>
    </section>

    <article id="politica" className="section-pad policy article-readable">
      <h2>1. Dados usados no agendamento</h2><p>O formulário solicita somente informações para contextualizar a conversa. Os dados são processados no navegador e utilizados para montar uma mensagem. Esta versão não possui banco de dados e não armazena o conteúdo do formulário.</p>
      <h2>2. Envio ao WhatsApp</h2><p>Ao continuar, a pessoa escolhe enviar a mensagem pelo WhatsApp. A partir desse momento, o tratamento também está sujeito às políticas do aplicativo e ao processo interno de atendimento da New Journey.</p>
      <h2>3. Dados de saúde</h2><p>Informações sobre uso de substâncias podem ser dados pessoais sensíveis. Evite inserir documentos, nomes completos, diagnósticos, prontuários ou informações que não sejam necessárias para a orientação inicial.</p>
      <h2>4. Analytics e cookies</h2><p>O projeto está preparado para Google Analytics 4, mas a integração permanece desativada até que um identificador próprio seja configurado e o fluxo de consentimento correspondente seja validado.</p>
      <h2>5. Direitos do titular</h2><p>Antes da operação comercial definitiva, a New Journey deverá publicar os dados do controlador, canal de contato, bases legais, prazos de retenção, compartilhamentos e procedimento para exercício de direitos.</p>
      <h2>6. Emergências</h2><p>O site não oferece atendimento médico. Em situação de risco imediato, procure o SAMU pelo 192, a Polícia pelo 190 ou o serviço de urgência mais próximo.</p>
      <p className="policy-warning">Este texto é uma base técnica e informativa. A política definitiva e os contratos devem ser revisados por profissional jurídico com experiência em saúde e proteção de dados.</p>
      <div className="article-cta"><h2>Ficou com alguma dúvida sobre o contato?</h2><p>Você pode conversar com a New Journey antes de enviar qualquer informação pelo formulário.</p><Link className="btn btn-dark" href="/agendamento">Falar conosco <Icon name="arrow"/></Link></div>
    </article>
  </SiteShell>
}
