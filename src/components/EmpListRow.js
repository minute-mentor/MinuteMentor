import React from 'react'
import Axios from "axios";
import { Link } from "react-router-dom";



export default function EmpListRow(props) 
{
    const {_id,fullname,email,phone,role,password,dob,gender,addr} = props.obj;
    
    const handleClick =()=>{
      Axios.delete("http://localhost:4000/empRoute/delete-emp/"+_id)
      .then((res)=>{
        if(res.status===200)
            {
                alert("Employe Removed");
                window.location.reload();
            }
            else{
                Promise.reject();
            }
      })
      .catch((err)=>alert(err))
    }


  return (
    <tr>


        <td>{fullname}</td>
        <td>{role}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{gender}</td>
        <td class="d-block mx-auto">
          <Link to={"/admin-user/"+email} className="text-light"><button class="btn btn-success m-2">View Info</button> </Link>
            
            <button onClick={handleClick} class="btn btn-danger m-2">Remove Employee</button> 
                                                
        </td>
    </tr>
  )
}
