import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from '../categories/services/cart.service';
import { ProductService } from '../categories/services/product.service';
import { UserService } from '../categories/services/user.service';
import { MinicartComponent } from '../minicart/minicart.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
cartLength:any;
userName:string ='';
myOrderLength:any;
constructor(private productSer:ProductService, private dialog: MatDialog, private us: UserService, private CS:CartService){
  let user:any = localStorage.getItem("user");
  let userName = user && JSON.parse( user ).data.name;
 this.us.userName.emit(userName);
}

ngOnInit(): void {
 this.productSer.cartData.subscribe((res:any)=>{
  this.cartLength = res.length ;
 })

 this.us.userName.subscribe((res:any)=>{
   this.userName = res;
 })

 this.CS.myOrder.subscribe((res:any)=>{
   this.myOrderLength = res;
 })

}




openCart() {
  const dialogRef = this.dialog.open(MinicartComponent,{
    width : '60%'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}


logout(){
  localStorage.removeItem("user");
  let user:any = localStorage.getItem("user");
  let userName = user && JSON.parse( user ).data.name;
 this.us.userName.emit(userName);
}

}
