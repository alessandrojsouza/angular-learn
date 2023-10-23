import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent {

    @Input() mensagemInput : string = 'Mensagem padrão sem passagem de parâmetro';

    @Input ({transform:booleanAttribute}) flagButton : boolean = true;

    @Output() mensagemOutFilhoEvent = new EventEmitter<string>();

    onClickEnviarMensagemFilho() {
        this.mensagemOutFilhoEvent.emit('Mensagem passada pelo componente filho');
    }
}
