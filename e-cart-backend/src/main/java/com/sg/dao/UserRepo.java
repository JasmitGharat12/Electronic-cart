package com.sg.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


import com.sg.entities.UserDetails;

@Repository
public interface UserRepo extends CrudRepository<UserDetails, Integer>{

	public UserDetails findByEmail(String email);

}

 