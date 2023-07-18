import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../categories/services/product.service';
import { SellerService } from '../../categories/services/seller.service';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.scss']
})
export class SellerDashboardComponent implements OnInit  {
itemList:any;
searchText:any;

constructor(private PS:ProductService, private route:Router){}

ngOnInit(): void {
  this.getAllProduct();
  
}

getAllProduct(){
  this.PS.getAllProduct().subscribe((res:any)=>{
    this.itemList = res.Result;
    console.log(this.itemList);
    
  })
}


editItem(items:any){
console.log("edit Item",items);
this.route.navigate(['/addProduct/',items.id ])
}


addProduct(){
this.route.navigateByUrl('addProduct');
}

}
