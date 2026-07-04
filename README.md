# CareCONNECT 💙

CareConnect é uma plataforma moderna e responsiva focada em conectar pacientes a profissionais de saúde (cuidadores e enfermeiros) de forma rápida, segura e intuitiva.

## 🚀 Tecnologias Utilizadas

O projeto foi construído com as melhores práticas e ferramentas de ponta do mercado de desenvolvimento web:

* **Front-end:** [Next.js 14](https://nextjs.org/) (App Router) + [React](https://react.dev/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **Banco de Dados & Back-end:** [Supabase](https://supabase.com/) (PostgreSQL)
* **Autenticação:** Supabase Auth (Sistema de Login e Cadastro Seguro)
* **Ícones:** [Lucide React](https://lucide.dev/)

## ✨ Funcionalidades Implementadas

Até o momento, o aplicativo conta com as seguintes seções:

* **Landing Page:** Apresentação do serviço, depoimentos e chamadas para ação.
* **Autenticação Real:**
  * Login com validação de credenciais e redirecionamento de usuários.
  * Cadastro e criação de conta com definição de perfis (Paciente ou Cuidador) e salvamento de metadados.
* **Dashboard (App Shell):**
  * Layout responsivo que simula a experiência de um aplicativo mobile.
  * Menu de navegação inferior (Bottom Navigation Bar).
  * Visão do Paciente com barra de pesquisa, rolagem horizontal de categorias de cuidado e lista de profissionais recomendados (com foto, especialidade, nota e distância).
  * Visão do Cuidador (Estrutura base).

## 🛠️ Como rodar o projeto localmente

Siga os passos abaixo para testar o aplicativo em sua própria máquina.

**1. Clone o repositório:**
`git clone https://github.com/SEU_USUARIO/careconnect.git`

**2. Instale as dependências:**
`npm install`

**3. Configure as Variáveis de Ambiente:**
Crie um arquivo `.env.local` na raiz do projeto e adicione suas chaves do Supabase.
`NEXT_PUBLIC_SUPABASE_URL=sua_project_url_aqui`
`NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anon_aqui`

**4. Inicie o servidor de desenvolvimento:**
`npm run dev`

**5. Acesse no navegador:**
Abra `http://localhost:3000` para ver o projeto rodando.