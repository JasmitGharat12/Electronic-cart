import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartProduct } from 'src/app/models/CartType';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(private cartService: CartService, private router: Router) {}
  cartTotal = this.cartService.calculateCartTotal();
  CartData: CartProduct[] = this.cartService.getCartItems();
  clearCart() {
    this.cartService.cartItems = [];
  }
  removeProduct(product: CartProduct) {
    const index = this.cartService.cartItems.indexOf(product);
    if (index !== -1) {
      this.cartService.cartItems.splice(index, 1);
      this.cartTotal = this.cartService.calculateCartTotal();
    }
  }

  incrementQuantity(product: CartProduct) {
    const check = this.cartService.cartItems.find(
      (item) => item.productId === product.productId
    );
    if (check) {
      product.productQuantity++;
      this.cartTotal = this.cartService.calculateCartTotal();
    }
  }

  decrementQuantity(product: CartProduct) {
    const check = this.cartService.cartItems.find(
      (item) => item.productId === product.productId
    );
    if (check) {
      if (product.productQuantity === 0) {
        product.productQuantity = 0;
      } else {
        product.productQuantity--;
        product.productTotalPrice = this.cartService.getTotalPrice(product);
      }
      this.cartTotal = this.cartService.calculateCartTotal();
    }
  }

  generateInvoice() {
    this.router.navigate(['/invoice']);
  }
}
