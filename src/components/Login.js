import React, { useState } from 'react'
import backImage from '../../src/images/backtwo.jpg'
import logoImage from '../../src/images/logoimg.png'
import mailLogo from '../../src/images/mail.png'
import passlLogo from '../../src/images/pass.png'
import { Link } from "react-router-dom";
import Axios from "axios";

import CalenderComp from './CalenderComp'


export default function Login() 
{

  let uname="emp1";
  var relogin=0;

  const handleClick = ()=>
  {
    const data={DATE:"November 10th 2023",status: "present",username:uname,duration:"0"}

    Axios.get("http://localhost:4000/attendanceRoute")
    .then((res)=>
    {

      for (let index = 0; index < res.data.length; index++) 
        {
            if(res.data[index].username===uname&&res.data[index].DATE==="November 10th 2023")
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

   

  }
  



  return (
    <section id="home">
     
      <div style={{backgroundImage:`url(${backImage})`,backgroundRepeat:"no-repeat"}}>
      

      <div className="row">
    
                  <div className="col-5 pt-1 " >
                   
                    <div className="py-5" style={{height:"100%"}}>
                                  <form class=" p-5  shadow-lg needs-validation" style={{width:"80%",borderRadius:"40px",backgroundColor:"rgba(68, 75, 70, 0.56)",marginLeft:"100px"}} novalidate="">

                                                    <center>
                                                    <h1 style={{color:"white",paddingBottom:"20px"}}>Let's get started</h1>

                                                    </center>

                                          


                                                  <div class="form-group row p-2">
                                                      <label for="email" class="col-sm-12 col-form-label">
                                                        <h4 style={{color:"white"}}>Email</h4> </label>
                                                      <div class="col-sm-12">
                                                        <div class="input-group " style={{width:"100%"}}>
                                                            <span class="input-group-text"><img src={mailLogo} alt="" /></span>
                                                            <input type="email" class="form-control" placeholder="Email Address" id="email" required=""/>
                                                            <div class="invalid-feedback">Please your email</div>

                                                        </div>
                                                      </div>
                                                  </div>

                                                  <div class="form-group row p-2 ">
                                                      <label for="pass" class="col-sm-12 col-form-label">
                                                        <h4 style={{color:"white"}}>Password</h4> </label>
                                                      <div class="col-sm-12">
                                                        <div class="input-group " style={{width:"100%"}}>
                                                            <span class="input-group-text"><img src={passlLogo} alt="" /></span>
                                                            <input type="password" class="form-control" placeholder="*********" id="pass"  required=""/>
                                                            <div class="invalid-feedback">Please enter your password</div>

                                                        </div>
                                                      </div>
                                                  </div>
                                                
                                                  
                                                  <center className="p-4">

                                                  
                                                  <Link to={"/m-panel/"+uname} className="text-light"><button onClick={handleClick} type="submit" className="btn btn-success btn-rounded waves-effect waves-light m-auto shadow-lg"  style={{width:"50%",borderRadius:"40px",fontSize:"20px"}} ><b>Login</b></button></Link>
                                              
                                                      
                                                      <p style={{color:"white",marginTop:"15px"}}> New user ? Click below to Sign Up </p>
                                                      <Link to="/sign-emp" className="text-light"><button type="submit" className="btn btn-info btn-rounded waves-effect waves-light m-auto shadow-lg"  style={{width:"50%",borderRadius:"40px",fontSize:"20px",color:"white"}}><b>Sign Up</b></button></Link>
                                                      
                                                      
                                                  </center>

                                  </form>
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
