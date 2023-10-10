# Fundamentos do Framework Angular

### O que é o Angular?

O Angular é uma plataforma e um framework para construir aplicações cliente em HTML, CSS e JavaScript/TypeScript. Ele utiliza a abordagem de SPA (Single Page Application), permitindo que a aplicação seja carregada uma vez e, em seguida, as mudanças de conteúdo ocorram dinamicamente sem recarregar a página.

### Por que usar o Angular?

- **Produtividade**: O Angular fornece ferramentas e estruturas que facilitam o desenvolvimento ágil e eficiente.
- **Arquitetura sólida**: Seu design modular e orientado a componentes simplifica a organização do código e a reutilização de funcionalidades.
- **Performance**: O Angular otimiza o desempenho da aplicação, garantindo uma experiência rápida e fluida para os usuários.
- **Ecossistema e comunidade ativa**: A plataforma Angular possui uma grande comunidade de desenvolvedores e uma vasta quantidade de bibliotecas e recursos disponíveis.

### Principais características e benefícios

- **TypeScript**: O Angular é escrito em TypeScript, que adiciona recursos de tipagem estática ao JavaScript, tornando o código mais robusto e legível.
- **Data Binding**: O poderoso mecanismo de data binding facilita a sincronização dos dados entre os componentes e o template.
- **Injeção de Dependência**: O Angular possui um sistema de injeção de dependência que permite gerenciar as dependências entre os componentes de forma eficiente.
- **Diretivas**: As diretivas permitem estender a sintaxe HTML, criando comportamentos personalizados para os elementos da página.
- **Roteamento**: O roteador do Angular permite criar aplicações de várias páginas dentro de uma SPA, gerenciando as transições entre os componentes.
- **Testabilidade**: O Angular incentiva práticas de teste, tornando as aplicações mais confiáveis e fáceis de manter.

### Arquitetura do Angular

A arquitetura do Angular é baseada em alguns conceitos fundamentais, como componentes, módulos, serviços e diretivas. Esses elementos são combinados para criar uma estrutura sólida e modular para desenvolver aplicações web com eficiência e escalabilidade.

1. **Componentes**:

Os componentes são blocos de construção essenciais do Angular. Eles são responsáveis por controlar partes específicas da interface do usuário e podem ser reutilizados em diferentes partes da aplicação. Cada componente possui um template associado que define a estrutura do DOM a ser renderizada.

Exemplo de um componente Angular:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo', // Seletor do componente, usado para inserir o componente no template.
  templateUrl: './exemplo.component.html', // Caminho do template associado ao componente.
  styleUrls: ['./exemplo.component.scss'] // Arquivos de estilo associados ao componente.
})
export class ExemploComponent {
  // Lógica do componente aqui...
}
```

2. **Diretivas**:
As diretivas são instruções para o DOM. Elas podem ser utilizadas para modificar a aparência, comportamento ou estrutura do HTML. Existem diretivas incorporadas, como **ngIf** e **ngFor**, e você também pode criar suas próprias diretivas personalizadas.

Exemplo de uma diretiva personalizada:

```typescript
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDestacar]' // Seletor para usar a diretiva no template.
})
export class DestacarDirective {
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

3. **Serviços**:
Os serviços são classes que contêm lógica reutilizável e podem ser injetados em componentes e outros serviços. Eles são usados para compartilhar dados, realizar chamadas HTTP, realizar operações assíncronas e muito mais.

Exemplo de um serviço Angular:

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Configuração para tornar o serviço disponível em toda a aplicação.
})
export class ExemploService {
  // Lógica do serviço aqui...
}
```

4. **Módulos**:
Os módulos são utilizados para organizar o código em pedaços funcionais e independentes. Cada aplicação Angular tem pelo menos um módulo raiz (normalmente chamado de AppModule) que é responsável por inicializar a aplicação. Além disso, você pode criar módulos para organizar funcionalidades específicas.

Exemplo de um módulo Angular:

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExemploComponent } from './exemplo.component';

@NgModule({
  declarations: [ExemploComponent], // Componentes declarados neste módulo.
  imports: [CommonModule], // Módulos importados para uso neste módulo.
  exports: [ExemploComponent], // Componentes, diretivas e pipes disponíveis para outros módulos.
})
export class ExemploModule { }

```

5. **Templates**:
Os templates são uma parte vital da arquitetura do Angular. Eles definem a estrutura do DOM a ser renderizada para um determinado componente. Os templates são escritos em HTML e podem incluir diretivas e bindings para exibir dados e interagir com a lógica do componente.

Exemplo de um template Angular:

```html

<h2>Lista de Itens</h2>
<ul>
  <li *ngFor="let item of itens">{{ item }}</li>
</ul>

```

### Instalação do Angular CLI

Antes de começarmos a criar um projeto Angular, vamos instalar o Angular CLI, que é uma interface de linha de comando que facilita o desenvolvimento de aplicações Angular.

1. Abra o terminal ou prompt de comando.

2. Execute o seguinte comando para instalar o Angular CLI globalmente em seu sistema:

```bash
npm install -g @angular/cli
```

### Criação de um novo projeto Angular

Agora que temos o Angular CLI instalado, vamos criar um novo projeto Angular.

Escolha o diretório onde deseja criar o projeto e navegue até ele no terminal.

Execute o seguinte comando para criar um novo projeto Angular:

