import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination'; 

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PaymentComponent } from './payment/payment.component';

import { FilterProductPipe } from './filter-product.pipe';
import { Searchpipe } from './card/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    Searchpipe,
    HomePageComponent,
    ContactsPageComponent,
    ShopingCartComponent,
    ItemCardComponent,
    DeliveryComponent,
    PaymentComponent,
    FilterProductPipe,
 
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
