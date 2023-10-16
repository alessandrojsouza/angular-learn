import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aula 01 - Data Binding ';

  placeholderPropertie : String = "Valor inicial do modelo"

  textoDoInput : String = "Texto do Input..."

  isMouseOverClass : Boolean = false

  isMouseOverStyle : Boolean = false

  acionaAlerta(){
    alert ('Evento de click disparado')
  }

  onMouserOverOutClass(){
    this.isMouseOverClass = !this.isMouseOverClass
  }

  onMouserOverOutStyle(){
    this.isMouseOverStyle = !this.isMouseOverStyle
  }

}
