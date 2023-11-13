package com.rest.entity;

import jakarta.persistence.Entity;

//import java.util.List;

import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Course_Table")
public class Courses {
	@Id
	private int id;
	private String courses;
	private String title;
	public Courses(int id, String courses, String title) {
		super();
		this.id = id;
		this.courses = courses;
		this.title = title;
	}
	
	
	
	public Courses() {
		super();
		// TODO Auto-generated constructor stub
	}



	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCourses() {
		return courses;
	}
	public void setCourses(String courses) {
		this.courses = courses;
	}
	public String getDesc() {
		return title;
	}
	public void setDesc(String desc) {
		this.title = desc;
	}
	
	
	
}
