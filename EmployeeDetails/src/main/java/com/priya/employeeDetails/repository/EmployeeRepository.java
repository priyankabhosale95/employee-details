package com.priya.employeeDetails.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.priya.employeeDetails.entity.Employee;

//@RepositoryRestResource(collectionResourceRel = "employee" , path="employee-details")
@CrossOrigin("http://localhost:4200")
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
