
# Projeto Netshoes

O objetivo do projeto é criar uma aplicação funcional e fácil de usar, onde todas as interações ocorrem diretamente pelo terminal. A finalidade é monitorar produtos específicos, garantindo uma experiência de uso simples e eficiente.


## Requisitos

- Node.js (v12 ou superior)
- npm (v6 ou superior)

## Demonstração

[Clique aqui para ver o video demonstrativo](https://youtu.be/ckFmOFLzSjo)


## Aprendizados

Utilizei o Playwright com Node.js devido à natureza dinâmica das imagens no site da Netshoes. Essa biblioteca lida eficientemente com elementos dinâmicos e oferece diversas funcionalidades úteis para o projeto.

Anteriormente, trabalhei com Cypress em um projeto, e explorar uma nova biblioteca foi uma experiência interessante. Decidi não usar Cypress neste projeto porque ele é mais pesado e robusto do que o necessário para as nossas necessidades atuais.



## Instalação

Faça o clone do projeto

```bash
  git clone https://github.com/a-mandaflores/WebScrape
```
Entre na pasta do projeto    
```bash
  cd WebScrape
```
Instale os pacotes  
```bash
  npm install
```
Inicie o projeto 
```bash
  npm run start
```
## Como funciona

#### Inserir um Produto
Pressione S para verificar um produto. Nesse momento você precisa inserir o link do produto que deseja monitorar
Siga as instruções no terminal para inserir a URL do produto que deseja monitorar.

Exemplo de produto para monitoramento -> [Clique aqui](https://www.netshoes.com.br/p/tenis-masculino-adidas-coreracer-chumbo+preto-NQQ-4635-309)

#### Verificar Produtos Monitorados
Pressione A para verificar todos os produtos que estão sendo monitorados.
O sistema exibirá a lista de produtos e seus preços atuais.
Monitoramento Automático
O sistema verifica os preços dos produtos monitorados a cada minuto automaticamente.

#### Outras instruções
Você também comsegue ver mais detalhes do protudo, é só seguir as instruções no terminal

#### Monitoramento
Todos os produtos que você adicionar ao monitoramento vai fazer essa busca pelo preço a cada 1 minuto e retornar o produto caso o valor esteja mais baixo.
## Tecnologias utilizadas
- Node.js
- Playwright