```bash
ng new nome-do-projeto
```

O Angular CLI fará algumas perguntas sobre as configurações do projeto. Você pode optar por configurá-las conforme suas necessidades ou simplesmente pressionar "Enter" para utilizar as configurações padrão.

Aguarde até que o processo de criação seja concluído. O Angular CLI criará a estrutura básica do projeto e instalará as dependências necessárias.

Navegue até o diretório do projeto recém-criado:

```bash
cd nome-do-projeto
```

Agora, você pode iniciar o servidor de desenvolvimento para executar o projeto:

```bash
ng serve
```

Abra seu navegador e acesse http://localhost:4200/. 
Você deverá ver a aplicação Angular em execução.

### Estrutura do projeto

```
nome-do-projeto/
  |- e2e/
  |- node_modules/
  |- src/
  |  |- app/
  |  |  |- components/
  |  |  |- services/
  |  |  |- app.module.ts
  |  |  |- app.component.ts
  |  |  |- app.component.html
  |  |  |- app.component.scss
  |  |  |- app.component.spec.ts
  |  |- assets/
  |  |- environments/
  |  |- index.html
  |  |- main.ts
  |  |- styles.scss
  |- angular.json
  |- package.json
  |- tsconfig.json
  |- ...
```
Essa é a estrutura básica de um projeto Angular. Conforme você desenvolve a aplicação, outros diretórios e arquivos podem ser criados para acomodar novos componentes, serviços, módulos, entre outros. É importante seguir essa organização para manter um projeto Angular limpo e bem estruturado, facilitando a colaboração e a manutenção.

**Explicação da Estrutura**:

 - **_e2e/_**: O diretório _"e2e"_ contém os testes end-to-end (e2e) escritos usando a ferramenta de teste Protractor. Esses testes permitem simular as ações do usuário e verificar se a aplicação funciona corretamente em um ambiente semelhante ao de produção.

 - **_node_modules/_**: Este é o diretório onde todas as dependências de pacotes npm são instaladas. Ele é criado automaticamente quando você executa npm install para baixar as dependências do projeto.

- **_src/_**: Este é o diretório principal onde o código-fonte da aplicação Angular está localizado.

- **_src/app/_**: O diretório _"app"_ contém todos os componentes, serviços e arquivos relacionados à lógica da aplicação.

- **_src/app/components/_**: Neste diretório, você pode organizar seus componentes em subdiretórios ou criar componentes individuais. Cada componente é composto por quatro arquivos: _.component.ts_, _.component.html_, _.component.css_ e _.component.spec.ts_.

- **_src/app/services/_**: Neste diretório, você pode criar e organizar os serviços utilizados para compartilhar dados e lógica entre os componentes.

- **_src/app/app.module.ts_**: O arquivo _"app.module.ts"_ é o módulo raiz da aplicação. Ele importa e declara os componentes, serviços e outros módulos utilizados pela aplicação.

- **_src/app/app.component.ts_**: O arquivo _"app.component.ts"_ é o componente raiz da aplicação, que controla o template principal _"app.component.html"_ e a folha de estilo _"app.component.css"_.

- **_src/app/app.component.html_**: O arquivo _"app.component.html"_ é o template principal da aplicação, que define a estrutura do DOM que será renderizada.

- **_src/app/app.component.css_**: O arquivo "_app.component.css_" contém estilos específicos do componente raiz.

- **_src/app/app.component.spec.ts_**: O arquivo "_app.component.spec.ts_" contém os testes unitários do componente raiz.

- **_src/assets/_**: O diretório "_assets_" contém recursos estáticos da aplicação, como imagens, arquivos JSON, entre outros.

- **_src/environments/_**: Aqui você encontrará configurações específicas de ambiente, como as variáveis de ambiente para diferentes ambientes de desenvolvimento, teste e produção.

- **_src/index.html_**: O arquivo _"index.html"_ é a página HTML principal da aplicação, onde o aplicativo Angular é inicializado.

- **_src/main.ts_**: O arquivo "main.ts" é o ponto de entrada do aplicativo Angular. Ele chama a função _platformBrowserDynamic().bootstrapModule()_ para inicializar o módulo raiz _"AppModule"_.

- **_src/styles.css_**: O arquivo _"styles.css"_ é o arquivo de folha de estilo global para a aplicação, que define estilos que afetam todos os componentes.

- **_angular.json_**: O arquivo _"angular.json"_ contém as configurações do projeto Angular, como estilos globais, scripts, configurações de compilação e outras configurações específicas do Angular CLI.

- **_package.json_**: O arquivo _"package.json"_ é usado pelo npm para gerenciar as dependências do projeto e armazenar informações sobre o projeto, como nome, versão, scripts, etc.

- **_tsconfig.json_**: O arquivo _"tsconfig.json"_ é o arquivo de configuração do TypeScript, onde você pode definir as configurações do compilador TypeScript para o projeto.


## Prática

Aqui está a sugestão para a prática:

**Tema do Projeto**: Lista de Tarefas

**Descrição**: Criar um projeto Angular para iniciar a construção de uma aplicação de Lista de Tarefas (To-Do List), aplicando os conceitos aprendido nesta aula.

*Requisitos*:

- Construa seu ambinete de desenvolvimento no Windows, Linux ou WLS2
- A aplicação deve ter a estrutura padrão de um projeto Angular.
