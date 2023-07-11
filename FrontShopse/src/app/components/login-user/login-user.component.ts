import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fade } from 'src/app/animations';
import { CartService } from '../categories/services/cart.service';
import { UserService } from '../categories/services/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
  animations:[fade]
})
export class LoginUserComponent implements OnInit{
  loginForm:FormGroup;

  constructor(private fb: FormBuilder ,  private US:UserService,  private CS:CartService){
this.loginForm = this.fb.group({
email : this.fb.control('',[Validators.required]),
password : this.fb.control('',[Validators.required]),
})
  }

  ngOnInit(): void {
    let user:any = localStorage.getItem("user");
  let userName = user && JSON.parse( user ).data.name;
 this.US.userName.emit(userName);
  }

loginUser(data:any){
  this.US.userLogin(data);
  let user:any = localStorage.getItem("user");
  let userName = user && JSON.parse( user ).data.name;
 this.US.userName.emit(userName);
}
}
