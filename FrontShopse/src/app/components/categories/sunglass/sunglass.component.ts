import { Component } from '@angular/core';
import { fade } from 'src/app/animations';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sunglass',
  templateUrl: './sunglass.component.html',
  styleUrls: ['./sunglass.component.scss'],
  animations:[fade]
})
export class SunglassComponent {
  sunglassList: any[] = [];
  searchText:any;
  constructor(private productSer: ProductService, private US:UserService) {}

  ngOnInit(): void {
    this.getAllSunglasses();
    let user:any = localStorage.getItem("user");
    let userName = user && JSON.parse( user ).data.name;
   this.US.userName.emit(userName);
  
  }

  getAllSunglasses() {
    this.productSer.getAllProduct().subscribe((res: any) => {
      const filter: any = res.Result.filter((response: any) => {
        return response.item_category === 'Sunglasses';
      });
      if (filter) {
        this.sunglassList = filter;
      }
    });
  }


  addToCart(items:any){
    console.log(items);

this.productSer.cartData.emit(items);
  }
}
