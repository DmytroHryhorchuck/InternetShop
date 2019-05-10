import { Injectable } from '@angular/core';
import { data } from './mock-data';
import { Product } from './product';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  changeChartQuantity = new Subject();

  constructor() { }

  getProducts(): Observable<Product[]>{
    return of(data);
  }

  getProductById(id: number): Observable<Product>{
    return of(data.find(x => x.id === id))
  }

}
