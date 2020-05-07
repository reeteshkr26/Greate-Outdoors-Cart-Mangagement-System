import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class SendItemService {
subject=new Subject();
cartItems:any[]=[];

  constructor() { }

  getItem(){
  
    return this.subject.asObservable();
   
  }
  sendItem(product:Product){
    this.subject.next(product);

}


}

