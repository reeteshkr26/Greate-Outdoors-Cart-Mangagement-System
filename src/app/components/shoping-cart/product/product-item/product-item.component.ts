import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
import { SendItemService } from 'src/app/services/send-item.service';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/model/cart-item';



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
 @Input() productItem:Product;

  constructor(private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
  }

  handleAddToCart(){
      this.cartService.addToCart(this.productItem);
  }
}
