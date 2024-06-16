# Pokédex Fullstack Application

Este repositório contém tanto o frontend quanto o backend para uma aplicação Pokédex. A aplicação frontend foi desenvolvida em React com Chakra UI, enquanto o backend foi desenvolvido usando FastAPI.

## Deploy

- **Frontend**: [Pokédex Frontend Deploy](https://pokedex-front-peach.vercel.app/)
  - link do repositório : [Pokédex Frontend - repositório](https://github.com/berdfandrade/pokedex-front)
- **Backend**: [PokéAPI Rocketman Deploy](https://fast-poke-api.vercel.app/)
  - link do repositório : [Pokédex Backend - repositório](https://github.com/berdfandrade/poke-test)

## Funcionalidades

### Frontend

- **Listagem de Pokémons**: Exibe uma lista de Pokémons com paginação.
- **Pesquisa de Pokémons**: Permite pesquisar Pokémons pelo nome.
- **Suporte ao modo escuro**: Alternância entre modo claro e escuro.

### Backend

- **Listagem de Pokémons**: Obtenha uma lista de todos os Pokémons em ordem alfabética.
- **Listagem paginada de Pokémons**: Obtenha uma lista paginada de Pokémons.
- **Informações de um Pokémon específico**: Obtenha informações detalhadas de um Pokémon específico pelo nome.
- **Suporte a formatos JSON e XML**: Receba os dados em formato JSON ou XML.

## Tecnologias Utilizadas

- **Frontend**:
  - React
  - Chakra UI
  - Axios
  - TypeScript
- **Backend**:
  - FastAPI
  - Docker

## Instalação

### Rodando Localmente

#### Frontend

1. Clone este repositório:
    ```sh
    git clone https://github.com/berdfandrade/pokedex-front
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd pokedex-front
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```
4. Inicie o aplicativo:
    ```sh
    yarn dev
    ```
5. Acesse o aplicativo no navegador:
    ```
    http://localhost:5173
    ```

#### Backend

1. Clone este repositório:
    ```sh
    git clone https://github.com/berdfandrade/poke-test
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd poke-test
    ```
3. Crie um ambiente virtual e ative-o:
    ```sh
    python -m venv venv
    source venv/bin/activate  # No Windows use `venv\Scripts\activate`
    ```
4. Instale as dependências:
    ```sh
    pip install -r requirements.txt
    ```
5. Inicie a aplicação:
    ```sh
    uvicorn app:app --reload
    ```
6. Acesse a API no navegador:
    ```
    http://localhost:8000
    ```

### Usando Docker Compose

Para rodar tanto o frontend quanto o backend utilizando Docker Compose, siga os passos abaixo:

1. Clone este repositório:
    ```sh
    git clone https://github.com/berdfandrade/pokedex-fullstack
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd pokedex-fullstack
    ```
3. Certifique-se de que o Docker e o Docker Compose estão instalados em sua máquina.
4. Execute o Docker Compose:
    ```sh
    docker-compose up --build
    ```
5. Acesse o frontend no navegador:
    ```
    http://localhost:5173
    ```
6. Acesse a API no navegador:
    ```
    http://localhost:8000
    ```

## Estrutura do Projeto

### Frontend

```plaintext
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── PokeCell.tsx
│   │   ├── NotFoundMessage.tsx
│   │   ├── Footer.tsx
│   │   ├── ToggleDarkMode
│   │   │   └── ToggleDarkModeButton.tsx
│   │   └── Others
│   │       └── PokeballSpinner.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── package.json
└── README.md
```

### Backend

```plaintext
├── app.py
├── Dockerfile
├── pytest.ini
├── README.md
├── requirements.txt
├── src
│   ├── controllers
│   │   ├── helpers
│   │   │   ├── fetch_pokemons.py
│   │   │   └── xml_helpers.py
│   │   ├── __init__.py
│   │   ├── main_controller.py
│   ├── __init__.py
│   └── routes
│       ├── endpoints_docs.py
│       ├── endpoints.py
│       ├── __init__.py
│       ├── metodo.py
├── start.sh
├── tests
│   └── test_main.py
└── vercel.json
```

### Docker Compose

```yaml
version: '3.8'

services:
  api:
    build:
      context: ./py_poke_api
      dockerfile: Dockerfile
    ports:
      - "8000:8000"

  frontend:
    build:
      context: ./pokedex
      dockerfile: Dockerfile
    ports:
      - "5173:5173"
    depends_on:
      - api
```

## Contribuição

Se você quiser contribuir para este projeto, por favor, siga as etapas abaixo:

1. Fork o repositório.
2. Crie uma branch para sua feature ou correção de bug (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -am 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob os termos da licença MIT.

---