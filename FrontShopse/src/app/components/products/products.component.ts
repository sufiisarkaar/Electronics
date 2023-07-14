import { Component, OnInit } from '@angular/core';
import { ProductService } from '../categories/services/product.service';
import { CartService } from '../categories/services/cart.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MinicartComponent } from '../minicart/minicart.component';
import { MatButtonModule } from '@angular/material/button';
import { fade } from 'src/app/animations';
import { UserService } from '../categories/services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations:[fade]
 
})
export class ProductsComponent implements OnInit {
  searchText:any;
  itemList: any;

  constructor(private productSer: ProductService, private CartSer: CartService, private US:UserService) { }

  ngOnInit(): void {
    this.getAllPro();
    let user:any = localStorage.getItem("user");
    let userName = user && JSON.parse( user ).data.name;
   this.US.userName.emit(userName);
  
  }


  getAllPro() {
    this.productSer.getAllProduct().subscribe((res: any) => {
      this.itemList = res.Result;

      console.log(res);

    })
  }


  addToCart(items: any) {
    let user: any = localStorage.getItem("user");
    let userID = user && JSON.parse(user).data.id;

    if (userID) {
      let storeDataWithID = {
        ...items,
        user_id: userID
      }
      this.CartSer.addToCart(storeDataWithID).subscribe((res: any) => {
        console.log(res, "res");
        this.productSer.cartData.emit(res);
      })
     
    } else {

      let cartData = JSON.parse(localStorage.getItem('cartItem') || '[]') as string[];
      cartData.push(items)
      localStorage.setItem("cartItem", JSON.stringify(cartData));
      this.productSer.cartData.emit(cartData);


      this.CartSer.PendingdataAddedLocalToDb(items).subscribe((res: any) => {
        console.log(res);

      })

    }
  }


 


 
}
