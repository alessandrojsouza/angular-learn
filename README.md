## Angular Componentes

Os componentes são blocos de construção essenciais do Angular. Eles desempenham um papel central na arquitetura do framework, permitindo que você crie partes reutilizáveis e independentes da interface do usuário, cada uma com sua própria lógica, template e estilo.

### Criando um Componente

Para criar um novo componente, você pode usar o Angular CLI (Command Line Interface) com o seguinte comando:

```bash
ng generate component nome-do-componente
```

Isso criará uma estrutura de arquivos para o novo componente, incluindo um arquivo **.ts** (código do componente), **.html** (template) e **.css** (estilos), entre outros.

**Estrutura de um Componente:**

O código de um componente em Angular consiste em três partes principais:

- o decorator @Component
- a classe do componente
- o template associado.

Exemplo:

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-exemplo", // Seletor do componente, usado no template.
  templateUrl: "./exemplo.component.html", // Caminho do template do componente.
  styleUrls: ["./exemplo.component.scss"], // Arquivos de estilo do componente.
})
export class ExemploComponent {
  // Lógica do componente aqui...
}
```

**Usando um Componente:**

Você pode usar um componente em outros componentes ou templates usando o seletor definido no decorator @Component.

Exemplo de Uso de um Componente:

```html
<app-exemplo></app-exemplo>
```

### Comunicação entre Componentes

Os componentes podem se comunicar entre si através de inputs e outputs.

**Inputs**: Permitem que um componente pai passe dados para um componente filho.

```typescript
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-filho",
  template: "<p>{{ mensagem }}</p>",
})
export class FilhoComponent {
  @Input() mensagem: string;
}
```

```html
<app-filho [mensagem]="mensagemDoPai"></app-filho>
```

**Outputs**: Permitem que um componente filho envie eventos para um componente pai.

_Configuração do componente filho._

```typescript
import { Component, Output, EventEmitter } from "@angular/core";

@Component({
<<<<<<< HEAD
  selector: "app-filho",
  template: '<button (click)="enviarMensagem()">Enviar Mensagem</button>',
=======
  selector: 'app-filho',
  template: '<button (click)="onClickEnviar()">Enviar Mensagem</button>'
>>>>>>> 63a57635714f8959d4c5aa1c824f5372a8376c38
})
export class FilhoComponent {
  @Output() mensagemOutEvent = new EventEmitter<string>();

  onClickEnviar() {
    this.mensagemOutEvent.emit('Mensagem do Filho');
  }
}
```

# <<<<<<< HEAD

_Configuração do componente pai - template._

> > > > > > > 63a57635714f8959d4c5aa1c824f5372a8376c38

```html
<app-filho (mensagemOutEvent)="acaoNoPai($event)"></app-filho>
```

<<<<<<< HEAD

### Ciclo de vida

=======
_Configuração do componente pai - classe._

```typescript
...
acaoNoPai(evento:string):void {
    alert(evento)
  }
...
```

Para mais informações sobre comunicação entre componentes ver documentação do Angular em [https://angular.io/guide/inputs-outputs](https://angular.io/guide/inputs-outputs)

> > > > > > > 63a57635714f8959d4c5aa1c824f5372a8376c38

O ciclo de vida de um componente Angular é composto por uma série de eventos que ocorrem desde a sua criação até a sua destruição. Cada evento fornece a oportunidade de executar ações específicas em momentos-chave da vida útil do componente.

Aqui estão os principais eventos do ciclo de vida de um componente, acompanhados de exemplos que demonstram como eles podem ser usados:

#### ngOnInit

O evento ngOnInit é acionado logo após a inicialização de um componente. É um bom lugar para realizar inicializações, como buscar dados de um serviço ou configurar variáveis.

```typescript
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exemplo",
  template: "<p>{{ mensagem }}</p>",
})
export class ExemploComponent implements OnInit {
  mensagem: string;

  ngOnInit() {
    this.mensagem = "Olá, mundo!";
  }
}
```

#### ngOnChange

O evento _ngOnChanges_ é acionado sempre que um valor de entrada _(@Input)_ é alterado. Ele fornece um objeto que contém as alterações detectadas.

```typescript
import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-filho",
  template: "<p>{{ mensagem }}</p>",
})
export class FilhoComponent implements OnChanges {
  @Input() mensagem: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.mensagem) {
      console.log("Valor de mensagem alterado para:", changes.mensagem.currentValue);
    }
  }
}
```

#### ngDoCheck

O evento _ngDoCheck_ é acionado sempre que a detecção de mudanças é executada. Pode ser usado para realizar verificações manuais de mudanças.

```typescript
import { Component, DoCheck } from "@angular/core";

@Component({
  selector: "app-exemplo",
  template: "<p>{{ contador }}</p>",
})
export class ExemploComponent implements DoCheck {
  contador: number = 0;

  ngDoCheck() {
    console.log("ngDoCheck executado.");
    // Lógica para verificar mudanças manuais aqui...
  }
}
```

#### ngOnDestroy

O evento _ngOnDestroy_ é acionado quando um componente está prestes a ser destruído. É usado para realizar ações de limpeza, como cancelar inscrições, desconectar de serviços, etc.

```typescript
import { Component, OnDestroy } from "@angular/core";

@Component({
  selector: "app-exemplo",
  template: "<p>Componente será destruído em breve.</p>",
})
export class ExemploComponent implements OnDestroy {
  ngOnDestroy() {
    console.log("Componente destruído.");
    // Ações de limpeza aqui...
  }
}
```

**Nota:**

Lembre-se de que os eventos do ciclo de vida são opcionais e você não precisa implementar todos eles em cada componente. Escolha os eventos que são relevantes para o que você deseja alcançar e utilize-os conforme necessário.

Além dos métodos principais do ciclo de vida do Angular, como _ngOnInit_, _ngOnChanges_, _ngDoCheck_ e _ngOnDestroy_, existem outros métodos, como **ngAfterContentInit**, **ngAfterContentChecked**, **ngAfterViewInit** e **ngAfterViewChecked**, que oferecem oportunidades para interagir com o conteúdo projetado e a visualização do componente. Compreender e utilizar esses métodos adequadamente permitirá que você controle e otimize a lógica do seu componente em várias fases do ciclo de vida.

## Prática

Aqui está a sugestão para a prática:

**Tema do Projeto:** Lista de Tarefas

**Descrição:** Criar uma aplicação de Lista de Tarefas (To-Do List), onde os usuários podem adicionar, marcar como concluídas e remover tarefas. A aplicação deve ser desenvolvida usando o framework Angular, aplicando os conceitos aprendidos na aula.

**Requisitos:**

- Criar um componente para o header do sistema;
- Criar um componente para o input de inclusão de tarefas;
- Criar um componente de apresentação das tarefas em uma tabela.
