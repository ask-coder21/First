import React, { Fragment,Form, useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { Button, Container, FormGroup, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";


const AddCourse=()=>{

    useEffect(()=>{
        document.title="Add Course"; 
    },[])

    const [course,setCourse]=useState({});

    const handleForm= (e) =>{
        console.log(course);
        postDataToSerever(course);
        e.preventDefault();
    }

    //creating function to post data to server
    const postDataToSerever = (data) => {
        axios.post(`${base_url}courses`,data)
        .then((response)=>{
            console.log(response);
            console.log("sucess");
            toast.success("added succesfully",{position:"bottom-center"});
        },(error)=>{
            console.log(error);
            console.log("failed");
            toast.success("failed to add")
        });
    };

   return (
        <div>
            <h1 className="text-center my-3">Fill Course Details</h1>
            <form onSubmit={handleForm}>
                <FormGroup >
                    <label for="userId">Course Id</label>
                    <Input
                    type="text" 
                    placeholder="Enter here" 
                    name="userId" id="userId"
                    onChange={(e)=>{setCourse({...course,id: e.target.value});
                }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="title">Title</label>
                    <Input
                    type="text" 
                    placeholder="Enter title" 
                    name="title" id="title"
                    onChange={(e)=>{setCourse({...course,courses: e.target.value});
                }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input
                    type="textarea" 
                    placeholder="Enter description" 
                    name="description" id="description"
                    onChange={(e)=>{setCourse({...course,desc: e.target.value});
                }}
                    />
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success" style={{margin:"10px"}}>Add Course</Button>
                    <Button type="reset" color="info">Clear</Button>
                </Container>
            </form> 

        </div>   
   );
};

export default AddCourse;