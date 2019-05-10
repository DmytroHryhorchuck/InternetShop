import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DomSanitizer} from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CardService } from '../card.service';
import { Product } from '../product';


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit, OnDestroy {

  card: Product;
  subsCard: Subscription;

  constructor(
    private cardService: CardService,
    private router:  ActivatedRoute,
    private sanitizer: DomSanitizer,
    private routerUrl:  Router,
    ) { }

  get url(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.card.video);
  }

  ngOnInit() {
    this.getCard();
  }

  getCard(){
    const id = +this.router.snapshot.paramMap.get('id');
    this.subsCard = this.cardService.getProductById(id)
      .subscribe(data => this.card = data);
  }
  addToChart(item: Product){
    const products = JSON.parse(localStorage.getItem('products'));
    if(products){
       products.push(item);
       localStorage.setItem('products', JSON.stringify(products));
    }else{
       localStorage.setItem('products', JSON.stringify([item]));
    }
    this.cardService.changeChartQuantity.next();
    this.routerUrl.navigateByUrl('shopingCart');
 }

  ngOnDestroy(){
    this.subsCard.unsubscribe();
  }

}
