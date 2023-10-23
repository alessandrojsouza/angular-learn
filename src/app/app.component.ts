import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mensagem passada pela classe do componente Pai!!';
  isVisible = false;

  onClickAlert(msg : string){
    alert(msg);
  }
}
