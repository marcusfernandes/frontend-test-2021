## Começando

- faça um _fork_ do projeto
- clone o projeto em sua máquina
- execute `npm install -g @angular/cli`
- dentro da pasta do projeto, execute `npm install`
- execute `ng serve -o`

O layout está disponível no _[Figma](https://www.figma.com/proto/40NueHzM24sBaPmtygFger/Teste-front-end?node-id=5%3A355&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=5%3A355)_.

## Estrutura do projeto

```text
| src/
| | styles.scss // arquivo de estilos global
| | app/
| | | components/
| | | | menu-body/
| | | | | ...
| | | | menu-footer/
| | | | | ...
| | | | menu-header/
| | | | | ...
| | | app.component.html
| | | app.component.scss // arquivo de estilos do app.component
| | | app.component.ts
```

Os estilos que forem criados no arquivo `styles.scss` têm efeito em todos os componentes e respeitam a forma "tradicional" com que o CSS funciona.

Os estilos colocados nos arquivos `.scss` dos componentes afetam apenas os elementos dentro do arquivo `.html` do componente.

Este é um mecanismo conhecido como _["View Encapsulation"](https://angular.io/guide/view-encapsulation)_.

Nos componentes `menu-*` há trechos prontos que indicam como laços - `*ngFor` - e condicionais - `*ngIf` - functionam no Angular. Mais coisas sobre a linguagem de _template_ podem ser encontradas na [documentação](https://angular.io/guide/built-in-directives).
