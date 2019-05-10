import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { CardService } from '../card.service';

@Component({
selector: 'app-card',
templateUrl: './card.component.html',
styleUrls: ['./сard.component.css']
})

export class CardComponent {
   @Input() card;

   constructor(private router: Router, private cardService: CardService){}

   istextHovered = false;
   ishovered = false;

   mouseenterCard(){
   this.istextHovered = true;
   this.ishovered = true;
}
mouseleaveCard(){
   this.istextHovered = false;
   this.ishovered = false;
}

addToChart(item: Product){
   const products = JSON.parse(localStorage.getItem('products'));
   if(products){
      products.push(item);
      localStorage.setItem('products', JSON.stringify(products));
   }else{
      localStorage.setItem('products', JSON.stringify([item]));
      alert('lalala')
   }
   this.cardService.changeChartQuantity.next();
   this.router.navigateByUrl('shopingCart');
}

}