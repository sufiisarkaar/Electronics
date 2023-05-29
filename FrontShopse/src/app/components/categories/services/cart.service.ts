import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
cartData : EventEmitter<any> = new EventEmitter<any>();


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

}
