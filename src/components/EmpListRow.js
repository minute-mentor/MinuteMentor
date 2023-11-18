import React from 'react'
import Axios from "axios";
import { Link } from "react-router-dom";



export default function EmpListRow(props) 
{
    const {_id,fullname,email,phone,role,password,dob,gender,addr} = props.obj;
    
    const handleClick =()=>{
      Axios.delete("https://minute-mentor.onrender.com/empRoute/delete-emp/"+_id)
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


        <td class="text-center">{fullname}</td>
        <td class="text-center">{role}</td>
        <td class="text-center">{email}</td>
        <td class="text-center">{phone}</td>
        <td class="text-center">{gender}</td>
        <td class="d-block mx-auto">
          <Link to={"/admin-user/"+email} className="text-light"><button style={{borderRadius:"40px"}} type="button" class="btn btn-outline-info btn-rounded m-2"  >View Info</button> </Link>
            
            <button onClick={handleClick} class="btn btn-outline-danger btn-rounded m-2" style={{borderRadius:"40px"}}>Remove Employee</button> 
           
        </td>
    </tr>
  )
}
