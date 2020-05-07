import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderList:any[]=[];
  refundSuccess:boolean=false;
  constructor(private orderService:OrderService,private router:Router,private addressService:AddressService,private productService:ProductService) { }

  ngOnInit(): void {
    this.loadOrderList();
  }

  loadOrderList(){
    this.orderService.getAllOrderList("admin").subscribe((data)=>{
      this.orderList=data;
      console.log(this.orderList);
    },(error)=>{
      alert("Error while during fetching order list");
    }
    )
  }

  populateOrderDetails(orderedItem:any){
    console.log("populate order details");
    this.router.navigate(['orders', orderedItem.orderId]);
  }

  getProductNameById(productId:string){

    return "My Product Name";
    
  }
}
