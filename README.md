# 🚀 PWA de Saudação (Entrega Final Bootcamp II)

Projeto de conversão de uma extensão para uma arquitetura de **PWA** (Progressive Web App) completa, incluindo um **Backend (API)** próprio, orquestração com **Docker Compose** e pipeline de **CI/CD** com GitHub Actions.

## 🔗 Links da Entrega (Critérios de Avaliação)

* **PWA Publicado (GitHub Pages):** [https://SEU-NOME.github.io/SEU-REPOSITORIO/](https://SEU-NOME.github.io/SEU-REPOSITORIO/)
* **Execução do CI (Testes E2E):** [https://github.com/SEU-NOME/SEU-REPOSITORIO/actions/workflows/ci.yml](https://github.com/SEU-NOME/SEU-REPOSITORIO/actions/workflows/ci.yml)
* **Execução do CD (Deploy):** [https://github.com/SEU-NOME/SEU-REPOSITORIO/actions/workflows/deploy.yml](https://github.com/SEU-NOME/SEU-REPOSITORIO/actions/workflows/deploy.yml)

---

### 📹 Demonstração

*Insira aqui o seu GIF ou link para o vídeo (máx 3 min) mostrando a instalação do PWA e o fluxo principal.*



---

## 🏛️ Arquitetura do Monorepo

O projeto segue uma estrutura de monorepo com os serviços separados em pastas:

* **/apps/web/**: O PWA (Frontend), construído com HTML, CSS e JavaScript puros. É servido por um container Nginx.
* **/apps/api/**: O Backend (API), construído com Node.js e Express. Fornece o endpoint de saudação.
* **/tests/**: Testes E2E (Playwright) que validam a integração entre o PWA e a API.
* **docker-compose.yml**: Orquestrador que sobe os serviços `web` e `api` para o ambiente de desenvolvimento e testes.
* **.github/workflows/**: Arquivos de CI/CD (`ci.yml` para testes, `deploy.yml` para publicação).

---

## 🚀 Como Rodar Localmente (Docker)

Siga os passos abaixo para executar a aplicação completa na sua máquina.

**Pré-requisitos:**
* [Docker](https://www.docker.com/get-started)
* [Node.js](https://nodejs.org/en) (para os testes E2E)
* [Git](https://git-scm.com/)

**Passos:**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU-NOME/SEU-REPOSITORIO.git](https://github.com/SEU-NOME/SEU-REPOSITORIO.git)
    cd SEU-REPOSITORIO
    ```

2.  **Suba os containers (PWA + API):**
    Este comando irá construir as imagens e iniciar os dois serviços.
    ```bash
    docker-compose up --build
    ```

3.  **Acesse a aplicação:**
    * **PWA (Frontend):** [http://localhost:8080](http://localhost:8080)
    * **API (Backend):** [http://localhost:3000/api/saudacao](http://localhost:3000/api/saudacao) (Teste no Postman ou navegador)

---

## 📡 Endpoints da API

A API (`apps/api`) expõe o seguinte endpoint:

* **`GET /api/saudacao`**
    * **Descrição:** Retorna a saudação correta ("Bom dia", "Boa tarde" ou "Boa noite") com base na hora do servidor.
    * **Resposta de Sucesso (JSON):**
        ```json
        {
          "saudacao": "Boa noite"
        }
        ```

---

## 🧪 Testes E2E (Playwright)

Os testes validam o fluxo completo da aplicação (carregamento do PWA, verificação do CSS e consumo da API).

1.  **Execute o Teste (via CI):**
    Os testes são executados automaticamente a cada `push` no GitHub Actions (ver `ci.yml`).

2.  **Execute o Teste (Localmente):**
    * Primeiro, suba os serviços em modo "detached":
        ```bash
        docker-compose up --build -d
        ```
    * Depois, instale o Playwright (se for a primeira vez):
        ```bash
        npm install
        ```
    * Rode os testes:
        ```bash
        npx playwright test
        ```
    * Veja o relatório (ao final):
        ```bash
        npx playwright show-report
        ```

---

## 💻 Tecnologias Utilizadas

* **PWA:** HTML5, CSS3, JavaScript (Service Worker, Manifest)
* **Backend:** Node.js, Express.js
* **Containers:** Docker, Docker Compose
* **Testes:** Playwright (para E2E)
* **CI/CD:** GitHub Actions