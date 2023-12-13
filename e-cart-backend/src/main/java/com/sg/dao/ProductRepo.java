package com.sg.dao;

import org.springframework.data.repository.CrudRepository;

import com.sg.entities.ProductDetails;

public interface ProductRepo extends CrudRepository<ProductDetails, Integer> {

}
