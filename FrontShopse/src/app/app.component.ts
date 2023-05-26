import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:any = 'ecommerce';
 
  status:boolean = false;
  addToggle()
  {
    this.status = !this.status;       
  }
}