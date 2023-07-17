import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/animations';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-jeans',
  templateUrl: './jeans.component.html',
  styleUrls: ['./jeans.component.scss'],
  animations:[fade]
})
export class JeansComponent implements OnInit {
  jeansList: any[] = [];
  searchText:any;
  constructor(private productSer: ProductService, private US:UserService, private CartSer:CartService) {}

  ngOnInit(): void {
    this.getAllJeans();
    let user:any = localStorage.getItem("user");
    let userName = user && JSON.parse( user ).data.name;
   this.US.userName.emit(userName);
  
  }

  getAllJeans() {
    this.productSer.getAllProduct().subscribe((res: any) => {
      const filter: any = res.Result.filter((response: any) => {
        return response.item_category === 'Jeans';
      });
      if (filter) {
        this.jeansList = filter;
      }
    });
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
