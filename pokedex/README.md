# Pokédex Frontend

![148shots_so](https://github.com/berdfandrade/pokedex-front/assets/96706881/b65212d7-717e-4faf-99c4-1238483b0c54)


Este é um aplicativo frontend para a Pokédex que consome dados da API [PokéAPI Rocketman](https://fast-poke-api.vercel.app). Ele foi desenvolvido usando React e Chakra UI.

### Deploy

O deploy do projeto se encontra aqui [Pokédex](https://pokedex-front-peach.vercel.app/)

## Funcionalidades

- **Listagem de Pokémons**: Exibe uma lista de Pokémons com paginação.
- **Pesquisa de Pokémons**: Permite pesquisar Pokémons pelo nome.
- **Suporte ao modo escuro**: Alternância entre modo claro e escuro.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Chakra UI**: Biblioteca de componentes para React com um design acessível.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.

## Instalação

Para rodar o projeto localmente, siga os passos abaixo:

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

## Estrutura do Projeto

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

## Componentes Principais

### `Pokedex.tsx`

Este é o componente principal que renderiza a Pokédex e possui as seguintes funcionalidades:

- Faz uma requisição para a API para obter a lista de Pokémons.
- Implementa a paginação para navegar através dos Pokémons.
- Permite a pesquisa de Pokémons pelo nome.
- Suporta alternância entre modo claro e escuro.

### `PokeCell.tsx`

Este componente é responsável por exibir as informações de um Pokémon individual.

### `NotFoundMessage.tsx`

Este componente exibe uma mensagem quando nenhum Pokémon é encontrado na pesquisa.

### `Footer.tsx`

Este componente renderiza o rodapé da aplicação.

### `ToggleDarkModeButton.tsx`

Este componente adiciona um botão para alternar entre modo claro e escuro.

### `PokeballSpinner.tsx`

Este componente exibe um spinner de Pokébola enquanto os dados estão sendo carregados.

## Variáveis de Ambiente

Este projeto utiliza a API `https://fast-poke-api.vercel.app`. Caso você queira mudar a URL da API, você pode configurar as variáveis de ambiente em um arquivo `.env`.

```plaintext
REACT_APP_API_URL=https://fast-poke-api.vercel.app
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
