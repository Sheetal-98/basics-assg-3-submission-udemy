import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  buttonClicked=false;
  logs=[];

  toggleButton(){
    this.buttonClicked = !this.buttonClicked;
    this.logs.push(this.logs.length+1);
  }

 


}

