# Arquitetura técnica

## Decisões principais

- **React + Next.js + TypeScript:** componentes reutilizáveis, páginas estáticas e boa manutenção.
- **Saída estática para GitHub Pages:** todas as rotas são pré-renderizadas no pipeline.
- **Vinext/Cloudflare compatível:** permite manter a publicação atual em paralelo.
- **Sem backend nesta versão:** reduz custo, superfície de ataque e tratamento de dados sensíveis.
- **WhatsApp como conversão:** o formulário monta a mensagem no navegador e abre o aplicativo.
- **Configuração centralizada:** número, domínio, GA4 e Search Console ficam em variáveis de ambiente.

## Fluxo de conversão

1. visitante escolhe situação, modalidade ou conteúdo;
2. site direciona ao agendamento ou WhatsApp;
3. formulário valida apenas os campos mínimos;
4. mensagem contextual é gerada localmente;
5. visitante confirma o envio no WhatsApp;
6. nenhum dado do formulário é persistido pelo site.

## Evolução prevista

- substituir número demonstrativo;
- cadastrar clínicas homologadas em fonte de dados segura;
- integrar CRM com consentimento e controle de acesso;
- registrar eventos de conversão após configurar GA4/GTM;
- implementar banner de consentimento se cookies não essenciais forem ativados;
- revisar política, contratos e textos com jurídico/saúde;
- adicionar testes E2E no CI.

