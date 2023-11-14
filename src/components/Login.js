import React, { useState } from 'react'
import backImage from '../../src/images/backtwo.jpg'
import logoImage from '../../src/images/logoimg.png'
import mailLogo from '../../src/images/mail.png'
import passlLogo from '../../src/images/pass.png'
import { Link,useNavigate } from "react-router-dom";
import Axios from "axios";


import CalenderComp from './CalenderComp'
import moment from 'moment'


export default function Login() 
{
  const navigate = useNavigate();

  const [uname,setUname]=useState();
  const [pas,setPassword]=useState();
  
  
  const handleChangeEmail = (e) =>{
    setUname(e.target.value);
  }

  const handleChangePass = (e) =>{
    setPassword(e.target.value);
  }

  var relogin=0;
  var reUser=0;
  var h = "tp";
  const currentDate = moment().format('MMMM Do YYYY');

  const newClick =()=>
  {
    Axios.get("http://localhost:4000/empRoute")
           .then((res)=>
    {

      for (let index = 0; index < res.data.length; index++) 
        {
            if(res.data[index].email===uname&&res.data[index].password===pas)
            {
                reUser=1; 
                console.log(reUser)
            } 
        }

        if (reUser==1) 
        {
          // redirect to another page
          const data={DATE:currentDate,status: "present",email:uname,duration:"0"}

          Axios.get("http://localhost:4000/attendanceRoute")
                 .then((res)=>
          {
      
            for (let index = 0; index < res.data.length; index++) 
              {
                  if(res.data[index].email===uname&&res.data[index].DATE===currentDate)
                  {
                      relogin=1; 
                      alert("Welcome Back !")
                      console.log(relogin)
                  } 
              }
      
              if(relogin==0)
              {
                Axios.post("http://localhost:4000/attendanceRoute/create-a",data)
                .then((res)=>{
                if(res.status === 200)
                {
                    alert("Marked Present");
                }
                else{
                    Promise.reject();
                }
      
                }).catch((err)=>alert(err));
              }
      
                 });
                 
                 navigate("/m-panel/"+uname, { replace: true });
      
        }
        else{
          alert("Invalid Credentials");
        }

     });
  }


  const handleClick = ()=>
  {

    console.log("haa haa2")
    const data={DATE:"November 12th 2023",status: "present",email:uname,duration:"0"}

    Axios.get("http://localhost:4000/attendanceRoute")
           .then((res)=>
    {

      for (let index = 0; index < res.data.length; index++) 
        {
            if(res.data[index].email===uname&&res.data[index].DATE==="November 12th 2023")
            {
                relogin=1; 
                alert("Welcome Back !")
                console.log(relogin)
            } 
        }

        if(relogin==0)
        {
          Axios.post("http://localhost:4000/attendanceRoute/create-a",data)
          .then((res)=>{
          if(res.status === 200)
          {
              alert("Marked Present");
          }
          else{
              Promise.reject();
          }

          }).catch((err)=>alert(err));
        }

           });
           
           navigate("/m-panel/"+uname, { replace: true });


    
    
  }
  



  return (
    <section id="home">
     
      <div style={{backgroundImage:`url(${backImage})`,backgroundRepeat:"no-repeat"}}>
      

      <div className="row">
    
                  <div className="col-5 pt-1 " >
                 
                   
                    <div className="py-5" style={{height:"100%"}}>
                      <div class="shadow-lg" style={{width:"80%",borderRadius:"40px",marginLeft:"100px",backgroundColor:"rgba(68, 75, 70, 0.56)"}}>
                      <form onSubmit={newClick} class=" p-5 needs-validation"  noValidate>

<center>
<h1 style={{color:"white",paddingBottom:"20px"}}>Let's get started</h1>

</center>




<div class="form-group row p-2">
  <label for="email" class="col-sm-12 col-form-label">
    <h4 style={{color:"white"}}>Email</h4> </label>
  <div class="col-sm-12">
    <div class="input-group " style={{width:"100%"}}>
        <span class="input-group-text"><img src={mailLogo} alt="" /></span>
        <input type="email" class="form-control" placeholder="Email Address" id="email" required value={uname} onChange={handleChangeEmail}/>
        <div class="invalid-feedback">Please enter your email</div>

    </div>
  </div>
</div>

<div class="form-group row p-2 ">
  <label for="pass" class="col-sm-12 col-form-label">
    <h4 style={{color:"white"}}>Password</h4> </label>
  <div class="col-sm-12">
    <div class="input-group " style={{width:"100%"}}>
        <span class="input-group-text"><img src={passlLogo} alt="" /></span>
        <input type="password" class="form-control" placeholder="*********" id="pass"  required value={pas} onChange={handleChangePass}/>
        <div class="invalid-feedback">Please enter your password</div>

    </div>
  </div>
</div>
                      </form>
                      <center className="px-4 pb-5">


                            <button onClick={newClick}  className="btn btn-success btn-rounded waves-effect waves-light m-auto shadow-lg"  style={{width:"50%",borderRadius:"40px",fontSize:"20px"}} ><b>Login</b></button>
                            <p style={{color:"white",marginTop:"15px"}}> New user ? Click below to Sign Up </p>
                            <Link to="/sign-emp" className="text-light"><button type="submit" className="btn btn-info btn-rounded waves-effect waves-light m-auto shadow-lg"  style={{width:"50%",borderRadius:"40px",fontSize:"20px",color:"white"}}><b>Sign Up</b></button></Link>
                        </center>

                      </div>
                                  

                                
                    </div>
                    
                  </div>

                    <div className="col-5 pt-5  "  style={{paddingInlineStart:"100px"}} >
                      <center > <img   src={logoImage}  /></center>
          
                      
                   </div>
       </div>
        
    </div>



    </section>
    
    
    
  )
}
