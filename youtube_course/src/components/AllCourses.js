import React from "react";
import { useState,useEffect } from "react";
import Course from "./Course";
import { Button } from "reactstrap";
import base_url from "../api/bootapi";
import axios from 'axios'
import { toast } from "react-toastify";

const API="http://localhost:8080";

const AllCourses=()=>{
    const [course,setCourses]=useState([])

    const updateCourse=(id)=>{
        setCourses(course.filter((c) => c.id!=id)); 
    }
    
    useEffect(() =>{
        axios.get(`${base_url}courses`).then((res) => {
            console.log(res.data);
            // toast.success("loaded",{position:"bottom-center"},[]);
            setCourses(res.data);
        },(err) =>{
            console.log(err);
            toast.error("backend server is down",{position:"bottom-center"});
        })
    },[])

    return(
        <div>
            
            <h1>All courses</h1>
            <p>List of courses are as follows</p>

            {
                course.length>0 ? 
                course.map((i) => <Course course={i} update={updateCourse}  />)
                :"No courses available"
            }

        </div>
    );
}

export default AllCourses;