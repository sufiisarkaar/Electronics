import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient, private route:Router) { }

  sellerLogin(data:any){
    this.http.post("http://localhost:8000/api/sellerLogin", data , { observe: 'response'}).subscribe((res:any)=>{
      localStorage.setItem("seller", JSON.stringify( res.body ));
      console.log(res.body,"resbodyy");
      if(res.body.success)
      this.route.navigateByUrl("sellerDashboard");
      
      
    })
  }

  productPost(product:any){
    return this.http.post("http://localhost:8000/api/itemPost",product);
  }
}
