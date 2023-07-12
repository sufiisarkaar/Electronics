import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/animations';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tshirts',
  templateUrl: './tshirts.component.html',
  styleUrls: ['./tshirts.component.scss'],
  animations:[fade]
})
export class TshirtsComponent implements OnInit {
  tShirtsList: any[] = [];
  constructor(private productSer: ProductService,  private US: UserService) {}

  ngOnInit(): void {
    this.getAllTshirts();
    let user:any = localStorage.getItem("user");
    let userName = user && JSON.parse( user ).data.name;
   this.US.userName.emit(userName);
  
  }

  getAllTshirts() {
    this.productSer.getAllProduct().subscribe((res: any) => {
      const filter: any = res.Result.filter((response: any) => {
        return response.item_category === 'T-shirts';
      });
      if (filter) {
        this.tShirtsList = filter;
      }
    });
  }

  addToCart(items:any){
    console.log(items);

this.productSer.cartData.emit(items);
  }
}
