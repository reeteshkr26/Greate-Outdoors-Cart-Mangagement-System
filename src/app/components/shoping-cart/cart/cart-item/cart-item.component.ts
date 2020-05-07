import { Component, OnInit, Input } from '@angular/core';
import { SendItemService } from 'src/app/services/send-item.service';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/model/cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem:CartItem;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
      
  }




}
