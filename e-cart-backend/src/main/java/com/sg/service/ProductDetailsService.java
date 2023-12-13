package com.sg.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sg.dao.ProductRepo;
import com.sg.entities.ProductDetails;

@Service
public class ProductDetailsService {
	@Autowired
	private ProductRepo productRepo;
	
	public void saveProductdetails(ProductDetails product) {
		productRepo.save(product);
	}

	public List<ProductDetails> getProducts() {
		Iterable<ProductDetails> it = productRepo.findAll();
		List<ProductDetails> productList = new ArrayList<>();
		for (ProductDetails product : it) {
	        productList.add(product);
	    }
		return productList;
	}

	public Optional<ProductDetails> getProduct(int id) {
		Optional<ProductDetails> product = this.productRepo.findById(id);
		return product;
	}
}
