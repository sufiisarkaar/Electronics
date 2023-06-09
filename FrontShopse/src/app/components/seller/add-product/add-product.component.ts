import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SellerService } from '../../categories/services/seller.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  addProduct : FormGroup;
  imageURL:any;

  constructor(private SS:SellerService, private FB: FormBuilder){
this.addProduct = this.FB.group({
  item_name : this.FB.control('',[Validators.required]),
  item_category : this.FB.control('',[Validators.required]),
  item_price : this.FB.control('',[Validators.required]),
  item_dsc : this.FB.control('',[Validators.required]),
  item_discount : this.FB.control('',[Validators.required]),
  item_qty : this.FB.control('',[Validators.required]),
  item_image : this.imageURL,
})
  }

  addProducts(products:any){
this.SS.productPost(products).subscribe((res:any)=>{
  console.log(res,"api called");
  
})

  }

  onSelectFile(e:any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
       this.imageURL = event.target.result;
        
      }
    }
  }
}
