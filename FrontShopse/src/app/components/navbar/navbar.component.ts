import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../categories/services/product.service';
import { MinicartComponent } from '../minicart/minicart.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
cartLength:any;
constructor(private productSer:ProductService, private dialog: MatDialog){}

ngOnInit(): void {
 this.productSer.cartData.subscribe((res:any)=>{
  this.cartLength = res.length;
 })
}




openCart() {
  const dialogRef = this.dialog.open(MinicartComponent,{
    width : '60%'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}


}
