import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom";

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
    <div >
        <form onSubmit={handleSubmit} class=" p-4 shadow-lg needs-validation mt-5" style={{maxWidth:"50%",margin:"0px auto"}} noValidate>
        
        <div class="mb-3">
             <label for="exampleInputPassword1" class="form-label">Administrator Passcode :</label>
             <input onChange={handleChangeCode} type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
        
        </form>
      
    </div>
  )
}
