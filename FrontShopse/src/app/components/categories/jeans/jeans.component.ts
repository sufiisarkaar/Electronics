import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/animations';
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
  constructor(private productSer: ProductService, private US:UserService) {}

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


  addToCart(items:any){
    console.log(items);

this.productSer.cartData.emit(items);
  }
}
