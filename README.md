## Angular Diretivas

As Diretivas são uma parte fundamental do Angular, permitindo estender a sintaxe HTML para **adicionar comportamentos** personalizados aos elementos da página. 

Existem três tipos principais de diretivas no Angular: 

- Diretivas de Atributo
- Diretivas de Estrutura
- Diretivas de Componente

### Diretivas de Atributo

As Diretivas de Atributo são usadas para alterar o comportamento de elementos HTML existentes, adicionando ou modificando atributos e comportamentos. Elas são aplicadas como atributos de elementos no template.

Exemplo:

```html
<!-- Diretiva de Atributo -->
<p [appDestaque]="destacarTexto">Este parágrafo será destacado</p>

```

Aqui, **'appDestaque'** é uma Diretiva de Atributo personalizada que altera o estilo do parágrafo quando **'destacarTexto'** for verdadeiro.

### Diretivas de Estrutura

As Diretivas de Estrutura são usadas para manipular a estrutura do DOM, adicionando ou removendo elementos HTML do template. Elas são aplicadas como atributos estruturais em elementos HTML.

#### Diretiva ngIf

Exemplo:

```html
<!-- Diretiva de Estrutura -->
<div *ngIf="mostrarElemento">
  Este elemento só será exibido se mostrarElemento for verdadeiro.
</div>

```

Aqui, **'*ngIf'** é uma Diretiva de Estrutura que adiciona ou remove o elemento <div> com base no valor de **'mostrarElemento'**.

#### Diretiva ngFor

A diretiva ***ngFor** é uma das diretivas de estrutura mais utilizadas no Angular. Ela permite iterar sobre uma coleção de elementos e renderizá-los no template. Com o *ngFor, você pode criar listas dinâmicas, tabelas ou exibir repetidamente elementos com base nos dados do modelo.

Exemplo:

A sintaxe do *ngFor é simples e consiste em atribuir uma variável local para cada item da coleção que você deseja iterar. A diretiva pode ser aplicada a qualquer elemento HTML no template.

```html
<div *ngFor="let item of itens">
  {{ item }}
</div>
```

Neste exemplo, estamos iterando sobre uma coleção chamada *itens*, e para cada item na coleção, o template renderizará um novo **<div>** contendo o valor do item.

**Índice de Itens:** Além do valor do item, é possível acessar o índice do item no loop e rastrear os itens por uma propriedade exclusiva.

Acessando o Índice:

```html
<div *ngFor="let item of itens; let i = index">
  Item {{ i }}: {{ item }}
</div>
```

#### Diretiva  ngSwitch, ngSwitchCase e ngSwitchDefault

A diretiva **ngSwitch** é uma diretiva de estrutura do Angular que permite criar declarações condicionais no template com base em uma expressão. É uma maneira mais legível e organizada de criar lógicas condicionais do que usar várias diretivas ***ngIf**.


**Sintaxe do ngSwitch:**

A sintaxe do **ngSwitch** é semelhante a um switch em JavaScript. A diretiva **ngSwitch** é aplicada a um elemento pai que contém vários elementos filhos **ngSwitchCase** e um elemento **ngSwitchDefault**.

```html
<div [ngSwitch]="valorExpressao">
  <div *ngSwitchCase="valor1">Conteúdo 1</div>
  <div *ngSwitchCase="valor2">Conteúdo 2</div>
  <div *ngSwitchCase="valor3">Conteúdo 3</div>
  <div *ngSwitchDefault>Conteúdo padrão</div>
</div>
```

1. O atributo **[ngSwitch]** recebe uma expressão que será comparada com os valores das **ngSwitchCase**.
2. Cada elemento **ngSwitchCase** contém um valor que será comparado com a expressão do **ngSwitch**. O conteúdo do **ngSwitchCase** é renderizado se a expressão for igual ao valor do **ngSwitchCase**.
3. O elemento **ngSwitchDefault** é opcional e é renderizado se a expressão não corresponder a nenhum dos valores nas **ngSwitchCase**.

Exemplo:

```html
<div [ngSwitch]="opcao">
  <p *ngSwitchCase="'A'">Você escolheu a opção A</p>
  <p *ngSwitchCase="'B'">Você escolheu a opção B</p>
  <p *ngSwitchCase="'C'">Você escolheu a opção C</p>
  <p *ngSwitchDefault>Escolha uma opção válida (A, B ou C).</p>
</div>
```

**Nota:**

Observe que o valor do **ngSwitchCase** está entre aspas simples, pois é uma string. Se você estiver usando números ou outras variáveis, não é necessário usar aspas.


Aplicando o ngSwitch com números:

```html
<div [ngSwitch]="opcaoNumero">
  <p *ngSwitchCase="1">Você escolheu a opção 1</p>
  <p *ngSwitchCase="2">Você escolheu a opção 2</p>
  <p *ngSwitchCase="3">Você escolheu a opção 3</p>
  <p *ngSwitchDefault>Escolha uma opção válida (1, 2 ou 3).</p>
</div>
```

#### Diretiva Personalizada

Você também pode criar suas próprias Diretivas personalizadas no Angular. Para isso, você precisa usar a função @Directive e implementar o código necessário para a diretiva.

Exemplo de uma Diretiva de Atributo Personalizada:

```typescript
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDestaque]' // Seletor para usar a diretiva no template.
})
export class DestaqueDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.realcarTexto('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.realcarTexto(null);
  }

  private realcarTexto(cor: string) {
    this.el.nativeElement.style.backgroundColor = cor;
  }
}
```

Neste exemplo, criamos uma Diretiva de Atributo chamada **appDestaque**, que destaca o texto do elemento quando o mouse entra na área do elemento e remove o destaque quando o mouse sai.

**Considerações Finais**

As Diretivas são um recurso poderoso e versátil do Angular, permitindo que você crie comportamentos personalizados e reutilizáveis no template. Ao combinar Diretivas com os demais recursos do Angular, como Data Binding e Services, você pode criar aplicações web mais interativas e dinâmicas, facilitando a manutenção e o desenvolvimento de interfaces ricas para os usuários.

## Prática 