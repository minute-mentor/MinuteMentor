import React from 'react'
import bgImg from '../../src/images/navtop.jpg'


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
            <a className="smoothscroll px-2 pt-2" href="#home" style={{color:'white',fontSize:"20px",textDecoration:"none"}}>Home</a>
            <a className="smoothscroll px-2 pt-2" href="#about" style={{color:'white',fontSize:"20px",textDecoration:"none"}}>About</a>
            <a className="smoothscroll px-2 pt-2" href="#about" style={{color:'white',fontSize:"20px",textDecoration:"none"}}>Contact</a>

        </div>
        
    </nav>
</div>

</div>
      
    </div>

        </div>

    </div>
   
  )
}
