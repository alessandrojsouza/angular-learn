## HttpClient

**O que é o HttpClient ?**

- O *HttpClient* é um módulo do Angular que fornece uma maneira fácil de fazer solicitações HTTP em aplicações Angular.
- Ele é uma classe que faz parte do módulo *@angular/common/http.*

**Por que é importante ?**

- Muitas aplicações web precisam interagir com servidores para buscar ou enviar dados. O *HttpClient* torna isso possível de forma eficiente e organizada.
- Ele lida com detalhes de baixo nível, como a criação e manipulação de solicitações e respostas HTTP.

**Como ele se encaixa no Desenvolvimento Web ?**

- O *HttpClient* é usado para se comunicar com APIs RESTful, serviços web e outros recursos HTTP.
- É uma parte essencial do desenvolvimento front-end quando você precisa buscar dados do servidor ou atualizar dados no servidor.

**Configuração básica do HttpClient**

```typescript
import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) { }
```

- Para usar o HttpClient, primeiro importe-o do módulo **@angular/common/http**.
- Em seguida, injete-o como uma dependência no construtor de um componente ou serviço.
- Agora você pode usar *this.http* para fazer solicitações HTTP na sua aplicação.

## HttpClient e RxJS

RxJS é uma biblioteca JavaScript que se tornou um dos pilares fundamentais no desenvolvimento de aplicações web modernas, especialmente em ambientes reativos e assíncronos.

Aqui estão alguns conceitos-chave relacionados ao RxJS:

1. **Observables**: Os Observables são o núcleo do RxJS. Eles representam uma fonte de dados que pode emitir valores ao longo do tempo. Esses valores podem ser eventos do DOM, respostas de API, cliques do usuário, ou qualquer outra coisa que você queira observar.

2. **Operators**: Os operadores são funções que permitem transformar, filtrar, combinar e manipular os dados que fluem através de um Observable. Existem muitos operadores disponíveis, como **map**, **filter**, **merge**, **concat**, e muitos outros.

3. **Subscriptions**: Uma Subscription é um objeto que representa a execução de um Observable e permite desinscrever-se dele quando não for mais necessário. Isso é importante para evitar vazamentos de memória.

4. **Observers**: Observers são os consumidores dos Observables. Eles definem o que fazer quando um Observable emite valores, geralmente na forma de funções que lidam com esses valores.

5. **Fluxo de Dados Assíncrono**: O RxJS é especialmente útil quando se trabalha com operações assíncronas, como requisições de API, eventos do DOM ou qualquer coisa que não seja controlada diretamente pelo seu código.

6. **Programação Reativa**: A programação reativa é um paradigma de programação que se concentra na propagação de mudanças de estado. Com o RxJS, você pode criar pipelines de dados reativos que respondem automaticamente às mudanças nos dados.

7. **Compatibilidade Multiplataforma**: O RxJS é uma biblioteca JavaScript, mas suas ideias e conceitos podem ser aplicados em várias linguagens de programação. Existem implementações Rx em outras linguagens, como RxJava para Java e RxSwift para Swift.

O HttpClient e o RxJS  têm uma relação estreita no contexto de desenvolvimento de aplicações Angular. 

- **Observables no HttpClient**: O HttpClient utiliza Observables do **RxJS** para lidar com solicitações e respostas HTTP de forma assíncrona e reativa. Quando você faz uma solicitação HTTP usando o HttpClient, ele retorna um Observable que você pode assinar (*subscribe*) para receber os resultados.

- **Tratamento de Respostas Assíncronas**: As solicitações HTTP são operações assíncronas, pois você está aguardando uma resposta do servidor. O **RxJS** é uma biblioteca que lida de maneira eficiente com fluxos de dados assíncronos e eventos. Portanto, o HttpClient usa Observables do RxJS para lidar com essas respostas de forma reativa.

- **Operadores do RxJS com HttpClient**: Você pode usar os operadores do RxJS em conjunto com o HttpClient para manipular e transformar os dados de resposta. Por exemplo, você pode usar o operador **map** para transformar os dados da resposta antes de processá-los ou usar o operador **catchError** para lidar com erros de solicitação.


### Obtendo dados via API REST (HTTP GET)

- Obtendo dados de um servidor
- Usando o método **.get()**

```typescript
this.http.get('https://api.example.com/data').subscribe(data => {
  console.log(data);
});
```

### Atualizando dado via API REST (HTTP PUT)

- Atualizando dados no servidor
- Usando o método **.put()**

```typescript
const newData = { name: 'Novo Nome', age: 25 };
this.http.put('https://api.example.com/data/1', newData).subscribe(response => {
  console.log(response);
});
```

### Excluindo dados via API REST (HTTP DELETE)

- Excluindo dados no servidor
- Usando o método **.delete()**

```typescript
this.http.delete('https://api.example.com/data/1').subscribe(response => {
  console.log(response);
});
```

### Inserindo novos dados via API REST (HTTP POST)

- Enviando novos dados para o servidor
- Usando o método **.post()**

```typescript
const newData = { name: 'Novo Nome', age: 25 };
this.http.post('https://api.example.com/data', newData).subscribe(response => {
  console.log(response);
});
```

## Tratando Erros

- Tratamento de erros com *catchError*
- Exemplo de tratamento de erro

```typescript
this.http.get('https://api.example.com/data').pipe(
  catchError(error => {
    console.error('Erro:', error);
    return throwError('Algo deu errado.');
  })
).subscribe(data => {
  console.log(data);
});
```