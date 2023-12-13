import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { CartService } from 'src/app/service/cart.service';
import { CartProduct } from 'src/app/models/CartType';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { loginAuthGuard } from 'src/app/guards/login-auth.guard';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  productDataFromDatabase: Product[] = [];

  ngOnInit(): void {
    this.http
      //.get<Product[]>('http://localhost:3000/api/productData', {
        .get<Product[]>('http://localhost:8080/products', {
        responseType: 'json',
      })
      .subscribe(
        (response) => {
          this.productDataFromDatabase = response;
          console.log(this.productDataFromDatabase);
        },
        (error) => {
          console.error('Error getting user details', error);
        }
      );
  }

  productsData: any;
  cartData: CartProduct = {
    productId: 0,
    productName: '',
    productDetails: '',
    productPrice: 0,
    productQuantity: 0,
    productImage: '',
    productTotalPrice: 0,
  };
  constructor(
    private products: ProductsService,
    private cartService: CartService,
    private router: Router,
    private http: HttpClient
  ) {
    this.productsData = products.productData;
  }
  addToCart(product: any) {
    const isUserLoggedIn = localStorage.getItem('user');
    console.log(isUserLoggedIn);
    if (isUserLoggedIn == 'false') {
      alert('login First!!');
      this.router.navigate(['/login']);
    } 

    this.cartData.productId = product.product_id;
    this.cartData.productName = product.product_name;
    this.cartData.productDetails = product.product_description;
    this.cartData.productPrice = product.product_price;
    this.cartData.productQuantity = 1;
    this.cartData.productImage = product.product_image;

    this.cartService.setCartItems(this.cartData);
  }
}
