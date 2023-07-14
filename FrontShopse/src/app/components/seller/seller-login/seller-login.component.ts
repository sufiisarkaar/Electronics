import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SellerService } from '../../categories/services/seller.service';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.scss']
})
export class SellerLoginComponent {
  sellerLogin:FormGroup;

  constructor(private FB:FormBuilder, private SC:SellerService){
    this.sellerLogin = this.FB.group({
      email : this.FB.control('',[Validators.required]),
      password : this.FB.control('',[Validators.required]),
    })
  }


  sellerLOGIN(data:any){
    if(this.sellerLogin.valid ){
   this.SC.sellerLogin(data);
    }

    
  }
}
