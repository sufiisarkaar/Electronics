import { Component } from '@angular/core';
import { fade } from 'src/app/animations';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss'],
  animations:[fade]
})
export class ShoesComponent {
  shoesList: any[] = [];
  searchText:any;
  constructor(private productSer: ProductService, private US:UserService) {}

  ngOnInit(): void {
    this.getAllShoes();
    let user:any = localStorage.getItem("user");
    let userName = user && JSON.parse( user ).data.name;
   this.US.userName.emit(userName);
  
  }

  getAllShoes() {
    this.productSer.getAllProduct().subscribe((res: any) => {
      const filter: any = res.Result.filter((response: any) => {
        return response.item_category === 'Shoes';
      });
      if (filter) {
        this.shoesList = filter;
      }
    });
  }


  addToCart(items:any){
    console.log(items);

this.productSer.cartData.emit(items);
  }
}
