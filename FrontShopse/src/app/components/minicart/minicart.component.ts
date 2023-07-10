import { Component, OnChanges, OnInit } from '@angular/core';
import {  fadeLogin } from 'src/app/animations';
import { CartService } from '../categories/services/cart.service';

@Component({
  selector: 'app-minicart',
  templateUrl: './minicart.component.html',
  styleUrls: ['./minicart.component.scss'],
  animations:[fadeLogin]
})
export class MinicartComponent implements OnInit {
  cartData:any;

  cartCount: any;
  grandTotal: any;
  cartList: any;
constructor(private CS:CartService){}

ngOnInit(): void {
this.getCartData();
}


getCartData(){
  let user = localStorage.getItem('user');
  let userId = user && JSON.parse(user).data.id;
  if(userId) {
    this.CS.getCartDataByUserID(userId).subscribe((res: any) => {
      this.cartData = res.data;
      
      this.cartCount = res.data.length;
      this.grandTotal = res.grandTotal;
      console.log(this.grandTotal,"ddddddddd");
    });
  } else {
    this.CS.getLocalData().subscribe((res: any) => {
      this.cartData = res.data;
      this.grandTotal = res.grandTotal;
      console.log('LOCAL', res);
    });
  }
}


plusQuantity( id:any, qty:any){
  let user :any= localStorage.getItem("user");
  let userID = user && JSON.parse( user ).data.id;
  if(userID){
    console.log("user exist");

    this.CS.updatePlusQTY(id,qty).subscribe((res:any)=>{
      this.getCartData();
      console.log(res,"DBUpdatedeQTY");
      
    })
  }else{
    console.log("user not exist");
    this.CS.LocalupdateCartQuantityPlus(id,qty).subscribe((res:any)=>{
      this.getCartData();
      console.log(res,"LocalUpdatedQTY");
      
    })
    
  }
 

}

minusQuantity( id:any, qty:any){
  console.log(id,"dddddddd");
  
  this.CS.updateMinusQTY(id,qty).subscribe((res:any)=>{
    console.log(res,"QUANTITY");
    this.getCartData();
    
  })
}

}
