import React from 'react';
import icon05 from '../../assets/images/icon05.jpg';
import icon10 from '../../assets/images/icon10.png';
import icon11 from '../../assets/images/icon11.png';
import icon12 from '../../assets/images/icon12.png';
const AboutSection = () => {
	return (
		<>
			{/* <!--ABOUT--> */}
			<div className='about_us_area'>
				<div className='container'>
					<div className='row res_padd'>
						<h1>Welcom To BazarMoynaguri</h1>
						<h2>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse vitae pharetra erat. Fusce quis suscipit leo. Nulla
							scelerisque erat in nam at efficitur tortor, vitae porttitor mi.
							Morbi sit amet velit nec leo imperdiet porttitor mi. Morbi sit
							amet velit nec leo imperdiet.
						</h2>
						<img src={icon05} alt='' />

						<div className='linee'></div>

						<div className='aboput_boxx line_left'>
							<img src={icon12} alt='' />
							<h3>Best Quality Product</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
								tempor incididunt ut labore et dolore magna.
							</p>
						</div>

						<div className='aboput_boxx'>
							<img src={icon11} alt='' />
							<h3>Free Shipping</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
								tempor incididunt ut labore et dolore magna.
							</p>
						</div>

						<div className='aboput_boxx border_none line_right'>
							<img src={icon10} alt='' />
							<h3>On Time Delivery</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
								tempor incididunt ut labore et dolore magna.
							</p>
						</div>

						<a href='#'>Quality product at your door step</a>
					</div>
				</div>
			</div>
			{/* <!--ABOUT-->  */}
		</>
	);
};

export default AboutSection;
