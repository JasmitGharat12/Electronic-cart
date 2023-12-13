import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  quantity: number = 0;
  showLogOut: boolean = false;
  showLogIn: boolean = false;
  searchedProducts: any[] = [];
  search: string = '';
  constructor(
    private cartService: CartService,
    private productService: ProductsService
  ) {
    this.quantity = cartService.getCartItemCount();
    const isUserLoggedIn = localStorage.getItem('user');

    if (isUserLoggedIn == null) {
      this.showLogOut = false;
      this.showLogIn = true;
    } else {
      this.showLogOut = true;
      this.showLogIn = false;
    }
  }

  logout() {
    localStorage.removeItem('user');
  }

  updateFilteredProducts() {
    this.searchedProducts = this.productService.productData.filter(
      (product) => {
        return (
          product.p_name.toLowerCase().includes(this.search.toLowerCase()) ||
          product.p_description
            .toLowerCase()
            .includes(this.search.toLowerCase())
        );
      }
    );
  }

 
}
