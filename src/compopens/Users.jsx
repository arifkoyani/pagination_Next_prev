import React from "react";
import Button from 'react-bootstrap/Button';

const Users=(props)=>{


    const dataa={name:"arifhussain",age:22,email:"arifkoyani@gmail.com",city:"Hunza"}
    return(
        <>

        <button onClick={()=>props.pass(dataa)}>update me</button>

        </>
    )
}

export default Users;