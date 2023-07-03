import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fade } from 'src/app/animations';
import { UserService } from '../categories/services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
  animations:[fade]
})
export class RegisterUserComponent implements OnInit {

  registerForm:FormGroup;
  
  constructor(private fb:FormBuilder, private US: UserService){
this.registerForm = this.fb.group({
  name : this.fb.control('',[Validators.required]),
  email : this.fb.control('',[Validators.required]),
  phone : this.fb.control('',[Validators.required]),
  password : this.fb.control('',[Validators.required]),
  confirmPassword : this.fb.control('',[Validators.required]),
})
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  registerUser(data:any){
this.US.userRegister(data).subscribe((res:any)=>{

  console.log("Resigter", res);
})
    
  }

}
