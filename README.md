# FinanCash - Full Stack 💵

Aplicação moderna e robusta para gerenciamento financeiro pessoal. Permite aos usuários adiministrar rendas e despesas, visualizar gráficos responsivos na dashboard , realizar operações de CRUD (criar, atualizar e excluir) em transações, e gerenciar dados do perfil (incluindo upload de imagem).

## Acesse o projeto (Vercel) 💻
https://financial-control-frontend-eight.vercel.app

## Diferenciais do projeto 🧠

Este projeto foi construído com foco em performance, segurança, experiência do usuário (UX) e escalabilidade, refletindo a arquitetura Full-Stack moderna.

- **Frontend (Next.js)** Utiliza as features mais recentes presentes no NextJS: App router, cache (revalidate tags e path) e middeware e React.
- **Backend Robusto (NestJS):** Separação clara entre frontend e backend, garantindo escalabilidade e lógica de negócio bem definida.
- **Segurança com JWT:** Implementação completa do sistema de autenticação via JWT (Json Web Token), garantindo endpoints seguros e gerenciamento dos cookies e sessão.
- **Clean Code e Componentização:** Estrutura de código modular, com separações de responsabilidade entre componentes e serviços.
- **UX:**
  - **Skeletons Loaders (Shadcn/ui):** São exibidos durante o carregamento dos dados servidos pela API.
  - **Feedback Toast:** Notificações de sucesso e erros para todas as interações com a API.


## Funcionalidades da aplicação ⚙

- 🔒 **Autenticação completa:** Cadastro, login e logout seguros via JWT.
- 📊 **Dashboard Analítico**: Visualização de saldos, receitas e despesas com gráficos dinâmicos e responsivos.
- 💵 **Gestão de transações (CRUD):** Criação, edição e exclusão de lançamentos financeiros.
- 👤 **Gerenciamento de perfil:** Atualização de dados do perfil e upload de imagem.

## Ferramentas utilizadas 🛠

- [NextJS](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Shadcn](https://ui.shadcn.com)
- [TailwindCSS](https://tailwindcss.com)
- [NestJS](https://nestjs.com)
- [Postgresql](https://www.postgresql.org)
- [JsonWebToken](https://www.jwt.io)

## Como rodar o projeto localmente ✔

```bash
## Clone o repositório
git clone https://github.com/Gabriel-Labritz/financial-control-frontend

## Acesse a pasta
cd financial-control-frontend

# Instale as dependências
npm install

# Rode o projeto
npm run dev

```

## Variáveis de ambiente 🛠

```bash
  ### Crie um arquivo .env na raiz do projeto com:

  NEXT_PUBLIC_API_URL=
```

## Autor 🙋‍♂️

Gabriel Labritz - Dev Júnior

- [GitHub](https://github.com/Gabriel-Labritz)
- [LinkedIn](https://www.linkedin.com/in/gabriel-labritz-199499229/)
