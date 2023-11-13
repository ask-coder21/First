import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container, Row, Col} from 'reactstrap';
import { ToastContainer,toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menu from './components/Menu';
import {Route,Routes,BrowserRouter} from "react-router-dom"
import { useEffect, useState } from 'react';
import CourseData from './components/CourseData';
// const API="http://localhost:3000/Data.json";
import FetchData from './FetchData'

function App() {

  // return( <div>
  //   <h1>radhe radhe</h1>
  // </div>


//   const btnHandle = () =>{
//     toast.success("done",{position:'top-center'});
//   };

  return (
    <div>
        <ToastContainer/>
        <Header/>
        <Container>
          <Row>
            <Col md="4">
              <Menu/>
            </Col>
            
            <Col md="8">
          <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/all-courses" Component={AllCourses}/>
            <Route path="/add-course" Component={AddCourse}/>
            <Route path="/about" Component={Home}/>
            <Route path="/contact" Component={Home}/>
          </Routes>
              {/* <Home/> */}
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
