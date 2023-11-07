import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-learn';
  usuario = {nome:'', email:''};

  onSubmit(form : NgForm){
    console.log(form);
    console.log(this.usuario);
  }
}
