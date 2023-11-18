import React from 'react'
import { useState } from 'react';
import backImage from '../../src/images/backtwo.jpg'
import logoImage from '../../src/images/logoimg.png'
import mailLogo from '../../src/images/mail.png'
import passlLogo from '../../src/images/pass.png'
import NavBar from './NavBar';
import About from './About';
import Contact from './Contact';
import { Link,Navigate } from "react-router-dom";
import Axios from "axios";

import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import BadgeIcon from '@mui/icons-material/Badge';
import WcSharpIcon from '@mui/icons-material/WcSharp';
import PasswordTwoToneIcon from '@mui/icons-material/PasswordTwoTone';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import CakeSharpIcon from '@mui/icons-material/CakeSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import { Button } from '@mui/material';


export default function SignUp() {


    const [fname,setFullname]=useState();
    const [em,setEmail]=useState();
    const [ph,setPhone]=useState();
    const [ro,setRole]=useState();
    const [pas,setPassword]=useState();
    const [dat, setBirthDate] = useState('');
    const [gen, setSelectedGender] = useState('');
    const [ad,setAddr] = useState();
   


    const handleChangeFullname = (e) =>{
      setFullname(e.target.value);
    }

    const handleChangeEmail = (e) =>{
      setEmail(e.target.value);
    }
    const handleChangePhone = (e) =>{
      setPhone(e.target.value);
    }
    const handleChangeRole = (e) =>{
      setRole(e.target.value);
    }
    const handleChangePassword = (e) =>{
      setPassword(e.target.value);
    }
    const handleChangeDate = (e) => {
      setBirthDate(e.target.value);
    };

    const handleSelectChange = (e) => {
      setSelectedGender(e.target.value);
    };

    const handleChangeAddr = (e) =>{
      setAddr(e.target.value);
    }

    

    const [validated, setValidated] = useState(false);

    const handleClick =()=>
    {  var exist=0;
      var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) 
          {
            if (!form.checkValidity()) 
            {
              event.preventDefault()
              event.stopPropagation()
            }
            else if(form.checkValidity())
            {
              const data={fullname:fname,email:em,phone:ph,role:ro,password:pas,dob:dat,gender:gen,addr:ad}
              Axios.get("https://minute-mentor.onrender.com/empRoute").then((res)=>{
                for (let index = 0; index < res.data.length; index++) 
                {
                    if(res.data[index].email===em)
                    {
                       
                        alert("User Already Exist, Try with different mail");
                        exist=1;
                        console.log("Not Unique")
                        
                    } 
                }
  
                if(exist===0)
                {
                  Axios.post("https://minute-mentor.onrender.com/empRoute/create-emp",data)
              .then((res)=>{
              if(res.status === 200)
              {
                alert("Account Created ! You can login now");
                
  
              }
              else{
                Promise.reject();
              }
  
              }).catch((err)=>alert(err));
  
                }
  
              })

            }

            form.classList.add('was-validated')


           


          }, false)
        })
      
   
    }
  

    const ll = ()=>
    { 

      var exist=0;
      if(fname===""||em===""||ph===""||ro===""||pas===""||dat===""||gen===""||ad==="")
      {
        var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) 
          {
            if (!form.checkValidity()) 
            {
              event.preventDefault()
              event.stopPropagation()
            }
            form.classList.add('was-validated')
          }, true)
        })
        alert("fill all fields");
        
      }
      else
      {
        const data={fullname:fname,email:em,phone:ph,role:ro,password:pas,dob:dat,gender:gen,addr:ad}

            Axios.get("https://minute-mentor.onrender.com/empRoute").then((res)=>{
              for (let index = 0; index < res.data.length; index++) 
              {
                  if(res.data[index].email===em)
                  {
                     
                      alert("User Already Exist, Try with different mail");
                      exist=1;
                      console.log("Not Unique")
                      
                  } 
              }

              if(exist===0)
              {
                Axios.post("https://minute-mentor.onrender.com/empRoute/create-emp",data)
            .then((res)=>{
            if(res.status === 200)
            {
              alert("Account Created ! You can login now");
              

            }
            else{
              Promise.reject();
            }

            }).catch((err)=>alert(err));

              }

            })

      }

      

      
            
    }

      
    



    

  return (
    <section
    id="home"
    style={{ backgroundImage: `url(${backImage})`, backgroundRepeat: 'no-repeat' }}
    className="h-screen flex items-center justify-center"
  >
    <div className=" container mt-6">
      <div className="row">
        <div className="col-lg-6 pt-11">
          <div className="pt-5" style={{ height: '100%',marginBottom:'0px' }}>
            <div class="px-4 shadow-lg" style={{ borderRadius: '40px', backgroundColor: 'rgba(68, 75, 70, 0.56)' }}>
            <form noValidate class="needs-validation " onSubmit={ll} onSelect={handleClick}>
              <h2 className="text-center text-white py-4">Create a new account</h2>

              <div className="form-group row p-2">
                <label htmlFor="fullname" className="col-sm-4 col-form-label">
                  <h4 style={{ color: 'white' }}>Full Name</h4>
                </label>
                <div className="col-sm-8">
                  <div className="input-group" style={{ width: '100%' }}>
                    <span className="input-group-text">
                      <PersonIcon/>
                      {/* <img src={} alt="human" /> */}
                    </span>
                    <input
                    
                    value={fname}
                      onChange={handleChangeFullname}
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      id="fullname"
                      required
                    />
                    <div className="invalid-feedback">Please enter your name</div>
                  </div>
                </div>
              </div>

            


              <div className="form-group row p-2">
                <label htmlFor="email" className="col-sm-4 col-form-label">
                  <h4 style={{ color: 'white' }}>Email</h4>
                </label>
                <div className="col-sm-8">
                  <div className="input-group" style={{ width: '100%' }}>
                    <span className="input-group-text">
                      <EmailSharpIcon/>
                      {/* <img src={mailLogo} alt="mail" /> */}
                    </span>
                    <input
                    value={em}
                    onChange={handleChangeEmail}
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      id="email"
                      required
                    />
                    <div className="invalid-feedback">Please enter your email</div>
                  </div>
                </div>
              </div>

              <div className="form-group row p-2">
                <label htmlFor="phone" className="col-sm-4 col-form-label">
                  <h4 style={{ color: 'white' }}>Phone</h4>
                </label>
                <div className="col-sm-8">
                  <div className="input-group" style={{ width: '100%' }}>
                    <span className="input-group-text">
                      <CallIcon/>
                      {/* <img src={mailLogo} alt="" /> */}
                    </span>
                    <input
                    value={ph}
                    onChange={handleChangePhone}
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                      id="phone"
                      required
                    />
                    <div className="invalid-feedback">Please enter your phone number</div>
                  </div>
                </div>
              </div>

              <div className="form-group row p-2">
                <label htmlFor="role" className="col-sm-4 col-form-label">
                  <h4 style={{ color: 'white' }}>Designation</h4>
                </label>
                <div className="col-sm-8">
                  <div className="input-group" style={{ width: '100%' }}>
                    <span className="input-group-text">
                      <BadgeIcon/>
                      {/* <img src={passlLogo} alt="" /> */}
                    </span>
                    <select id="inputState" className="form-control form-select" value={ro} onChange={handleChangeRole} required>
                      <option value="">Select Designation</option>
                      <option value="Accountant">Accountant</option>
                      <option value="Business Manager">Business Manager</option>
                      <option value="Software Developer">Software Developer</option>
                      <option value="Finance Manager">Finance Manager</option>
                      <option value="Data Scientist">Data Scientist</option>
                    
                    </select>
                  </div>
                  <div className="invalid-feedback">Please enter your role</div>
                </div>
              </div>

              <div className="form-group row p-2">
                <label htmlFor="sex" className="col-sm-4 col-form-label">
                  <h4 style={{ color: 'white' }}>Gender</h4>
                </label>
                <div className="col-sm-8">
                  <div className="input-group" style={{ width: '100%' }}>
                    <span className="input-group-text">
                      <WcSharpIcon/>
                      {/* <img src={mailLogo} alt="" /> */}
                    </span>
                    <select

                      className="form-select"
                      value={gen}
                      onChange={handleSelectChange}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    <div className="invalid-feedback">Please select your gender</div>
                  </div>
                </div>
              </div>

              <div className="form-group row p-2">
                <label htmlFor="pass" className="col-sm-4 col-form-label">
                  <h4 style={{ color: 'white' }}>Password</h4>
                </label>
                <div className="col-sm-8">
                  <div className="input-group" style={{ width: '100%' }}>
                    <span className="input-group-text">
                      <PasswordTwoToneIcon/>
                      {/* <img src={passlLogo} alt="" /> */}
                    </span>
                    <input
                    onSele
                    value={pas}
                    onChange={handleChangePassword}
                      type="password"
                      className="form-control"
                      placeholder="*********"
                      id="pass"
                      required
                    />
                    <div className="invalid-feedback">Please enter your password</div>
                  </div>
                </div>
              </div>

              <div className="form-group row p-2">
                <label htmlFor="dob" className="col-sm-4 col-form-label">
                  <h4 style={{ color: 'white' }}>Date-of-Birth</h4>
                </label>
                <div className="col-sm-8">
                  <div className="input-group" style={{ width: '100%' }}>
                    <span className="input-group-text">
                      <CakeSharpIcon/>
                      {/* <img src={passlLogo} alt="" /> */}
                    </span>
                    <input
                    
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={dat}
                      type="date"
                      onChange={handleChangeDate}
                      required
                    />
                    <div className="invalid-feedback">Please enter your date of birth</div>
                  </div>
                </div>
              </div>

              <div className="form-group row p-2">
                <label htmlFor="address" className="col-sm-4 col-form-label">
                  <h4 style={{ color: 'white' }}>Address</h4>
                </label>
                <div className="col-sm-8">
                  <div className="input-group" style={{ width: '100%' }}>
                    <span className="input-group-text">
                      <HomeSharpIcon/>
                      {/* <img src={mailLogo} alt="" /> */}
                    </span>
                    <textarea
                    value={ad}
                    onChange={handleChangeAddr}
                      className="form-control"
                      placeholder="Enter your address"
                      id="address"
                      required 

                    ></textarea>
                    <div className="invalid-feedback">Please enter your address</div>
                  </div>
                </div>
              </div>
              

              
            </form>
            <center className="p-4">
                <button
                onClick={ll}
                  
                  type="submit"
                  className="btn btn-success btn-rounded waves-effect waves-light m-auto shadow-lg"
                  style={{ width: '50%', borderRadius: '40px', fontSize: '20px' }}
                >
                  <b>Create Account</b>
                </button>
                <p style={{ color: 'white', marginTop: '15px' }}>
                  Existing user? Click below to go to the login page
                </p>
                <Link to="/m-home" className="text-light"> <button type="submit" className="btn btn-info btn-rounded waves-effect waves-light m-auto shadow-lg"  style={{width:"50%",borderRadius:"40px",fontSize:"20px",color:"white"}}><b>Login</b></button></Link>
              </center>
            

         
           

            </div>

            

          </div>
        </div>

        <div className="col-lg-6 pt-5 mt-4">
          <center>
            <img src={logoImage} alt="logo" className="w-75 " style={{marginRight:"200px"}} />
          </center>
        </div>
      </div>
    </div>
  </section>
    
    
    
    
  )
}
