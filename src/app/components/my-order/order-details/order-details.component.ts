import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogRef,MatDialogConfig} from '@angular/material/dialog'
import { CancelOrderComponent } from '../../pop-up/cancel-order/cancel-order.component';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orderId:string;
  constructor(private dialog:MatDialog,private route:ActivatedRoute,private orderService:OrderService,private productService:ProductService
    ,private addressService:AddressService) { }

  orderedItem:any;
  deliveryAddress:any;
  product:Product;
  fullName:string;
  dataLoad:boolean=false;
  ngOnInit(): void {

    this.getOrderIdFromUrl();
  }

  getOrderIdFromUrl(){
    this.route.paramMap.subscribe(params => {
      this.orderId = params.get('orderId');
        this.getOrderByOrderId(this.orderId)
        console.log(this.orderId);
    });
  }
  getOrderByOrderId(orderId:string){
      this.orderService.getOrderByOrderId(orderId).subscribe((data)=>{
        console.log(data)
        this.orderedItem=data;
        this.getAddressAndProductDetails(this.orderedItem);
      },(error)=>{
        alert("Error while fetching order details")
      })
  }

  getAddressAndProductDetails(orderedItem:any){
      this.addressService.getAddressList().subscribe((data:any[])=>{
        for(let address of data){
          if(address.addressId==orderedItem.addressId){
            this.deliveryAddress=address;
            this.fullName=address.fullName;
            console.log(this.deliveryAddress);
            break;
          }
        }
      },(err)=>{
        alert("Error while during address fetching by address Id")
      })
      this.productService.getProductList().subscribe((data:Product[])=>{
          for(let product of data){
            if(product.productId==orderedItem.productId){
              this.product=product;
              console.log(product);
              this.dataLoad=true;
              break;
            }
          }
      },(err)=>{
        alert("Error while during product fetching by product Id");
      })
      
  }


  openCancelPopup(){

     let dialogRef= this.dialog.open(CancelOrderComponent,{data:{orderId:this.orderId}});
     dialogRef.disableClose=true;
     
    
  }
  openHelpPopup(){
    
  }
}
