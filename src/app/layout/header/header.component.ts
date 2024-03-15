import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private cartService: CartService) {}
  public totalItem: number = 0;
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.totalItem = res.length;
    });
  }

  faHome = faHome;
  faListCheck = faListCheck;
  faShoppingCart = faShoppingCart;
}
