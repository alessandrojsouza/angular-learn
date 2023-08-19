## Formulários no Angular

Lidar com a entrada do usuário com formulários é a base de muitos aplicativos comuns. Os aplicativos usam formulários para permitir que os usuários façam login, atualizem um perfil, insiram informações confidenciais e executem muitas outras tarefas de entrada de dados. 

O Angular oferece um poderoso módulo de formulários que facilita a criação, validação e manipulação de formulários complexos e dinâmicos.

Existem dois tipos principais de formulários no Angular: **Template-Driven e Reactive (Model-Driven).**

### Formulários Template-Driven

Os formulários Template-Driven são mais simples e baseados no template HTML. A validação é principalmente tratada no HTML e a maior parte da lógica é gerenciada automaticamente pelo Angular.

Exemplo 

```html
<form #meuForm="ngForm" (click)="onSubmit('meuForm')">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome" ngModel required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" ngModel required email>

  <button type="submit">Enviar</button>
</form>
```

**Detalhamento do Código:**

- **form**: Este é o elemento raiz do formulário. O atributo **#meuForm="ngForm"** associa o formulário a uma variável chamada meuForm, que será usada para acessar o estado e os controles do formulário. Ao submeter o formulário o método **onSubmit('meuForm')** será acionado na classe de modelo do template.

- **label**: Etiqueta que identifica o campo para o usuário.

- **input**: Elemento de entrada para o usuário digitar dados. O atributo type define o tipo de entrada (no exemplo, text e email). O atributo *'id'* deve corresponder ao valor do atributo *'for'* da etiqueta *'label'* para vinculá-los. O atributo *'name'* é usado para identificar os campos no formulário.

- **ngModel**: Diretiva do Angular que cria uma ligação bidirecional entre os campos de entrada e o modelo de dados. Ela permite que você acesse e atualize os valores dos campos diretamente no componente.

- **required**: Diretiva que especifica que o campo é obrigatório.

- **email**: Diretiva que verifica se o valor do campo é um endereço de e-mail válido.

- **button**: Botão de envio do formulário. Quando pressionado, o formulário será submetido.

**Validação e Envio**

A validação ocorre automaticamente de acordo com as diretivas aplicadas aos campos de entrada. Se um campo obrigatório estiver em branco ou se o formato do e-mail estiver incorreto, o Angular marcará o campo como inválido.

### Formulários Reactive (Model-Driven)

Os formulários Reactive oferecem maior controle e flexibilidade. Eles são construídos programaticamente e a validação é definida no código TypeScript.

Exemplo

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exemplo',
  template: `
    <form [formGroup]="meuForm" (ngSubmit)="enviar()">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" formControlName="nome">

      <label for="email">Email:</label>
      <input type="email" id="email" formControlName="email">

      <button type="submit">Enviar</button>
    </form>
  `
})
export class ExemploComponent {
  meuForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.meuForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  enviar() {
    if (this.meuForm.valid) {
      // Lógica para processar os dados
    }
  }
}
```

**Detalhamento do Código:**

- **import { FormBuilder, FormGroup, Validators } from '@angular/forms';** - Importando os módulos necessários para construir e validar o formulário reativo.

- **constructor(private formBuilder: FormBuilder) { ... }** - No construtor do componente, estamos injetando o serviço *FormBuilder*, que facilita a criação do formulário reativo.

- **this.meuForm = this.formBuilder.group({ ... })** - Aqui estamos usando o *FormBuilder* para criar o *FormGroup* chamado *meuForm*. Este é o ponto onde definimos os campos e suas validações.

- **nome: ['', Validators.required]** - Definindo o campo *"nome"* com um valor inicial vazio ('') e aplicando a validação de campo obrigatório.

- **email: ['', [Validators.required, Validators.email]]** - Definindo o campo *"email"* com um valor inicial vazio e aplicando duas validações: campo obrigatório e formato de e-mail válido.

- **(ngSubmit)="enviar()"** - Vinculando o evento *ngSubmit* do formulário ao método *enviar()*, que será chamado quando o botão *"Enviar"* for pressionado.

- **enviar() { ... }** - Este método é chamado quando o formulário é enviado. Verificamos se o formulário é válido usando *this.meuForm.valid*. Se for válido, você pode adicionar lógica para processar os dados do formulário.


## Validação de formulário

A validação de formulários é uma ferramenta para garantir que os dados inseridos pelo usuário sejam corretos e válidos. O Angular oferece maneiras de validar formulários tanto no modo Template-Driven quanto no modo Reactive (Model-Driven).

### Validação em template-driven

**Validação de Campos Obrigatórios**

```html
<label for="nome">Nome:</label>
<input type="text" id="nome" name="nome" ngModel required>
<div *ngIf="nome.invalid && (nome.dirty || nome.touched)" class="erro">
  O nome é obrigatório.
