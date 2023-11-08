import React from 'react'
import { useState } from 'react';
import backImage from '../../src/images/backtwo.jpg'
import logoImage from '../../src/images/logoimg.png'
import mailLogo from '../../src/images/mail.png'
import passlLogo from '../../src/images/pass.png'
import NavBar from './NavBar';
import About from './About';
import Contact from './Contact';
import { Link } from "react-router-dom";


export default function SignUp() {

    const [birthDate, setBirthDate] = useState('');

    const handleChangeDate = (e) => {
      setBirthDate(e.target.value);
    };
  return (
    <section id="home" style={{backgroundImage:`url(${backImage})`,backgroundRepeat:"no-repeat",}}>
       
      <div>
      

      <div className="row">
    
        
          
        
                  
                  <div className="col-5 pt-0 " >
                   
                    <div className="pt-5" style={{height:"100%"}}>
                                  <form class=" pt-4 px-4  shadow-lg needs-validation" style={{width:"100%",borderRadius:"40px",backgroundColor:"rgba(68, 75, 70, 0.56)",marginLeft:"100px",height:"99%"}} novalidate="">

                                                    <center>
                                                    <h2 style={{color:"white",paddingBottom:"20px"}}>Create a new account</h2>

                                                    </center>


                            

                                                    <div class="form-group row p-1">
                                                      <label for="fullname" class="col-sm-4 col-form-label">
                                                        <h4 style={{color:"white"}}>Full Name</h4> </label>
                                                        <div className="col-sm-8">
                                                        <div class="input-group " style={{width:"100%"}}>
                                                            <span class="input-group-text"><img src={mailLogo} alt="" /></span>
                                                            <input type="text" class="form-control" placeholder="Full Name" id="fullname" required=""/>
                                                            <div class="invalid-feedback">Please your name</div>

                                                        </div>

                                                        </div>
                                                        
                                        
                                                    </div>

                                                    

                                          


                                                  <div class="form-group row p-2">
                                                      <label for="email" class="col-sm-4 col-form-label">
                                                        <h4 style={{color:"white"}}>Email</h4> </label>
                                                      <div class="col-sm-8">
                                                        <div class="input-group " style={{width:"100%"}}>
                                                            <span class="input-group-text"><img src={mailLogo} alt="" /></span>
                                                            <input type="email" class="form-control" placeholder="Email Address" id="email" required=""/>
                                                            <div class="invalid-feedback">Please your email</div>

                                                        </div>
                                                      </div>
                                                  </div>

                                                  <div class="form-group row p-2">
                                                      <label for="phone" class="col-sm-4 col-form-label">
                                                        <h4 style={{color:"white"}}>Phone</h4> </label>
                                                      <div class="col-sm-8">
                                                        <div class="input-group " style={{width:"100%"}}>
                                                            <span class="input-group-text"><img src={mailLogo} alt="" /></span>
                                                            <input type="tel" class="form-control" placeholder="Phone Number" id="phone" required=""/>
                                                            <div class="invalid-feedback">Please your phone number</div>

                                                        </div>
                                                      </div>
                                                  </div>

                                                  

                                                  <div class="form-group row p-2 ">
                                                      <label for="role" class="col-sm-4 col-form-label">
                                                        <h4 style={{color:"white"}}>Role</h4> </label>
                                                      <div class="col-sm-8">
                                                        
                                                            <div class="input-group " style={{width:"100%"}}>
                                                                        <span class="input-group-text"><img src={passlLogo} alt="" /></span>
                                                                        <select id="inputState" class="form-control form-select">
                                                                        <option selected="">Please select your Role</option>
                                                                        <option>Employee</option>
                                                                        <option>HR</option>
                                                                        

                                                                        </select>
                                                                </div>
                                                            <div class="invalid-feedback">Please enter your password</div>

                                                        
                                                      </div>
                                                  </div>

                                                  <div class="form-group row p-2 ">
                                                      <label for="pass" class="col-sm-4 col-form-label">
                                                        <h4 style={{color:"white"}}>Password</h4> </label>
                                                      <div class="col-sm-8">
                                                        <div class="input-group " style={{width:"100%"}}>
                                                            <span class="input-group-text"><img src={passlLogo} alt="" /></span>
                                                            <input type="password" class="form-control" placeholder="*********" id="pass"  required=""/>
                                                            <div class="invalid-feedback">Please enter your password</div>

                                                        </div>
                                                      </div>
                                                  </div>

                                                  <div class="form-group row p-2 ">
                                                      <label for="dob" class="col-sm-4 col-form-label">
                                                        <h4 style={{color:"white"}}>Date-of-Birth</h4> </label>
                                                      <div class="col-sm-8">
                                                        <div class="input-group " style={{width:"100%"}}>
                                                            <span class="input-group-text"><img src={passlLogo} alt="" /></span>
                                                            <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={birthDate} type='date' onChange={handleChangeDate}/>
                                                            <div class="invalid-feedback">Please enter your date of birth</div>

                                                        </div>
                                                      </div>
                                                  </div>

                                                  <div class="form-group row p-2">
                                                      <label for="sex" class="col-sm-4 col-form-label">
                                                        <h4 style={{color:"white"}}>Gender</h4> </label>
                                                      <div class="col-sm-8">
                                                        <div class="input-group " style={{width:"100%"}}>
                                                            <span class="input-group-text"><img src={mailLogo} alt="" /></span>
                                                            <input type="text" class="form-control" placeholder="Gender" id="sex" required=""/>
                                                            <div class="invalid-feedback">Please your gender</div>

                                                        </div>
                                                      </div>
                                                  </div>

                                                  <div class="form-group row p-2">
                                                      <label for="address" class="col-sm-4 col-form-label">
                                                        <h4 style={{color:"white"}}>Address</h4> </label>
                                                      <div class="col-sm-8">
                                                        <div class="input-group " style={{width:"100%"}}>
                                                            <span class="input-group-text"><img src={mailLogo} alt="" /></span>
                                                            <textarea class="form-control" placeholder="Enter your address" id="address" required="">

                                                            </textarea>
                                                           
                                                            <div class="invalid-feedback">Please your address</div>

                                                        </div>
                                                      </div>
                                                  </div>
                                                
                                                  
                                                  <center className="p-4">
                                              
                                                      <button type="submit" className="btn btn-success btn-rounded waves-effect waves-light m-auto shadow-lg"  style={{width:"50%",borderRadius:"40px",fontSize:"20px"}} ><b>Create Account</b></button>
                                                      <p style={{color:"white",marginTop:"15px"}}> Existing user ? Click below to goto login page </p>

                                                      <Link to="/m-home" className="text-light"> <button type="submit" className="btn btn-info btn-rounded waves-effect waves-light m-auto shadow-lg"  style={{width:"50%",borderRadius:"40px",fontSize:"20px",color:"white"}}><b>Login</b></button></Link>
                                                     
                                                      
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
