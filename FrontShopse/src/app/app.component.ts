import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  url:any;
  constructor(private router:Router){
   

  }

 

  title:any = 'ecommerce';
 
  status:boolean = false;
  addToggle()
  {
    this.status = !this.status;       
  }
}