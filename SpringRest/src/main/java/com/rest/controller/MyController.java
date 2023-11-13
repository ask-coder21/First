package com.rest.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rest.entity.Courses;
import com.rest.service.CourseService;

@RestController
@CrossOrigin
public class MyController {
	@Autowired
	private CourseService courseService;
	
	@GetMapping("/user")
	public String user() {
		return "My course controller";
	}
	
	@GetMapping("/courses")
	public List<Courses> getCourses(){
		return courseService.getCourses();
	}
	
	@GetMapping("/courses/{courseId}")
	public Optional<Courses> getCourse(@PathVariable int courseId) {
		return courseService.getCourse(courseId);
	}
	
	@PostMapping("/courses")
	public Courses saveCourse(@RequestBody Courses course) {
		courseService.saveCourse(course);
		return course;
	}
	
	@PutMapping("/courses")
	public Courses updateCourse(@RequestBody Courses course) {
		courseService.updateCourse(course,course.getId());
		return course;
	}
	@DeleteMapping("/courses")
	public ResponseEntity<HttpStatus> delelteCourse(@RequestBody Courses course) {
//		courseService.delteCourse(course);
//		return course;
		try {
			courseService.delteCourse(course);
			return ResponseEntity.status(HttpStatus.OK).build();
		}catch(Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	@DeleteMapping("/courses/{id}")
	public ResponseEntity<HttpStatus> delelteCourse(@PathVariable int id) {
//		courseService.delteCourse(course);
//		return course;
		try {
			courseService.delteCourse(id);
			return ResponseEntity.status(HttpStatus.OK).build();
		}catch(Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
}
