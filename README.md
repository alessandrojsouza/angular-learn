## Angular Router

O roteamento é parte de muitas aplicações web modernas, permitindo que os usuários naveguem entre diferentes partes do aplicativo sem a necessidade de recarregar a página. O Angular oferece um módulo de roteamento que facilita a implementação de navegação entre diferentes componentes e visualizações.

### Criando o módulo de roteamento

Você precisa criar o módulo de roteamento '_AppRoutingModule_' e definir as rotas do seu aplicativo nele. Caso não tenha criado esse módulo durante a criação do projeto execute o código abaixo:

```bach
ng generate module app-routing --flat --module=app
```

### Configurando o Roteamento

Existem três blocos de construção fundamentais para criar uma rota.

1. Importação do Módulo de Roteamento no arquivo '_app.module.ts_'

Importe o **AppRoutingModule** para o **AppModule** e adicione-o ao array de importações.

```typescript
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module"; // Importa AppRoutingModule
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, // adiciona AppRoutingModule ao array de importações do AppModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

2. Importação de **RouterModule** e **Routes** para o seu módulo de roteamento ('_AppRoutingModule_').

```typescript
import { RouterModule, Routes } from "@angular/router"; // Importa RouterModule e Routes

const routes: Routes = []; //array de rotas

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

3.  Definição das rotas em Routes array.

Cada rota do array é um objeto JavaScript que contém duas propriedades. A primeira propriedade, **path**, define o caminho da URL para a rota. A segunda propriedade, componente, define o **componente** que Angular deve usar para o caminho correspondente.

```typescript
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "sobre", component: SobreComponent },
  { path: "contato", component: ContatoComponent },
];
```

### Navegando entre rotas

A navegação entre as rotas pode ser realizada usando a diretiva '_routerLink_' nos links do seu template ou através do serviço '_Router_' no código.

Usando routerLink no Template

```html
<a routerLink="/">Home</a>
<a routerLink="/sobre">Sobre</a>
<a routerLink="/contato">Contato</a>
```

Diponibilizando rotas no Template

```html
<router-outlet></router-outlet>
```

Navegação Programática com '_Router_':

```typescript
import { Router } from '@angular/router';

// ...

constructor(private router: Router) {}

navegarParaSobre() {
  this.router.navigate(['/sobre']);
}
```

### Roteamento com Parâmetros

Você pode passar parâmetros para as rotas para permitir que os componentes exibam informações específicas.

Definindo Rota com Parâmetro:

```typescript
{ path: 'produto/:id', component: DetalhesProdutoComponent }
```

Acessando o Parâmetro no Componente:

```typescript
import { ActivatedRoute } from '@angular/router';

// ...

constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const produtoId = params.get('id');
    // Lógica para carregar detalhes do produto com base no ID.
  });
}
```

Usando routerLink no Template

```html
<a routerLink="/produto/1">Detalhar Produto</a>
```

### Roteamento com Query Params

Além de rotear com parâmetros de rota, o Angular também permite o uso de **_query parameters_** (parâmetros de consulta) para passar informações entre as rotas. Os query parameters são partes da URL após o caractere de interrogação **(?)** e são frequentemente usados para filtrar, classificar ou fornecer informações adicionais.

Passos para definir rotas com Query Params:

1. Definir a rota em '_AppRoutingModule.ts_'

```typescript
{ path: 'pesquisa', component: PesquisaComponent }
```

2. Montar Query Params no template

```html
<a [routerLink]="['/pesquisa']" [queryParams]="{ filtro: 'ativo', ordem: 'desc' }">Pesquisar</a>
```

Passos para acessar Query Params no Componente:

1. Importando o Módulo _ActivatedRoute_:

```typescript
import { ActivatedRoute } from "@angular/router";
```

2. Acessando os Query Params:

```typescript
constructor(private route: ActivatedRoute) {}

ngOnInit() {
  this.route.queryParams.subscribe(params => {
    const filtro = params['filtro'];
    const ordem = params['ordem'];
    // Lógica para usar os query params.
  });
}
```

### Navegando com Query Params

Você também pode navegar para uma rota específica com query params programaticamente.

```typescript
import { Router } from '@angular/router';

// ...

constructor(private router: Router) {}

navegarComQueryParams() {
  const queryParams = {
    filtro: 'ativo',
    ordem: 'desc'
  };

  this.router.navigate(['/pesquisa'], { queryParams });
}
```

### Roteamento com Redirecionamento

Você pode definir redirecionamentos para garantir que os URLs antigos sejam redirecionados para as rotas atualizadas.

```typescript
{ path: 'pagina-antiga', redirectTo: '/nova-rota' }
```

### Rotas Coringa

Um aplicativo que funcione bem deve lidar normalmente quando os usuários tentam navegar para uma parte de seu aplicativo que não existe. Para adicionar essa funcionalidade ao seu aplicativo, configure uma rota curinga. O roteador Angular seleciona essa rota sempre que a URL solicitada não corresponde a nenhum caminho do roteador.

Exemplo

```typescript
{ path: '**', component: <component-name> }
```

Os dois asteriscos, indicam ao Angular que esta definição de rotas é uma rota curinga. Para a propriedade do componente, você pode definir qualquer componente em seu aplicativo. Escolhas comuns incluem um **PageNotFoundComponent** específico do aplicativo, que você pode definir para exibir uma página **404** para seus usuários; ou um redirecionamento para o componente principal do seu aplicativo.

### Guardas de Rotas

Os guardas de rotas permitem controlar o acesso a rotas com base em determinadas condições, como autenticação ou autorização.

```typescript
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AutenticacaoGuard implements CanActivate {
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    // Lógica de autenticação aqui...
  }
}
```

## Prática

Aqui está a sugestão para a prática:

**Tema do Projeto:** Lista de Tarefas

**Descrição:** Criar uma aplicação de Lista de Tarefas (To-Do List), onde os usuários podem adicionar, marcar como concluídas e remover tarefas. A aplicação deve ser desenvolvida usando o framework Angular, aplicando os conceitos aprendidos na aula.

**Requisitos:**

- Crie uma rota para cadastro de tarefas;
- Crie uma rota para excluir uma tarefa;
- Crie uma rota para marcar uma tarega como concluida;
- Crie uma rota para visualizar as terfas cadastradas;