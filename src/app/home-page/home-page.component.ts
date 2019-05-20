import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardService } from '../card.service';
import { Product } from '../product';
import { Subscription } from 'rxjs';
import { data } from '../mock-data';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  
  cards: Product[] = [];
  showCard: Product[];
  searchstr = "";
  subsProducts: Subscription;
  itemInCart = false;
  buyItem = true;

  showMobile: boolean = true;
  showTablet: boolean = true;
  showCover: boolean = true;
  showGlass: boolean = true;


  p: number = 1;
  collection: any[] = this.showCard;  
  

  constructor(private cardService: CardService){}

  ngOnInit (){
    this.getProducts();
    }

  getProducts(){
    this.subsProducts = this.cardService.getProducts()
      .subscribe(data => {this.cards = data; this.showCard = data;});
  }

  ngOnDestroy(){
    this.subsProducts.unsubscribe();
  }
 
 allproducts(){
  this.showMobile = true;
  this.showTablet = true;
  this.showCover = true;
  this.showGlass = true;
  }
 
}



