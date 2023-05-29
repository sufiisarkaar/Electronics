import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent {
  menList: any[] = [];
  constructor(private productSer: ProductService) {}

  ngOnInit(): void {
    this.getAllKids();
  }

  getAllKids() {
    this.productSer.getAllProduct().subscribe((res: any) => {
      const filter: any = res.Result.filter((response: any) => {
        return response.item_category === 'Mens';
      });
      if (filter) {
        this.menList = filter;
      }
    });
  }

  addToCart(items:any){
    console.log(items);

this.productSer.cartData.emit(items);
  }
}
