import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}
  private cartData: any[] = [];

  getCartData(): any[] {
    return this.cartData;
  }

  addToCart(item: any): void {
    this.cartData.push(item);
  }

  productData: any[] = [
    {
      product_id: 1,
      product_name: 'Apple iPhone 14 Pro Max',
      product_description: '(1 TB) - Silver, Dynamic Island, a magical new way to interact with iPhone ',
      product_price: 179099,
      product_image: 'assets/images/phone1.jpg',
    },
    {
      product_id: 2,
      product_name: 'ASUS [SmartChoice] Vivobook 15',
      product_description: 'Intel Celeron N4020, 15.6" (39.62 cms) HD, Thin and Light Laptop 8GB/512GB',
      product_price: 65699,
      product_image: 'assets/images/laptop1.jpg',
    },
    {
      product_id: 3,
      product_name: 'boAt Rockerz 450 Bluetooth ',
      product_description: 'On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions',
      product_price: 3499,
      product_image: 'assets/images/headphone1.jpg',
    },
    {
      product_id: 4,
      product_name: 'Apple MacBook Air Laptop M1',
      product_description: '13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard.',
      product_price: 80900,
      product_image: 'assets/images/macbook2.jpg',
    },
    {
      product_id: 5,
      product_name: 'HP K500F  ',
      product_description: 'Backlit Membrane Wired Gaming Keyboard with Mixed Color Lighting.',
      product_price: 1109,
      product_image: 'assets/images/keyboard1.jpg',
    },
    {
      product_id: 6,
      product_name: 'HP Laptop 15s',
      product_description: '11th Gen Intel Core i3-1115G4, 15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD.',
      product_price: 39800,
      product_image: 'assets/images/laptop2.jpg',
    },
    {
      product_id: 7,
      product_name: 'Samsung Galaxy Z Fold5',
      product_description: '5G Phantom Black, 12GB RAM, 512GB Storage, Wireless Charging, Built-In GPS ',
      product_price: 164340,
      product_image: 'assets/images/phone2.jpg',
    },
    {
      product_id: 8,
      product_name: 'Ambrane 50000mAh Powerbank',
      product_description: '20W Fast Charging, Metallic Body, Triple Output, Type C PD (Input & Output). ',
      product_price: 4800,
      product_image: 'assets/images/bank1.jpg',
    },
    {
      product_id: 9,
      product_name: 'Apple 2023 MacBook Pro ',
      product_description: 'Laptop M2 Max chip with 12-core CPU and 38-core GPU: 33.74 cm (16.2-inch).',
      product_price: 349550,
      product_image: 'assets/images/macbook1.jpg',
    },
    {
      product_id: 10,
      product_name: 'boAt Rockerz 450',
      product_description: 'Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers.',
      product_price: 1499,
      product_image: 'assets/images/headphone2.jpg',
    },
    {
      product_id: 11,
      product_name: 'Apple Magic Mouse',
      product_description: 'for Bluetooth-Enabled Mac with OS X 10.11 or Later, iPad with iPadOS 13.4 or Later',
      product_price: 6450,
      product_image: 'assets/images/mouse1.jpg',
    },
  ];
}
