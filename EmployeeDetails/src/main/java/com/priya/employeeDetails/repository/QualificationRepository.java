package com.priya.employeeDetails.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.priya.employeeDetails.entity.Qualification;

@CrossOrigin("http://localhost:4200")
public interface QualificationRepository extends JpaRepository<Qualification, Long>{

}
