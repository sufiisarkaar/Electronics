import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
cartData = new EventEmitter<any[] | []>();


getAllProduct(){
  return this.http.get("http://127.0.0.1:8000/api/itemGet");
}

}
