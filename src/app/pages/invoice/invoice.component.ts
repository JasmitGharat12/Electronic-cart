import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { CartProduct } from 'src/app/models/CartType';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent {
  constructor(private cartService: CartService) {}
  userName = localStorage.getItem('user');
  arr: CartProduct[] = this.cartService.cartItems;
  subTotal = this.cartService.calculateCartTotal();
  temp = this.subTotal * (10 / 100);
  Total = this.subTotal + this.temp;
  print() {
    window.print();
  }

  generateRandomId(): string {
    const randomNum1 = Math.floor(Math.random() * 1000);
    const randomNum2 = Math.floor(Math.random() * 1000);
    return `#${String(randomNum1).padStart(3, '0')}-${String(
      randomNum2
    ).padStart(3, '0')}`;
  }

  randomId: string = this.generateRandomId();
}
