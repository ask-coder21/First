import { useEffect } from "react";
import React from 'react'
import axios from 'axios'
import { useState } from "react";
const API="http://localhost:8080";


function FetchData(){   
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get(`${API}/courses`)
        .then(res => setData(res.data))
        // .then(res => console.log(res.data))
        .catch(err => console.log(err));
    },[])
    return (
        <div className="container">
            <div className="mt-3">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>course</th>
                            <th>title</th>
                            {/* <th>city</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user,index) => {
                                return <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.courses}</td>
                                    <td>{user.desc}</td>
                                    {/* <td>{user.address.city}</td> */}
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FetchData;