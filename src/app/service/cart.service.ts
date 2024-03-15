import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public carItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  constructor() {}
  // to things Create in GetProduct methode geter andd seter
  getProducts() {
    return this.productList.asObservable();
  }
  setProduct(product: any) {
    this.carItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product: any) {
    this.carItemList.push(product);
    this.productList.next(this.carItemList);
    this.getTotalPrice();
    console.log(this.carItemList);
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.carItemList.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }
  removeCartItem(product: any) {
    this.carItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.carItemList.splice(index, 1);
      }
    });
    this.productList.next(this.carItemList);
  }
}
