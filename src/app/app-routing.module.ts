import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import {DeliveryComponent} from './delivery/delivery.component' ;
import {PaymentComponent} from './payment/payment.component' ;

const routes: Routes = [
  {path: 'home', component: HomePageComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'detail/:id', component: ItemCardComponent},
  {path: 'contacts', component: ContactsPageComponent},
  {path: 'shopingCart', component: ShopingCartComponent},
  {path: 'delivery', component: DeliveryComponent},
  {path: 'payment', component: PaymentComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
