package com.sg.service;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.sg.dao.UserRepo;
import com.sg.entities.LoginRequest;
import com.sg.entities.UserDetails;

@Service
public class UserDetailsService {

	@Autowired
	private UserRepo userRepo;

	public void saveUserDetails(UserDetails user) {
		System.out.println(user);
		String unHashedPassword = user.getPassword();
		String hashedPassword = BCrypt.hashpw(unHashedPassword, BCrypt.gensalt());
		user.setPassword(hashedPassword);
		System.out.println(user);
		this.userRepo.save(user);
	}

	public boolean loginValidation(LoginRequest loginRequestUser) {
		UserDetails userdata = this.userRepo.findByEmail(loginRequestUser.getEmail());
		String userEnteredPassword = loginRequestUser.getPassword();
		if (loginRequestUser != null && BCrypt.checkpw(userEnteredPassword, userdata.getPassword())) {
            return true; 
        }
		return false;	
	}
}
