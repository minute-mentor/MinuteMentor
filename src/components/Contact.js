import React from 'react'

import mailLogo from '../../src/images/mail.png'
import phoneLogo from '../../src/images/phone.png'
import addressLogo from '../../src/images/address.png'
import contactLogo from '../../src/images/contactImg.jpg'
import { useParams } from 'react-router-dom'

export default function Contact() 
{

  return (
    <section id="contact" class="ftco-section" style={{backgroundImage:`url(${contactLogo})`,backgroundRepeat:"no-repeat"}}>
		
		<div class="container" >
		
			<div class="row justify-content-center mt-0 pt-5">
				<div class="col-lg-10 col-md-12">
					<div class="wrapper">
						<div class="row justify-content-center">
							<div class="col-lg-8 mb-2">
								<div class="row">
									<div class="col-md-4">
										<div class="dbox w-100 text-center">
					        		<div class="d-flex align-items-center justify-content-center">
                                    <span class="input-group-text"><img src={addressLogo} alt="" style={{width:"40px"}} /></span>
					        		</div>
					        		<div class="text">
						            <p><span>Address:</span> <br/>India</p>
						          </div>
					          </div>
									</div>
									<div class="col-md-4">
										<div class="dbox w-100 text-center">
					        		<div class="d-flex align-items-center justify-content-center">
                                    <span class="input-group-text"><img src={phoneLogo} alt="" style={{width:"40px"}} /></span>
					        		</div>
					        		<div class="text">
						            <p><span>Phone:</span> <a href="tel://1234567920"><br/>+ 1235 2355 98</a></p>
						          </div>
					          </div>
									</div>
									<div class="col-md-4">
										<div class="dbox w-100 text-center">
					        		<div class=" d-flex align-items-center justify-content-center">
                                    <span class="input-group-text"><img src={mailLogo} alt="" style={{width:"40px"}} /></span>
					        		</div>
					        		<div class="text">
						            <p><span>Email:</span> <a href="minutementor48@gmail.com">minutementor48@gmail.com</a></p>
						          </div>
					          </div>
									</div>
								</div>
							</div>
							<div class="col-lg-8">
								<div class="contact-wrap">
									<h3 class="mb-4 text-center" style={{fontFamily:"cursive",fontSize:"48px"}}>Get in touch with us</h3>
									<div id="form-message-warning" class="mb-4 w-100 text-center"></div> 
				      		<div id="form-message-success" class="mb-4 w-100 text-center" style={{opacity:"0"}}>
				            Your message was sent, thank you!
				      		</div>
									<form id="contactForm" name="contactForm" class="contactForm">
										<div class="row">
											<div class="col-md-12 p-2">
												<div class="form-group">
													<input type="text" class="form-control" name="name" id="name" placeholder="Name"/>
												</div>
											</div>
											<div class="col-md-12 p-2"> 
												<div class="form-group">
													<input type="email" class="form-control" name="email" id="email" placeholder="Email"/>
												</div>
											</div>
											<div class="col-md-12 p-2">
												<div class="form-group">
													<input type="text" class="form-control" name="subject" id="subject" placeholder="Subject"/>
												</div>
											</div>
											<div class="col-md-12 p-2">
												<div class="form-group">
													<textarea name="message" class="form-control" id="message" cols="30" rows="8" placeholder="Message"></textarea>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group mx-auto p-5">
													<center>
													<button type="submit" className="btn btn-info btn-rounded waves-effect waves-light m-auto shadow-lg"  style={{width:"50%",borderRadius:"40px",fontSize:"20px",color:"white"}}><b>Submit</b></button>

													</center>
													
                                                
													
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}
