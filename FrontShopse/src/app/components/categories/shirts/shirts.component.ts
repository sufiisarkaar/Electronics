import { Component } from '@angular/core';
import { fade } from 'src/app/animations';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.scss'],
  animations:[fade]
})
export class ShirtsComponent {
  shirtList: any[] = [];
  searchText:any;
  constructor(private productSer: ProductService, private US:UserService) {}

  ngOnInit(): void {
    this.getAllShirts();
    let user:any = localStorage.getItem("user");
    let userName = user && JSON.parse( user ).data.name;
   this.US.userName.emit(userName);
  
  }

  getAllShirts() {
    this.productSer.getAllProduct().subscribe((res: any) => {
      const filter: any = res.Result.filter((response: any) => {
        return response.item_category === 'Shirts';
      });
      if (filter) {
        this.shirtList = filter;
      }
    });
  }


  addToCart(items:any){
    console.log(items);

this.productSer.cartData.emit(items);
  }
}
