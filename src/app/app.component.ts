import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-learn'
  isYellow :boolean = true
  isFlag : boolean = true
  isCondicional : boolean = true
  lista : string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

  trocarClass() {
    this.isFlag = !this.isFlag
  }

  trocarStyle() {
    this.isYellow = !this.isYellow
  }

  trocarCondicional() {
    this.isCondicional = !this.isCondicional
  }
}
