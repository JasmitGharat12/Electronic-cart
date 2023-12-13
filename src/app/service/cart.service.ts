import { Injectable } from '@angular/core';
import { CartProduct } from '../models/CartType';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  cartItems: CartProduct[] = [];

  setCartItems(product: CartProduct) {
    const existingProduct = this.cartItems.find(
      (item) => item.productId === product.productId
    );

    if (existingProduct) {
      existingProduct.productQuantity++;
    } else {
      this.cartItems.push(product);
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  getCartItemCount() {
    return this.cartItems.length;
  }

  getTotalPrice(product: CartProduct): number {
    product.productTotalPrice = product.productPrice * product.productQuantity;
    return product.productTotalPrice;
  }

  calculateCartTotal(): number {
    let cartTotal = 0;
    for (const item of this.cartItems) {
      const itemTotal = this.getTotalPrice(item);
      cartTotal += itemTotal;
    }
    return cartTotal;
  }
}
