package com.sg.controller;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sg.entities.LoginRequest;
import com.sg.entities.ProductDetails;
import com.sg.entities.UserDetails;
import com.sg.service.ProductDetailsService;
import com.sg.service.UserDetailsService;

@RestController
@CrossOrigin("*")
public class MainController {

	Logger logger = LoggerFactory.getLogger(MainController.class);
	
	@Autowired
	private UserDetailsService userDetailsService;
	@Autowired
	private ProductDetailsService productDetailsService;

	@GetMapping("/products")
	public ResponseEntity<List<ProductDetails>> getProducts() {
		try {
			List<ProductDetails> productList = productDetailsService.getProducts();
			return ResponseEntity.of(Optional.of(productList));
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}

	@GetMapping("/product/{id}")
	public ResponseEntity<Optional<ProductDetails>> getProduct(@PathVariable("id") int id) {
		System.out.println(id);
		try {
			Optional<ProductDetails> product = this.productDetailsService.getProduct(id);
			return ResponseEntity.of(Optional.of(product));
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}

	@PostMapping("/addUser")
	public ResponseEntity<UserDetails> addUser(@RequestBody UserDetails user) {
		try {
			this.userDetailsService.saveUserDetails(user);
			return ResponseEntity.of(Optional.of(user));
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.of(java.util.Optional.empty());
		}
	}

	@PostMapping("/validateLogin")
	public ResponseEntity<Boolean> validateLogin(@RequestBody LoginRequest user) {
		try {
			Boolean isValid = this.userDetailsService.loginValidation(user);
			if (isValid) {
				return ResponseEntity.ok(true);
			}
			return ResponseEntity.ok(false);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.of(java.util.Optional.empty());
		}
	}

}