</div>
```

Explicação:

- Usamos a diretiva *required* para definir que o campo é obrigatório.
- Utilizamos a variável local *#nome* para acessar o estado do campo no template.
- O trecho **ngIf="nome.invalid && (nome.dirty || nome.touched)"* verifica se o campo está inválido e foi tocado (*touched*) ou modificado (*dirty*). Se essas condições forem atendidas, o elemento *div* com a mensagem de erro será exibido.


**Validação de Formato de Email:**

```html
<label for="email">Email:</label>
<input type="email" id="email" name="email" #nome="ngModel" ngModel required email>
<div *ngIf="email.invalid && (email.dirty || email.touched)" class="erro">
  Insira um email válido.
</div>
```

Explicação:

- Além da diretiva *required*, usamos a diretiva *email* para validar o formato do email.
- Da mesma forma que no exemplo anterior, verificamos se o campo está inválido e foi tocado ou modificado para exibir a mensagem de erro.

Validação de Comprimento Mínimo e Máximo:

```html
<label for="senha">Senha:</label>
<input type="password" id="senha" name="senha" #senha="ngModel" ngModel minlength="6" maxlength="12" required>
<div *ngIf="senha.invalid && (senha.dirty || senha.touched)" class="erro">
  A senha deve ter entre 6 e 12 caracteres.
</div>
```

Explicação:

- Adicionamos *#senha="ngModel"* para declarar a variável local *senha* e associá-la ao ngModel.
- Usamos as diretivas *minlength* e *maxlength* para definir os limites de comprimento da senha.
- Se a senha for menor que 6 ou maior que 12 caracteres, a validação será acionada e a mensagem de erro será exibida.

Validação de Comparação de Campos (Confirmação de Senha):

```html
<label for="senha">Senha:</label>
<input type="password" id="senha" name="senha" #senha="ngModel" ngModel required>
<label for="confirmacaoSenha">Confirmar Senha:</label>
<input type="password" id="confirmacaoSenha" name="confirmacaoSenha" #confirmacaoSenha="ngModel" ngModel required [equalTo]="senha">
<div *ngIf="confirmacaoSenha.invalid && (confirmacaoSenha.dirty || confirmacaoSenha.touched)" class="erro">
  As senhas não coincidem.
</div>
```

Explicação:

- Adicionamos *#confirmacaoSenha="ngModel"* para declarar a variável local *confirmacaoSenha* e associá-la ao ngModel.
- No campo de confirmação de senha, usamos a diretiva *[equalTo]="senha"* para vincular a validação ao campo de senha original.
- Implementamos uma validação personalizada chamada *[equalTo]* que compara o valor do campo com o valor do campo de senha original.



### Validação em formulários Reactive (Model-Driven)

**Validação de Campos Obrigatórios (Reactive):**

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exemplo',
  template: `
    <form [formGroup]="meuForm" (ngSubmit)="enviar()">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" formControlName="nome">

      <div *ngIf="meuForm.get('nome').hasError('required') && meuForm.get('nome').touched" class="erro">
        O nome é obrigatório.
      </div>

      <label for="email">Email:</label>
      <input type="email" id="email" formControlName="email">

      <div *ngIf="meuForm.get('email').hasError('required') && meuForm.get('email').touched" class="erro">
        Insira um email válido.
      </div>

      <button type="submit">Enviar</button>
    </form>
  `
})
export class ExemploComponent {
  meuForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.meuForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  enviar() {
    if (this.meuForm.valid) {
      // Lógica para processar os dados
    }
  }
}
```

