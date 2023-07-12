import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
cartData : EventEmitter<any> = new EventEmitter<any>();
myOrder : EventEmitter<any> = new EventEmitter<any>();


addToCart(cartData:any){
return this.http.post("http://127.0.0.1:8000/api/addCart", cartData)
}


getLocalData() {
  return this.http.get("http://localhost:8000/api/getLocalData");
}


getCartDataByUserID(userId: any) {
  return this.http.get("http://localhost:8000/api/getCartData/"+userId);
}


LocalupdateCartQuantityPlus(id: any, qty: any) {
  return this.http.put("http://localhost:8000/api/updateQtyPlusLocal/" + id, qty);
}

LocalupdateCartQuantityMinus(id: any, qty: any) {
  return this.http.put("http://localhost:8000/api/updateQtyMinusLocal/" + id, qty);
}


PendingdataAddedLocalToDb(data: any) {
  return this.http.post("http://localhost:8000/api/addPending", data);
}


updatePlusQTY(id:any, qty:any){
return this.http.put("http://localhost:8000/api/updateQtyPlus/"+id, qty);
}

updateMinusQTY(id:any, qty:any){
  return this.http.put("http://localhost:8000/api/updateQtyMinus/"+id, qty);
  }
  

  placeMyOrder(order:any){
return this.http.post("http://localhost:8000/api/postMyOrder",order);
  }

  truncateAddToCarts(id:any){
    return this.http.get("http://localhost:8000/api/addToCartsTruncate/"+id);
  }

  

  truncatePendingCartsTable(){
   this.http.get("http://localhost:8000/api/truncateTable").subscribe((res:any)=>{
      console.log(res,"PENDINGCARTS");
      });
  }


  getMyOrder(userID:any){
    return this.http.get("http://localhost:8000/api/getMyOrder/"+userID);
  }

  

  cancelOrder(orderID:any){
    return this.http.get("http://localhost:8000/api/cancelOrder/"+orderID)
  }
}
