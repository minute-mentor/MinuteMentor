import React,{useState,useEffect} from "react";
import axios from "axios";

export default function EmpInfo() 
{
    const [myData,setMyData] = useState([]);

    const [fname,setFname] = useState();
    const [email,setEmail] = useState();
    const [phone,setPhone] = useState();
    const [role,setRole] = useState();
    const [password,setPassword] = useState();
    const [dob,setDob] = useState();
    const [addr,setAddr] = useState();
    const [gender,setGender] = useState();
    const [uname,setUname] = useState();

    
    useEffect(()=>{
      axios.get("http://localhost:4000/empRoute")
      .then((res)=>
      {
        setMyData(res.data)
        for (let index = 0; index < res.data.length; index++) 
        {
            if(res.data[index].username==="john@45")
            {
                console.log("found it");
                setFname(res.data[index].fullname);
                setEmail(res.data[index].email);
                setPhone(res.data[index].phone);
                setRole(res.data[index].role);
                setPassword(res.data[index].password);
                setDob(res.data[index].dob);
                setAddr(res.data[index].addr);
                setGender(res.data[index].gender);
                setUname(res.data[index].username); // this will only run once
                break; // exit the loop
            } 
        }
        
      }
        
      );
    },[]); 


  return (
    <div class="container mx-auto shadow-lg p-3 mb-5  rounded mt-5" style={{width:"fit-content"}} >
        <table>
            <tr>
                <td>Username : </td>
                <td>{uname}</td>
            </tr>
            <tr>
                <td>Fullname : </td>
                <td>{fname}</td>
            </tr>
            <tr>
                <td>Email : </td>
                <td>{email}</td>
            </tr>
            <tr>
                <td>Phone : </td>
                <td>{phone}</td>
            </tr>
            <tr>
                <td>Gender : </td>
                <td>{gender}</td>
            </tr>
            <tr>
                <td>Designation : </td>
                <td>{role}</td>
            </tr>
            <tr>
                <td>Address : </td>
                <td>{addr}</td>
            </tr>
            <tr>
                <td>Date of Birth : </td>
                <td>{dob}</td>
            </tr>
            
        </table>
    
    </div>
  )
}
