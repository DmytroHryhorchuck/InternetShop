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
  allItemsQuantity: number=0;

  constructor(private router: Router, private cardService: CardService){}

 ngOnInit(){
  this.router.events.subscribe(() => this.checkActiveLinkMenu());
  this.cardService.changeChartQuantity.subscribe(() => this.shopingCartItemsQuantity());
  this.shopingCartItemsQuantity();
  
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

 onActivate(event) {
  let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
          window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
          window.clearInterval(scrollToTop);
      }
  }, 16);
}

 
}