import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shoping-cart/shopping-cart/shopping-cart.component';
import { CartComponent } from './components/shoping-cart/cart/cart.component';
import { OrderComponent } from './components/my-order/order/order.component';
import { OrderDetailsComponent } from './components/my-order/order-details/order-details.component';
import { CanActivateGuard } from './router-guard/can-activate.guard';


const routes: Routes = [
  {path:'',component:ShoppingCartComponent},
  //{path:"shopping",component:ShoppingCartComponent},
  {path:"cart",component:CartComponent,canActivate:[CanActivateGuard]},
  {path:"orders",component:OrderComponent},
  {path:"orders/:orderId",component:OrderDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
