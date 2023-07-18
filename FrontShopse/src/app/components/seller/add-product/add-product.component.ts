import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SellerService } from '../../categories/services/seller.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit{
  addProduct : FormGroup;
  imageURL:any;
ItemID:any;
editOBJ={
  item_category:"",
item_discount:"",
item_dsc: "",
item_image:"",
item_name: "",
item_price: "",
item_qty:""
};

editStatus:boolean=false;

  constructor(private SS:SellerService, private FB: FormBuilder, private AR:ActivatedRoute, private route:Router){
this.addProduct = this.FB.group({
  item_name : this.FB.control('',[Validators.required]),
  item_category : this.FB.control('',[Validators.required]),
  item_price : this.FB.control('',[Validators.required]),
  item_dsc : this.FB.control('',[Validators.required]),
  item_discount : this.FB.control('',[Validators.required]),
  item_qty : this.FB.control('',[Validators.required]),
  
})
  }

  ngOnInit(): void {
this.ItemID = this.AR.snapshot.params['data'];
  
    this.getItemDetail();
    if(this.ItemID == !null){
      this.editStatus =!  this.editStatus;
    }
  
  }

  addProducts(products:any){
    let productFinalWithImage = {
      ...this.addProduct.value,
      item_image : this.imageURL
    }
this.SS.productPost(productFinalWithImage).subscribe((res:any)=>{
  console.log(res,"api called");
  
})

  }

  onSelectFile(e:any){
    if(e.target.files){
      console.log(e.target.files,"files");
      
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
       this.imageURL = event.target.result;
       this.editOBJ.item_image = event.target.result;
        console.log(this.imageURL,"IMAGEURL");
        
      }
    }
  }

  getItemDetail(){
    this.SS.getProductById(this.ItemID).subscribe((res:any)=>{
      console.log(res,"iddddddddd");
      this.editOBJ = res.Data;
    })
  }

  updatePro(){
    let productFinalWithImage = {
      ...this.addProduct.value,
      item_image : this.imageURL
    }
    this.SS.updateProductByID(this.ItemID,productFinalWithImage).subscribe((res:any)=>{
      console.log("updated",res);
      this.route.navigateByUrl('/sellerDashboard');
      
    })
  }

  deletePro(){
this.SS.deleteProducts(this.ItemID).subscribe((res:any)=>{
  console.log(res);
  this.route.navigateByUrl('/sellerDashboard');
})
  }
}
