import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private apiurl="assets/address.json";

  addressList:any[]=[];
  address:any;

  constructor(private http:HttpClient) { }

  getAddressList():Observable<any[]>{
    return this.http.get<any[]>(this.apiurl);
  }

/*getAddressByAddressId(addressId:string){
    this.getAddressList().subscribe((data:any[])=>{
    
    })
  }*/
}
