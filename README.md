## Angular Services

Os serviços desempenham um papel fundamental na arquitetura do Angular, permitindo compartilhar lógica, dados e funcionalidades entre componentes de maneira eficiente e organizada. Eles são classes que podem ser injetadas em componentes, módulos e outros serviços, promovendo a reutilização de código e a separação de preocupações.


### Criando um Serviço

Para criar um novo serviço, você pode usar o Angular CLI com o seguinte comando:

```bash
ng generate service nome-do-servico
```

Exemplo de um Serviço
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Indica que o serviço será injetado no nível raiz (singleton).
})
export class MeuServico {
  dados: string[] = [];

  adicionarDado(dado: string) {
    this.dados.push(dado);
  }

  obterDados(): string[] {
    return this.dados;
  }
}
```

**Injetando um Serviço**

Os serviços podem ser injetados em componentes, módulos ou outros serviços através do mecanismo de injeção de dependência do Angular.

Exemplo de Injeção de Serviço em um Componente
```typescript
import { Component } from '@angular/core';
import { MeuServico } from './meu-servico.service';

@Component({
  selector: 'app-exemplo',
  template: '<button (click)="adicionar()">Adicionar Dado</button>'
})
export class ExemploComponent {
  constructor(private meuServico: MeuServico) {}

  adicionar() {
    this.meuServico.adicionarDado('Novo dado');
  }
}
```

**Uso de Serviços para Compartilhar Dados**

Os serviços são excelentes para compartilhar dados e estados entre componentes. Eles atuam como um intermediário entre componentes, permitindo que um componente atualize os dados e outros componentes sejam notificados dessas alterações.

Exemplo de Uso de um Serviço para Compartilhar Dados
```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosCompartilhadosService {
  private dadosSubject = new BehaviorSubject<string>('');

  atualizarDados(dados: string) {
    this.dadosSubject.next(dados);
  }

  obterDados() {
    return this.dadosSubject.asObservable();
  }
}
```
### Resumo

Os serviços desempenham um papel crucial no desenvolvimento de aplicativos Angular, permitindo a reutilização de código, a separação de preocupações e o compartilhamento eficiente de dados e funcionalidades entre componentes. Ao criar e utilizar serviços adequadamente, você pode criar uma arquitetura mais modular, flexível e escalável para suas aplicações.

## Prática

Aqui está a sugestão para a prática:

**Tema do Projeto:** Lista de Tarefas

**Descrição:** Criar uma aplicação de Lista de Tarefas (To-Do List), onde os usuários podem adicionar, marcar como concluídas e remover tarefas. A aplicação deve ser desenvolvida usando o framework Angular, aplicando os conceitos aprendidos na aula.

**Requisitos:**

- Crie uma classe de serviço para concentrar as chamadas a API do To-do list;
- Crie uma API para o To-Do List com JSON-Server (https://www.npmjs.com/package/json-server) 