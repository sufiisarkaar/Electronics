import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { fade } from './animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[fade]
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