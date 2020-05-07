import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiurl="assets/products.json";
  productList:Product[]=[];
  constructor(private http:HttpClient) { }

  getProductList():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiurl);
  }
}
