import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { CardService } from '../card.service';

@Component({
selector: 'app-card',
templateUrl: './card.component.html',
styleUrls: ['./сard.component.css']
})

export class CardComponent implements OnInit {

   itemInCart = false;
   buyItem = true;
   ishovered = false;

   @Input() card;

   constructor(private router: Router, private cardService: CardService){}

   ngOnInit(){
      this.checkIsProductInChart();
   }

   mouseenterCard(){
      this.ishovered = true;
   }

   mouseleaveCard(){
      this.ishovered = false;
   }

   checkIsProductInChart(){
      const products = JSON.parse(localStorage.getItem('products'));
      products.forEach(prod => {
         if(prod.id === this.card.id){
            this.itemInCart = true;
            this.buyItem = false;
         }
      })
   }

   addToChart(item: Product){
      const products = JSON.parse(localStorage.getItem('products'));
      if(products){
         if(products.find(x => x.id === item.id)) return;
         products.push(item);
         localStorage.setItem('products', JSON.stringify(products));
      }else{
         localStorage.setItem('products', JSON.stringify([item]));
      }

      this.cardService.changeChartQuantity.next();

      this.router.navigateByUrl('shopingCart');
   }
   
}
