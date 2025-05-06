package com.rest.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rest.dao.CourseDao;
import com.rest.entity.Courses;

@Service
public class CourseService implements CourseRepository {

//	public List<Courses>li;
	@Autowired
	private CourseDao courseDao;
	
	public CourseService() {
//		li=new ArrayList<>();
//		li.add(new Courses(1,"DSA","3 month course"));
//		li.add(new Courses(2,"REst API","3 month course"));
//		li.add(new Courses(3,"Spring controller","3 month course"));
	}
	
	@Override
	public List<Courses> getCourses() {
		// TODO Auto-generated method stub
//		return li;
		System.out.println("sita ram");
		return courseDao.findAll();
	}

	@Override
	public Optional<Courses> getCourse(int n) {
		// TODO Auto-generated method stub
//		for(int i=0;i<li.size();i++) {
//			Courses c=li.get(i);
//			if(c.getId()==n) {
//				return c;
//			}
//		}
//		return null;
		return courseDao.findById(n);
	}

	@Override
	public void saveCourse(Courses c) {
		// TODO Auto-generated method stub
//		li.add(c);
		courseDao.save(c);
	}

	@Override
	public void updateCourse(Courses course,int n) {
		// TODO Auto-generated method stub
//		for(int i=0;i<li.size();i++) {
//			Courses c=li.get(i);
//			if(c.getId()==n) {
//				li.remove(i);
//				li.add(course);
//			}
//		}
		courseDao.save(course);
	}

//	@Override
	public void delteCourse(Courses c) {
		// TODO Auto-generated method stub
//		for(int i=0;i<li.size();i++) {
//			Courses cc=li.get(i);
//			if(c.getId()==cc.getId()) {
//				li.remove(i);
//			}
//		}
		courseDao.deleteById(c.getId());
	}

	public void delteCourse(int id) {
		// TODO Auto-generated method stub
		courseDao.deleteById(id);
	}
	
	
	
}
