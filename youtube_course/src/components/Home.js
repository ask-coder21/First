import React from "react";
import { useEffect } from "react";
import { Button, Container } from "reactstrap";

const Home=()=>{

    useEffect(()=>{
        document.title="Home";
    },[]);

    return (
        <div>
            <div className="light-grey-color" style={{padding:50}}>
                <h1 style={{fontFamily:"-moz-initial"}} >Piyush Thakur</h1>
                <p style={{fontSize:14}}>Hello this is course website. Made using Springboot and React.</p>
                <Container>
                    <Button color="primary" outline="primary">Start learning with us</Button>
                </Container>
            </div>
        </div>
    )
}

export default Home;