Explicação:

- Usamos o *FormBuilder* para criar um grupo de controles (FormGroup) chamado *meuForm*. Este grupo conterá os campos do formulário.

- Para o campo *"nome"*, definimos um controle com um valor inicial vazio '' e aplicamos a validação de campo obrigatório (*Validators.required*).

- Para o campo *"email"*, fazemos o mesmo, aplicando a validação de campo obrigatório.


**Validação de Formato de Email (Reactive):**

```typescript
this.meuForm = this.formBuilder.group({
  email: ['', [Validators.required, Validators.email]]
});
```

Explicação:

- Criamos um campo *"email"* dentro do grupo *meuForm*.

- Usamos um array de validadores para este campo. *Validators.required* verifica se o campo está preenchido, e *Validators.email* verifica se o valor inserido é um formato de e-mail válido.

Validação de Comprimento Mínimo e Máximo (Reactive):

```typescript
this.meuForm = this.formBuilder.group({
  senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
});
```

Explicação:

- Criamos um campo *"senha"* dentro do grupo *meuForm*.

- Usamos uma série de validadores para este campo. *Validators.required* verifica se o campo está preenchido, *Validators.minLength(6)* verifica se a senha tem pelo menos 6 caracteres, e *Validators.maxLength(12)* verifica se a senha tem no máximo 12 caracteres.

**Validação de Comparação de Campos (Confirmação de Senha) (Reactive):**

```typescript
this.meuForm = this.formBuilder.group({
  senha: ['', Validators.required],
  confirmacaoSenha: ['', [Validators.required, this.equalToValidator('senha')]]
});

equalToValidator(otherControlName: string) {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const otherControl = control.root.get(otherControlName);

    if (otherControl && control.value !== otherControl.value) {
      return { equalTo: true };
    }

    return null;
  };
}
```

Explicação:

- Criamos dois campos, *"senha"* e *"confirmacaoSenha"*, dentro do grupo *meuForm*.

- Para o campo *"confirmacaoSenha"*, aplicamos uma validação customizada *this.equalToValidator('senha')*. Isso significa que estamos usando a função *equalToValidator* para comparar o valor deste campo com o valor do campo *"senha"*.

- A função *equalToValidator* retorna um validador personalizado que compara os valores dos dois campos. Se eles forem diferentes, a validação retorna *{ equalTo: true }*, indicando que as senhas não coincidem.


**Validação Customizada (Reactive):**

```typescript
this.meuForm = this.formBuilder.group({
  username: ['', [Validators.required, this.customValidation]]
});

customValidation(control: AbstractControl): { [key: string]: any } | null {
  if (control.value === 'admin') {
    return { customValidation: true };
  }

  return null;
}
```

Explicação:

- Criamos um campo *"username"* dentro do grupo *meuForm*.

- Aplicamos uma validação customizada *this.customValidation*. Esta validação chama a função *customValidation*, que verifica se o valor inserido é igual a "*admin*".

- Se for igual a "*admin*", a validação retorna *{ customValidation: true }*, indicando um erro personalizado.

A documentação oficial do Angular contém informações detalhadas sobre as diretivas de validação e outras funcionalidades relacionadas a formulários. Você pode acessar a documentação online do Angular Forms em [https://angular.io/api?query=valid](https://angular.io/api?query=valid)
