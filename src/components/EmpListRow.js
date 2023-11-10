import React from 'react'
import Axios from "axios";
import { Link } from "react-router-dom";



export default function EmpListRow(props) 
{
    const {_id,fullname,email,phone,role,password,dob,gender,addr,username} = props.obj;


  return (
    <tr>

        <td>{fullname}</td>
        <td>{role}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{gender}</td>
        <td class="d-block mx-auto">
            <button class="btn btn-success m-2">View Info</button> 
            <button class="btn btn-danger m-2">Remove Employee</button> 
                                                
        </td>
    </tr>
  )
}
