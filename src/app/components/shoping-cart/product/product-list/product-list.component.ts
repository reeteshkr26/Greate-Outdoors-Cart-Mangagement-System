import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/services/product.service';
import { Product } from "src/app/model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:Product[]=[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.loadProductList();
  }
  loadProductList(){
    this.productService.getProductList().subscribe(
      (data)=>{
        this.productList=data;
      }
    )
  }

}
