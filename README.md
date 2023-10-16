# Angular Data Binding

### O que é Data Binding?

O Data Binding é uma das funcionalidades fundamentais do Angular. Ele permite que você conecte os dados do modelo (**classe do componente**) com o template (**interface do usuário**), permitindo que as alterações feitas nos dados sejam refletidas automaticamente na interface do usuário e vice-versa.

Existem quatro tipos principais de data binding no Angular: _Interpolation_; _Property Binding_; _Event Binding_; _Two-Way Binding_. 

### Interpolation `{{ }}`

A interpolação é uma forma simples de data binding que permite exibir valores do modelo no template, dentro de elementos de texto ou atributos.

Exemplo:

```html
<h1>{{ titulo }}</h1>
<p>{{ descricao }}</p>

```
### Property Binding `[ ]`

O Property Binding permite atribuir valores de propriedades do modelo a atributos de elementos HTML.

Exemplo:

```html
<button [disabled]="isBotaoDesabilitado">Clique aqui</button>

```

### Event Binding `( )`

O Event Binding permite vincular eventos (como cliques, mouseover, etc.) a métodos do modelo no componente.

Exemplo:

```html
<button (click)="botaoClicado()">Clique aqui</button>

```

### Two-Way Binding `[( )]`

O Two-Way Binding é uma combinação do *Property Binding* e do *Event Binding*. Ele mantém a sincronização bidirecional entre o modelo e o template. Qualquer alteração no modelo ou no template refletirá automaticamente no outro.

Exemplo:

```html
<input [(ngModel)]="nome">
<p>Olá, {{ nome }}!</p>

```

**Como habilitar o Two-Way Binding?**

Para utilizar o *Two-Way Binding*, é necessário importar o módulo **FormsModule** no seu módulo principal (normalmente *app.module.ts*). Certifique-se de que a importação está correta no array imports do NgModule:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule], // Adicione FormsModule aqui
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

**Observações sobre Data Binding:**

- O Data Binding é uma maneira poderosa de conectar os dados do modelo e o template, tornando a aplicação mais dinâmica e reativa às mudanças nos dados.
- É importante ter cuidado para evitar ciclos infinitos de atualização quando usar o Two-Way Binding, pois alterações no modelo podem desencadear atualizações contínuas no template e vice-versa.
- Ao usar o Two-Way Binding com a diretiva ngModel, lembre-se de importar o FormsModule como explicado anteriormente.
  
*Resumo*

O Angular Data Binding é uma das principais razões pelas quais o framework é tão eficiente para o desenvolvimento de aplicações web reativas e interativas. Com o Data Binding, você pode criar interfaces de usuário dinâmicas e responsivas, facilitando a interação dos usuários com sua aplicação.

## Class e Style Binding no Angular

Além dos quatro tipos principais de data binding mencionados anteriormente, o Angular oferece recursos adicionais para vincular classes de CSS e estilos diretamente ao template.

Esses recursos são conhecidos como **Class Binding** e **Style Binding**.

### Class Binding

O Class Binding permite adicionar ou remover classes CSS dinamicamente a elementos HTML com base em valores de propriedades do modelo. Isso é útil quando você deseja alterar o estilo de um elemento com base em determinadas condições ou estados do aplicativo.

Exemplo:

```html
<button [class.botao-destaque]="isDestaque">Clique aqui</button>
```

Neste exemplo, a classe CSS **"botao-destaque"** será adicionada ao botão somente quando a propriedade **isDestaque** no componente for verdadeira.

### Style Binding

O Style Binding permite definir estilos CSS diretamente no template, com base em valores de propriedades do modelo. Isso permite que você altere propriedades de estilo, como cor, tamanho, margens, etc., dinamicamente.

Exemplo:

```html
<p [style.color]="corTexto">Este texto possui uma cor dinâmica</p>
```

Neste exemplo, o estilo CSS **color** do parágrafo será definido com base no valor da propriedade **corTexto** no componente.


**Aplicando condições com Class e Style Binding**

Além de simplesmente adicionar classes e estilos, você também pode aplicar condições complexas usando **expressões ternárias** ou o operador **&&** (AND) para combinar várias condições.

Exemplo usando expressão ternária:

```html
<button [class.botao-destaque]="isDestaque ? true : false">Clique aqui</button>
```

Exemplo usando o operador && (AND):

```html
<button [class.botao-destaque]="isDestaque && !isDesabilitado">Clique aqui</button>
```

**Class e Style Binding em Two-Way Binding**

Você também pode combinar Class Binding ou Style Binding com Two-Way Binding para criar interfaces de usuário altamente dinâmicas e interativas.

Exemplo com Two-Way Binding e Class Binding:

```html
<input [(ngModel)]="classeCSS" [class]="classeCSS">
```

Neste exemplo, o valor da propriedade classeCSS no modelo é vinculado ao atributo de classe do elemento input, permitindo que o usuário altere dinamicamente a classe CSS aplicada ao elemento.

*Resumo*

Class Binding e Style Binding são recursos poderosos do Angular para aplicar estilos e classes de forma dinâmica no template com base nas propriedades do modelo. Essas funcionalidades tornam o desenvolvimento de interfaces de usuário interativas e reativas mais fácil e eficiente, permitindo criar aplicações mais dinâmicas e com melhor experiência do usuário.


## Prática

Aqui está a sugestão para a prática:

**Tema do Projeto**: Lista de Tarefas

**Descrição**: Criar os templates para uma aplicação de Lista de Tarefas (To-Do List), onde os usuários podem adicionar, marcar como concluídas e remover tarefas. A aplicação deve ser desenvolvida usando o framework Angular, aplicando os conceitos aprendidos na aula.

*Requisitos*:

- A aplicação deve ter um componente principal que representará a Lista de Tarefas.
- O template deve permitir gerenciar as tarefas (adicionar, marcar como concluída, remover).
- Use [BootStrapCDN](https://getbootstrap.com.br/docs/4.1/getting-started/introduction/) para estilizar o projeto.
