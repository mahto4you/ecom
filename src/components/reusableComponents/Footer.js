import React from 'react';
import logo1 from '../../assets/images/logo1.png';
import icon23 from '../../assets/images/icon23.png';
import icon25 from '../../assets/images/icon25.png';
import icon33 from '../../assets/images/icon33.png';
import icon34 from '../../assets/images/icon34.png';
import icon35 from '../../assets/images/icon35.png';
import icon32 from '../../assets/images/icon32.png';
const Footer = () => {
	return (
		<>
			<footer class='fotter_area'>
				<div class='container'>
					<div class='row res_padd'>
						<div class='footer_lft'>
							<a href='#'>
								<img src={logo1} alt='' />
							</a>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
								egestas sem tellus, ac consectetur mi gravida nunc sit amet ante
								vitae ante facilisis
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
								egestas sem tellus, ac consectetur mi{' '}
							</p>
							<a href='#' class='moree'>
								Read more <img src={icon32.png} alt='' />
							</a>
						</div>

						<div class='footer_rght'>
							<div class='foot_01'>
								<h4>Quick Links</h4>
								<ul>
									<li>
										<a href='#'>Home</a>
									</li>
									<li>
										<a href='#'>About Bazer Maynaguri</a>
									</li>
									<li>
										<a href='#'>Contact Us</a>
									</li>
									<li>
										<a href='#'>FAQ</a>
									</li>
								</ul>
							</div>

							<div class='foot_02'>
								<ul>
									<li>
										<a href='#'>Enquiry Us</a>
									</li>
									<li>
										<a href='#'>B2B Information</a>
									</li>
								</ul>
							</div>

							<div class='foot_03 xxmt01'>
								<h4>Contact Us</h4>
								<ul>
									<li>
										<span>
											<img src={icon33} alt='' />
										</span>
										<p>
											Sarkar shoss exclusive <br></br>
											Natun Bazar turminal complex, <br></br>
											PO : Maynaguri, <br></br>
											Dist : Jalpaiguri, Pin : 753224.
										</p>
									</li>
									<li class='no1'>
										<a href='#'>
											<span>
												<img src={icon34} alt='' />
											</span>{' '}
											<p>+91 7797813261</p>
										</a>
									</li>
									<li class='no2'>
										<a href='#'>
											<span>
												<img src={icon35} alt='' />
											</span>{' '}
											<p>dhrubadjs.mng@gmail.com</p>
										</a>
									</li>
								</ul>
							</div>

							<div class='popular_catt'>
								<h5>Popular Categories</h5>
								<ul>
									<li>
										<a href='#'>Vegetable</a>
									</li>
									<li>
										<a href='#'>Fruits</a>
									</li>
									<li>
										<a href='#'>Dairy products</a>
									</li>
									<li>
										<a href='#'>Organic Products</a>
									</li>
									<li>
										<a href='#'>Grocery Items</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div class='copy_fot'>
					<div class='container'>
						<div class='row res_padd'>
							<p>
								{' '}
								&copy; Copyright 2020 bazermaynaguri.com | All Rights Reserved.
							</p>
							<ul>
								<li>Follow us on :</li>
								<li>
									<a href='#'>
										<img src={icon23} alt='' />
									</a>
								</li>
								<li>
									<a href='#'>
										<img src={icon25} alt='' />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
