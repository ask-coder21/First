import React from "react";
import { Card,CardBody,CardHeader,CardTitle,CardSubtitle,Button,Container,CardText }
from "reactstrap";
import axios from 'axios';
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Course=({course,update})=>{

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}courses/${id}`).then(
            (res)=>{
                toast.success("deleted");
                update(id);
            },(err)=>{
                toast.success("not deleted");
            }
        )
    }

    const updateCourse=(data)=>{
        axios.post(`${base_url}courses/${data}`).then(
            (res)=>{
                console.log("updating...");
            },(err)=>{
                console.log("something went wrong");
            }
        );
    }

    return(
        <Card style={{padding:"1"}}>
            <CardBody className="text-center">
                <CardSubtitle style={{fontWeight:"bold"}}>{course.courses}</CardSubtitle>
                <CardText>{course.desc}</CardText>
                <Container className="text-center">
                    <Button onClick={()=>{
                        updateCourse(course);
                    }} color="warning" style={{margin:"10px"}} >Update</Button>
                    <Button onClick={()=>{
                        deleteCourse(course.id);
                    }} color="danger">Delete</Button>
                </Container>
            </CardBody>
        </Card>   
    );
}

export default Course;