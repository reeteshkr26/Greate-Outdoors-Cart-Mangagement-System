import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/shared/nav/nav.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CartItemComponent } from './components/shoping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shoping-cart/product/product-item/product-item.component';
import { ProductListComponent } from './components/shoping-cart/product/product-list/product-list.component';
import { FilterComponent } from './components/shoping-cart/filters/filter/filter.component';
import { ShoppingCartComponent } from './components/shoping-cart/shopping-cart/shopping-cart.component';
import { CartComponent } from './components/shoping-cart/cart/cart.component';

import {HttpClientModule} from '@angular/common/http';

import {CartService} from './services/cart.service';
import {ProductService} from './services/product.service';
import { OrderItemComponent } from './components/my-order/order-item/order-item.component';
import { OrderComponent } from './components/my-order/order/order.component';

import {MatCardModule} from '@angular/material/card';
import { OrderDetailsComponent } from './components/my-order/order-details/order-details.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CancelOrderComponent } from './components/pop-up/cancel-order/cancel-order.component';
import { FormsModule } from '@angular/forms';
import { SendItemService } from './services/send-item.service';
import { AddressComponent } from './components/address/address.component';
import { OrderService } from './services/order.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    CartItemComponent,
    ProductItemComponent,
    ProductListComponent,
    FilterComponent,
    ShoppingCartComponent,
    CartComponent,
    OrderItemComponent,
    OrderComponent,
    OrderDetailsComponent,
    CancelOrderComponent,
    AddressComponent
  ],
  entryComponents:[CancelOrderComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
    
  ],
  providers: [ProductService,CartService,SendItemService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
