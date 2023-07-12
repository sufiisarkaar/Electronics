import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userName = new EventEmitter<any>();
  constructor(private http: HttpClient, private CS: CartService, private router:Router) { }

  baseURL$ = "http://127.0.0.1:8000/api";

  userRegister(data: any) {
    return this.http.post("http://127.0.0.1:8000/api/userSignup", data);
  }

  userLogin(data: any) {
    this.http.post("http://localhost:8000/api/userLogin", data, { observe: 'response' }).subscribe((result: any) => {
      if (!result.body.error) {
        localStorage.setItem('user', JSON.stringify(result.body));
      console.log(result.body.success);
        setTimeout(() => {
        this.cartTodb();
        }, 2000);
        let user:any = localStorage.getItem("user");
        let userName = user && JSON.parse( user ).data.name;
       this.userName.emit(userName);
this.router.navigateByUrl("");
  } else {
        console.log(result.body.error);
      }
    });
  }


  cartTodb(){
    let data = localStorage.getItem("cartItem");
    if(data){
      let dataLocal = JSON.parse(data);
      let user:any = localStorage.getItem("user");
      let UserId = JSON.parse( user ).data.id;
      if(user){
        dataLocal.forEach((product:any) => {
          
          let Items = {
            ...product,
            user_id : UserId
          }
          
          this.CS.addToCart(Items).subscribe((res:any)=>{
            this.CS.truncatePendingCartsTable();
           
            localStorage.removeItem("cartItem");
            
          })
         
        });
        
      }
    }
  }

}
