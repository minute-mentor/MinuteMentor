import React from 'react'
import { useEffect, useState } from "react";

export default function EmpForm(props) 
{
    const [_id,setId] = useState("");
    const [fullname,setFname] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [role,setRole] = useState("");
    const [password,setPassword] = useState("");
    const [dob,setDob] = useState("");
    const [gender,setGender] = useState("");
    const [addr,setAddr] = useState("");

    useEffect(()=>
    {
        setId(props.idValue);
        setFname(props.fullnameValue);
        setEmail(props.emailValue);
        setPhone(props.phoneValue);
        setRole(props.roleValue);
        setPassword(props.passwordValue);
        setDob(props.dobValue);
        setGender(props.genderValue);
        setAddr(props.addrValue);       
        

    },[props.idValue,props.fullnameValue,props.emailValue,props.phoneValue,props.roleValue,props.passwordValue,props.dobValue,props.genderValue,props.addrValue])
    
    const arr = [_id,fullname,email,phone,role,password,dob,gender,addr];

    const handleClick = ()=>{
        props.getState(arr);
    }


  return (
    <div style={{maxWidth:"60%",margin:"60px auto"}}>
        <label style={{fontSize:"28px",color:"white",padding:"2px",fontWeight:"bold",textShadow:"-1px 0 0 black, 0 1px 0 black, 1px 0 0 black, 0 -1px 0 black"}}>Full Name : </label>
        <input defaultValue={props.fullnameValue} onChange={(event)=>setFname(event.target.value)} class="form-control my-3" placeholder="enter your name"/>
        <label style={{fontSize:"28px",color:"white",padding:"2px",fontWeight:"bold",textShadow:"-1px 0 0 black, 0 1px 0 black, 1px 0 0 black, 0 -1px 0 black"}}>Phone Number : </label>
        <input defaultValue={props.phoneValue} onChange={(event)=>setPhone(event.target.value)} class="form-control my-3" placeholder="enter your roll No"/>
        <label style={{fontSize:"28px",color:"white",padding:"2px",fontWeight:"bold",textShadow:"-1px 0 0 black, 0 1px 0 black, 1px 0 0 black, 0 -1px 0 black"}}>Password : </label>
        <input defaultValue={props.passwordValue} onChange={(event)=>setPassword(event.target.value)} class="form-control my-3" placeholder="enter your password"/>
        <label style={{fontSize:"28px",color:"white",padding:"2px",fontWeight:"bold",textShadow:"-1px 0 0 black, 0 1px 0 black, 1px 0 0 black, 0 -1px 0 black"}}>Address : </label>
        <input defaultValue={props.addrValue} onChange={(event)=>setAddr(event.target.value)} class="form-control my-3" placeholder="enter your address"/>
        <label style={{fontSize:"28px",color:"white",padding:"2px",fontWeight:"bold",textShadow:"-1px 0 0 black, 0 1px 0 black, 1px 0 0 black, 0 -1px 0 black"}}>Date of Birth : </label>
        <input        placeholder={props.dobValue}
                      defaultValue={props.dobValue}
                      
                      className=" form-control my-3"
                      type="date"
                      onChange={(event)=>setDob(event.target.value)}
                      required
                    />
        <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">{props.children}</button>
      
    </div>
  )
}
