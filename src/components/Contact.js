import React from 'react'

import mailLogo from '../../src/images/mail.png'
import phoneLogo from '../../src/images/phone.png'
import addressLogo from '../../src/images/address.png'

export default function Contact() {
  return (
    <section class="ftco-section">
		<div class="container">
		
			<div class="row justify-content-center mt-0">
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
						            <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
						          </div>
					          </div>
									</div>
									<div class="col-md-4">
										<div class="dbox w-100 text-center">
					        		<div class="d-flex align-items-center justify-content-center">
                                    <span class="input-group-text"><img src={phoneLogo} alt="" style={{width:"40px"}} /></span>
					        		</div>
					        		<div class="text">
						            <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
						          </div>
					          </div>
									</div>
									<div class="col-md-4">
										<div class="dbox w-100 text-center">
					        		<div class=" d-flex align-items-center justify-content-center">
                                    <span class="input-group-text"><img src={mailLogo} alt="" style={{width:"40px"}} /></span>
					        		</div>
					        		<div class="text">
						            <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
						          </div>
					          </div>
									</div>
								</div>
							</div>
							<div class="col-lg-8">
								<div class="contact-wrap">
									<h3 class="mb-4 text-center">Get in touch with us</h3>
									<div id="form-message-warning" class="mb-4 w-100 text-center"></div> 
				      		<div id="form-message-success" class="mb-4 w-100 text-center">
				            Your message was sent, thank you!
				      		</div>
									<form id="contactForm" name="contactForm" class="contactForm">
										<div class="row">
											<div class="col-md-12">
												<div class="form-group">
													<input type="text" class="form-control" name="name" id="name" placeholder="Name"/>
												</div>
											</div>
											<div class="col-md-12"> 
												<div class="form-group">
													<input type="email" class="form-control" name="email" id="email" placeholder="Email"/>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<input type="text" class="form-control" name="subject" id="subject" placeholder="Subject"/>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<textarea name="message" class="form-control" id="message" cols="30" rows="8" placeholder="Message"></textarea>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
                                                <button type="submit" className="btn btn-info btn-rounded waves-effect waves-light m-auto shadow-lg"  style={{width:"50%",borderRadius:"40px",fontSize:"20px",color:"white"}}><b>Submit</b></button>
													
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
