# Relatório de QA — New Journey

**Data:** 30 de agosto de 2026  
**Versão:** 2.0 — reconstrução profissional para portfólio

## Resultado executivo

- Build Vinext/Cloudflare: **aprovado**
- Exportação estática GitHub Pages: **aprovada**
- ESLint: **aprovado, zero erros**
- Testes automatizados de rotas: **2 cenários, 2 aprovados**
- Rotas de conteúdo validadas: **14**
- Exportação gerada: **17 páginas incluindo 404, sitemap e robots**
- Erros críticos abertos: **0**
- Erros graves de responsividade identificados: **0 na inspeção disponível**

## QA funcional

| Cenário | Resultado |
| --- | --- |
| menu e rotas principais | Aprovado |
| seletor de situação | Aprovado |
| seletor voluntária/involuntária | Aprovado |
| seletor de clínicas placeholder | Aprovado |
| mensagem contextual do WhatsApp | Aprovado por inspeção do URL codificado |
| agendamento sem limite por horário | Aprovado |
| validação de campos obrigatórios | Aprovado |
| mensagem de erro acessível | Aprovado |
| botão flutuante e origem da página | Aprovado |

## QA visual

- hero, tipografia, contraste, espaçamento e enquadramento da imagem revisados em navegador;
- identidade teal/verde/bege consistente;
- imagens originais sem texto, marca d'água, estigma ou estética hospitalar;
- nenhuma clínica fictícia apresentada como real;
- imagens WebP: 81 KB e 75 KB.

## QA responsivo

- regras específicas para 1050 px, 820 px e 560 px;
- grids mudam de 4 para 2 e 1 coluna conforme o espaço;
- menu se transforma em navegação móvel;
- formulários passam para uma coluna;
- CTAs passam para largura total em celular;
- nenhum componente usa largura fixa maior que o viewport nos breakpoints.

## QA de acessibilidade

- HTML semântico e landmarks;
- link para pular ao conteúdo;
- navegação por teclado e foco visível;
- labels associados aos controles;
- erro do formulário com `role="alert"`;
- alto contraste e ajuste de fonte;
- `prefers-reduced-motion` respeitado;
- ícones decorativos ocultos de leitores de tela;
- nomes acessíveis em menu e WhatsApp.

## QA de compatibilidade

- Chrome atual: inspecionado no fluxo principal;
- build baseado em padrões suportados por Chrome, Edge, Firefox e Safari atuais;
- a matriz física completa em dispositivos reais permanece recomendada antes da operação comercial.

## QA de performance

- imagens convertidas para WebP e reduzidas para menos de 100 KB cada;
- páginas pré-renderizadas;
- JavaScript limitado a menu, acessibilidade, seletores e formulário;
- nenhum banco, SDK de terceiros ou analytics carregado sem configuração;
- fontes têm fallback e não bloqueiam a funcionalidade.

## QA de SEO

- títulos, descriptions e headings;
- canonical e Open Graph;
- canonical específico por rota e favicon válido no subdiretório do GitHub Pages;
- sitemap e robots estáticos;
- URLs amigáveis;
- Schema.org `Organization`;
- páginas originais para álcool, drogas, dependência e sinais de ajuda;
- configuração futura de domínio e Search Console centralizada.

## QA de conteúdo e conversão

- português e tom revisados;
- nenhuma promessa de cura;
- New Journey identificada como orientação, não clínica;
- CTAs claros sem escassez ou pressão artificial;
- serviços públicos e emergência apresentados de forma responsável;
- WhatsApp e agendamento presentes nos principais caminhos.

## Testes negativos

- submissão vazia: bloqueada com mensagem clara;
- data passada: bloqueada pelo campo com data mínima;
- consentimento ausente: bloqueia abertura do WhatsApp;
- clínica não cadastrada: exibida apenas como placeholder pendente;
- analytics sem ID: não carrega scripts;
- texto de observação: limitado a 600 caracteres.

## Regressão

Após correções de build e validação, foram repetidos:

- build de produção;
- lint;
- renderização da home;
- renderização de todas as rotas;
- seletores da home;
- validação negativa do formulário;
- exportação estática do GitHub Pages.

## Limitações conhecidas

1. número do WhatsApp ainda é demonstrativo;
2. clínicas parceiras aguardam dados e homologação;
3. GA4, Search Console e domínio aguardam IDs próprios;
4. conteúdo jurídico e médico exige validação profissional;
5. não há confirmação automática de horário nem CRM;
6. matriz real completa em Safari/iOS e Firefox deve ser executada antes do lançamento comercial.
