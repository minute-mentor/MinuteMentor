import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom";
import backImage from '../../src/images/adminbg.jpeg'

export default function AdminLogin() 
{
    const navigate = useNavigate();
    const [code,setCode] = useState();

    const handleChangeCode = (e) =>{
        setCode(e.target.value);
      }

      const handleSubmit =()=>
      {
        if(code==="minute@48")
        {
          navigate("/admin-home", { replace: true });

        }
        
      }

  return ( 
    <div class="ftco-section " style={{backgroundImage:`url(${backImage})`,backgroundRepeat:"no-repeat",paddingTop:"150px",paddingBottom:"350px"}}>
      <center>
       <div style={{height:"100%",width:"50%",borderRadius:"40px",marginLeft:"0px",backgroundColor:"rgba(68, 75, 70, 0.56)"}}>
        <form onSubmit={handleSubmit} class=" py-2  needs-validation " style={{maxWidth:"50%",margin:"0px auto"}} noValidate>
        
        <div class="mb-3">
             <label for="exampleInputPassword1" class="form-label" style={{color:"white",fontSize:"28px"}}>Administrator Passcode :</label>
             <input onChange={handleChangeCode} type="password" class="form-control" id="exampleInputPassword1"/>
        </div>

        <center>
        <button type="submit" class="btn btn-outline-info">Submit</button>

        </center>
        
        
        
        </form>
      
    </div>

    </center>
   

    </div>
    
  )
}
