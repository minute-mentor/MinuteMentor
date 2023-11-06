import React from 'react'
import backImage from '../../src/images/backtwo.jpg'
import logoImage from '../../src/images/logoimg.png'
import mailLogo from '../../src/images/mail.png'
import passlLogo from '../../src/images/pass.png'


export default function Login() {
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
                                              
                                                      <button type="submit" className="btn btn-success btn-rounded waves-effect waves-light m-auto shadow-lg"  style={{width:"50%",borderRadius:"40px",fontSize:"20px"}} ><b>Login</b></button>
                                                      <p style={{color:"white",marginTop:"15px"}}> New user ? Click below to Sign Up </p>
                                                      <button type="submit" className="btn btn-info btn-rounded waves-effect waves-light m-auto shadow-lg"  style={{width:"50%",borderRadius:"40px",fontSize:"20px",color:"white"}}><b>Sign Up</b></button>
                                                      
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
