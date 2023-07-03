import { Component } from '@angular/core';
import { fade } from 'src/app/animations';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-sunglass',
  templateUrl: './sunglass.component.html',
  styleUrls: ['./sunglass.component.scss'],
  animations:[fade]
})
export class SunglassComponent {
  sunglassList: any[] = [];
  constructor(private productSer: ProductService) {}

  ngOnInit(): void {
    this.getAllSunglasses();
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
