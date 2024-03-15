import { CartService } from '../../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public productList: any;

  constructor(private api: ApiService, private CartService: CartService) {}
  ngOnInit(): void {
    this.api.getProduct().subscribe((res) => {
      this.productList = res;
      this.productList.forEach((a: any) => {
        Object.assign(a, { total: a.price });
      });
    });
  }
  addtocart(item: any) {
    this.CartService.addtoCart(item);
  }
}
