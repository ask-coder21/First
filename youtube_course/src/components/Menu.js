import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menu=()=>{
    return(
        <div>
            <ListGroup>
                <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
                    Home
                </Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action>
                    Add Courses
                </Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/all-courses" action>
                    All Courses
                </Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/about" action>
                    About
                </Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/contact" action>
                    Contact
                </Link>
            </ListGroup>
        </div>
    );
};

export default Menu;