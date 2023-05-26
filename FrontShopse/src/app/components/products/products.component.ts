import { Component, OnInit } from '@angular/core';
import { ProductService } from '../categories/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  itemList:any;

  constructor(private productSer:ProductService){}

  ngOnInit(): void {
   this.getAllPro();
  }

  getAllPro(){
    this.productSer.getAllProduct().subscribe((res:any)=>{
this.itemList = res;

console.log(res);

    })
  }
}
