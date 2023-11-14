import React from 'react'
import bgImg from '../../src/images/navtop.jpg'
import { Link } from "react-router-dom";

export default function NavBar() {
  return (

    <div className="row">
        <div className="col-12">
        <div style={{background: "linear-gradient(to bottom, #003300 0%, #000000 100%)"}}>
        <div class="top-bar fixed-top" style={{position:"sticky",top:"0px"}} >

<div class="container-fluid">
    <div class="row align-items-center">

        <div class="col-12 col-lg-12 align-items-left">
            <div class="display-4 fw-bold py-2 text-lg-start d-none d-lg-block ms-5" style={{width:"100%",color:"white",fontFamily:"cursive"}}>
                Minute Mentor
            </div>
        </div>

        
       
        
        
    </div>

    <nav class="navbar  ms-5 me-5 rounded-top" style={{padding:"7.9999px",background:"rgba(0, 0, 0, 0.69)"}}>
        <div class="nav" style={{fontSize:"20px"}}>

            <Link to="/m-home" className="text-light" style={{textDecoration:"none"}}><a className="smoothscroll px-2 pt-2" href="#home" style={{color:'white',fontSize:"20px",textDecoration:"none"}}>Home</a></Link>


            
            <Link to="/m-about" className="text-light" style={{textDecoration:"none"}}> <a className="smoothscroll px-2 pt-2" href="#about" style={{color:'white',fontSize:"20px",textDecoration:"none"}}>About</a></Link>
           
            <Link to="/m-contact" className="text-light" style={{textDecoration:"none"}}><a className="smoothscroll px-2 pt-2" href="#contact" style={{color:'white',fontSize:"20px",textDecoration:"none"}}>Contact</a></Link>
            <Link to="/admin-login" className="text-light" style={{textDecoration:"none"}}><a className="smoothscroll px-2 pt-2" href="#contact" style={{color:'white',fontSize:"20px",textDecoration:"none"}}>Administrator</a></Link>
            


        </div>
        
    </nav>
</div>

</div>
      
    </div>

        </div>

    </div>
   
  )
}
