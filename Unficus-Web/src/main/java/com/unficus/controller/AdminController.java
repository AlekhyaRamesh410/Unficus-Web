package com.unficus.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("AdminController")
public class AdminController {
	
	@RequestMapping("/admins")
	public String getAdmins() {
		return "welcome to admins";
	}

}
