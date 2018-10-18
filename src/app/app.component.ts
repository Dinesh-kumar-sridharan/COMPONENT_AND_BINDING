import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   text = 'Bindingproject';
   title = 'input';

   propertyActive:boolean=false;

    callEvent() {
  	this.propertyActive = true;
}
}