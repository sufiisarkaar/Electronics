import { Component, OnInit } from '@angular/core';
import { CartService } from '../categories/services/cart.service';
import { UserService } from '../categories/services/user.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss']
})
export class MyOrderComponent implements OnInit {
myOrderList:any;
grandTotal:any;
constructor(private CS:CartService, private US: UserService){}

ngOnInit(): void {
  this.getMyOrder();
  let user:any = localStorage.getItem("user");
  let userName = user && JSON.parse( user ).data.name;
 this.US.userName.emit(userName);
}

getMyOrder(){
  let user:any = localStorage.getItem("user");
  let userID = user && JSON.parse( user ).data.id;
  if(userID){
    this.CS.getMyOrder(userID).subscribe((res:any)=>{
      this.myOrderList = res.data;
    this.grandTotal = res.grandTotal;
    console.log(res.data.length);
    this.CS.myOrder.emit(res.data.length);
      
    })
  }
}

cancelOrder(orderID:any){
  this.CS.cancelOrder(orderID).subscribe((res:any)=>{
    console.log(res,"cancelOrder");
    this.getMyOrder();
    
  })
}
}
