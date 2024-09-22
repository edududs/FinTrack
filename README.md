
# FinTrack

**FinTrack** é um dashboard financeiro desenvolvido para ajudar usuários a gerenciar suas finanças pessoais. O sistema permite o registro de transações, categorização de gastos, visualização de gráficos financeiros e alertas automáticos sobre orçamentos.

## Características Principais

- **Registro de Transações**: Adicione, edite e exclua suas transações financeiras de maneira simples.
- **Categorização de Gastos**: Organize suas transações por categoria para uma análise mais detalhada.
- **Visualização de Dados**: Visualize seus dados financeiros em gráficos e relatórios detalhados, ajudando a acompanhar seu comportamento financeiro ao longo do tempo.
- **Notificações de Orçamento**: Receba alertas automáticos quando estiver próximo de ultrapassar seus limites de orçamento.

## Tecnologias Utilizadas

- **Frontend**: Desenvolvido com React e TypeScript. Utiliza ShadCN para componentes de UI e Recharts para geração de gráficos.
- **Backend**: Baseado em Django Rest Framework, responsável pela lógica de negócios, manipulação de dados e autenticação.

## Como Configurar e Rodar o Projeto

### 1. Configuração do Ambiente

Certifique-se de ter os seguintes requisitos instalados em sua máquina:

- **Node.js** e **Yarn** para o frontend.
- **Python** e **Django** para o backend.

#### Passos:

1. Clone o repositório do projeto:

   ```bash
   git clone https://github.com/seu-usuario/fintrack.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd fintrack
   ```

3. Instale as dependências do frontend:

   ```bash
   cd frontend
   yarn install
   ```

4. Instale as dependências do backend:

   ```bash
   cd ../backend
   pip install -r requirements.txt
   ```

### 2. Execução do Projeto

1. Inicie o servidor backend do Django:

   ```bash
   python manage.py runserver
   ```

2. Inicie o aplicativo frontend com React:

   ```bash
   yarn start
   ```

3. Acesse o projeto no navegador, em [http://localhost:3000](http://localhost:3000).

## Contribuições

Contribuições são bem-vindas! Para contribuir, siga estas etapas:

1. Crie uma nova branch para sua funcionalidade ou correção.
2. Envie um pull request detalhado descrevendo as mudanças feitas.
3. Certifique-se de seguir as convenções de código do projeto e incluir testes para suas mudanças.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
