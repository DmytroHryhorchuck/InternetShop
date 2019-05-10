import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from './card.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  currentPage: string;
  invisible = false;
  allItemsQuantity: number;

  constructor(private router: Router, private cardService: CardService){}

 ngOnInit(){
  this.router.events.subscribe(() => this.checkActiveLinkMenu());
  this.shopingCartItemsQuantity();
  this.cardService.changeChartQuantity.subscribe(() => this.shopingCartItemsQuantity());
 }

 checkActiveLinkMenu(){
  if(this.router.url.includes('home')) this.currentPage = 'home';
  else if(this.router.url.includes('contacts')) this.currentPage = 'contacts';
  else if(this.router.url.includes('shopingCart')) this.currentPage = 'shopingCart';
  else if(this.router.url.includes('delivery')) this.currentPage = 'delivery';
  else if(this.router.url.includes('payment')) this.currentPage = 'payment';
 }

 shopingCartItemsQuantity(){
  const products = JSON.parse(localStorage.getItem('products'));
  this.allItemsQuantity = products.reduce((total, el) => total += el.quantity, 0);
 }



 
}