package com.priya.employeeDetails.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="tbl_qualification")
public class Qualification {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="qid")
	private Long qid;
	
	@Column(name="qname")
	private String qname;
	
	@Column(name="university")
	private String university;
	
	@Column(name="date_of_passing")
	private Date passing_date;
	
	@ManyToOne
	@JoinColumn(name="emp_id", nullable = false)
	private Employee employee;

	public Long getQid() {
		return qid;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public void setQid(Long qid) {
		this.qid = qid;
	}

	public String getQname() {
		return qname;
	}

	public void setQname(String qname) {
		this.qname = qname;
	}

	public String getUniversity() {
		return university;
	}

	public void setUniversity(String university) {
		this.university = university;
	}

	public Date getPassing_date() {
		return passing_date;
	}

	public void setPassing_date(Date passing_date) {
		this.passing_date = passing_date;
	}

	@Override
	public String toString() {
		return "Qualification [qid=" + qid + ", qname=" + qname + ", university=" + university + ", passing_date="
				+ passing_date + "]";
	}

	

		
}
