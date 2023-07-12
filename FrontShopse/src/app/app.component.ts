import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { fade } from './animations';
import { UserService } from './components/categories/services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[fade]
})
export class AppComponent implements OnInit {
  url:any;
  title:any = 'ecommerce';
 
  status:boolean = false;

  constructor(private router:Router, private US:UserService){
    let user:any = localStorage.getItem("user");
  let userName = user && JSON.parse( user ).data.name;
 this.US.userName.emit(userName);

  }



 

 

ngOnInit(): void {
  let user:any = localStorage.getItem("user");
  let userName = user && JSON.parse( user ).data.name;
 this.US.userName.emit(userName);
}


  addToggle()
  {
    this.status = !this.status;       
  }
}