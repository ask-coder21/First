package com.rest.service;

import java.util.List;
import java.util.Optional;

//import org.springframework.data.jpa.repository.JpaRepository;

import com.rest.entity.Courses;

public interface CourseRepository{

	public List<Courses> getCourses();
	public Optional<Courses> getCourse(int n);
	public void saveCourse(Courses c);
	public void updateCourse(Courses c,int n);
	public void delteCourse(Courses c);
}
