# New Journey

Site institucional e plataforma de orientação humana para pessoas e famílias que buscam caminhos de cuidado para dependência de álcool e outras drogas.

> A New Journey não é clínica, não realiza diagnóstico e não promete cura. O produto organiza uma conversa inicial e, quando adequado, apresenta opções compatíveis para decisão da família.

## Objetivos

- gerar confiança e contexto antes do contato;
- captar solicitações qualificadas pelo WhatsApp;
- oferecer agendamento 24 horas, sem limite por faixa de horário;
- explicar internação voluntária e involuntária com responsabilidade;
- apoiar famílias antes e depois do encaminhamento;
- preparar cadastro futuro de clínicas homologadas;
- servir como projeto de portfólio em React, TypeScript, UX e QA.

## Arquitetura

- Next.js/Vinext + React + TypeScript;
- aplicação multipágina, responsiva e compatível com Cloudflare Workers;
- nenhum banco de dados nesta versão;
- formulários processados localmente e enviados por URL segura ao WhatsApp;
- configuração central em `lib/site-config.ts`;
- variáveis futuras documentadas em `.env.example`.

## Páginas

- `/` — home, seletor de clínica/problema/modalidade e jornada;
- `/agendamento` — formulário contextual e data/horário 24h;
- `/tratamentos` — modalidades e internação voluntária/involuntária;
- `/familias` — atendimento humanizado e apoio familiar;
- `/clinicas` — critérios, fluxo de parceria e catálogo futuro;
- `/sobre` — posicionamento e transparência comercial;
- `/qa` — estratégia completa de qualidade;
- `/privacidade` — base técnica de privacidade e LGPD.
- `/quando-procurar-ajuda` — sinais e próximos passos sem diagnóstico;
- `/dependencia-quimica` — conteúdo educativo e caminhos de cuidado;
- `/alcool` e `/drogas` — páginas temáticas para SEO e orientação;
- `/perguntas-frequentes` — respostas sobre atendimento e encaminhamento.

## Configuração

Copie `.env.example` para `.env.local` e preencha:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
NEXT_PUBLIC_SITE_URL=https://www.seudominio.com.br
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=seu-codigo
```

O número atualmente configurado é demonstrativo e deve ser substituído antes do uso comercial.

## Análise competitiva aplicada

Foram observados sites de clínicas e intermediadores de recuperação em São Paulo. Padrões recorrentes encontrados: uso excessivo de urgência, listas extensas de clínicas, discurso genérico de “melhores opções”, pouca transparência sobre curadoria e CTAs repetitivos.

A New Journey se diferencia por:

- começar pela situação da pessoa, não pela vaga;
- deixar explícito que internação não é a única possibilidade;
- apresentar critérios de curadoria;
- explicar limites e responsabilidades;
- reduzir pressão comercial;
- manter apoio familiar como serviço central;
- não publicar clínicas antes de homologação.

## Riscos tratados

- **LGPD:** coleta mínima, consentimento explícito e ausência de armazenamento local;
- **dados sensíveis:** orientação para evitar documentos, diagnósticos e detalhes desnecessários;
- **emergência:** encaminhamento claro para SAMU 192 e Polícia 190;
- **internação involuntária:** descrita como excepcional e dependente de avaliação/formalização profissional;
- **conflito comercial:** transparência sobre remuneração após conversão;
- **promessas:** nenhuma garantia de cura, vaga, internação ou resultado.

## Acessibilidade

- link “pular para o conteúdo”;
- navegação por teclado e foco visível;
- alto contraste e ajuste de tamanho do texto;
- landmarks, headings, labels e mensagens de erro semânticas;
- respeito a `prefers-reduced-motion`;
- layouts sem rolagem horizontal de 360px a desktop.

## Estratégia de QA

1. requisitos e regras de negócio;
2. testes funcionais;
3. UI e UX;
4. responsividade;
5. acessibilidade;
6. compatibilidade;
7. performance;
8. SEO técnico;
9. segurança e LGPD;
10. regressão;
11. aceitação;
12. smoke test e monitoramento em produção.

## Desenvolvimento

```bash
npm ci
npm run dev
npm run lint
npm test
npm run build:pages
```

## Publicação

O workflow `.github/workflows/deploy-pages.yml` gera uma exportação estática e publica automaticamente no GitHub Pages a cada atualização da branch `main`.

- o `basePath` `/new-journey` é aplicado somente no build do GitHub Pages;
- a mesma base de código continua compatível com a hospedagem Sites e com domínio próprio;
- `public/CNAME.example` documenta a ativação futura de domínio personalizado;
- GA4 e Search Console só são carregados após receberem IDs válidos nas variáveis de ambiente.

## Documentação

- `docs/ANALISE_CONCORRENTES.md` — pesquisa estratégica e referências;
- `docs/ARQUITETURA.md` — decisões técnicas e fluxo de conversão;
- `docs/QA_REPORT.md` — evidências, limitações e regressão.

## Aviso jurídico

Conteúdo, contratos, política de privacidade, modelo de remuneração e fluxos de internação devem ser revisados por profissionais jurídicos e de saúde antes da operação comercial.
