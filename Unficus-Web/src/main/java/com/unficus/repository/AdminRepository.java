package com.unficus.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unficus.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {

}
