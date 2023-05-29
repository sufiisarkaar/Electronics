import { Component, OnChanges, OnInit } from '@angular/core';
import { CartService } from '../categories/services/cart.service';

@Component({
  selector: 'app-minicart',
  templateUrl: './minicart.component.html',
  styleUrls: ['./minicart.component.scss']
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
      console.log(this.cartData,"ddddddddd");

      this.cartCount = res.data.length;
      this.grandTotal = res.grandTotal;
    });
  } else {
    this.CS.getLocalData().subscribe((res: any) => {
      this.cartData = res.data;
      this.grandTotal = res.grandTotal;
      console.log('LOCAL', res);
    });
  }
}


plusQuantity( qty:any, id:any){
qty++;
console.log(qty);

}

minusQuantity(qty:any, id:any){
  qty--;
}

}
