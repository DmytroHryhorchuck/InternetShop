import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardService } from '../card.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router'
import { DomSanitizer} from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {

  items: Product[];
  sum: number;
  total:number;
  emptyShopingCart:boolean;

  constructor(
    private cardService: CardService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer
    ) { }


  ngOnInit() {
    this.getData();

    this.checkShopingCart();
  }
  checkShopingCart(){
    const products = JSON.parse(localStorage.getItem('products'));
    if (products.length===0){
          this.emptyShopingCart=true
    }
    else(this.emptyShopingCart=false)
  }
  getData(){
    this.items = JSON.parse(localStorage.getItem('products'));
    this.getTotal();
  }

  getTotalItem(item: Product): number{
    return item.quantity * item.price;
  }

  deleteItem(id: number){
    this.items = this.items.filter(x => x.id !== id);
    this.getTotal();
    localStorage.setItem('products', JSON.stringify(this.items));
    this.cardService.changeChartQuantity.next();
    this.checkShopingCart()
  }

  getTotal(){
    this.sum = this.items.reduce((total, el) => total += el.quantity * el.price, 0);
  }

  getChartQuantity(){
    localStorage.setItem('products', JSON.stringify(this.items));
    this.cardService.changeChartQuantity.next();
  }

  ngOnDestroy(){
  
  }

}
