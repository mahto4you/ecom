import React from 'react';
// import icon06 from '../../assets/images/icon06.jpg';
import icon36 from '../../assets/images/icon36.jpg';
import icon08 from '../../assets/images/icon08.jpg';
import icon33 from '../../assets/images/icon33.jpg';
import icon34 from '../../assets/images/icon34.jpg';
import icon35 from '../../assets/images/icon35.jpg';
import cruve from '../../assets/images/cruve.png';
import icon07 from '../../assets/images/icon07.png';
const Slider = () => {
	return (
		<>
			{/* <!--slider--> */}
			<div className='slider_one_area'>
				<div className='container'>
					<div className='row res_padd'>
						<div id='offer' className='owl-carousel testimonial-carousel-main'>
							<div className='item'>
								<div className='boxx_sg'>
									{/* <img src={icon06} alt='' /> */}
									<div className='containtt_one'>
										<h1>Simply dummy Offer text here</h1>
										<h2>100% Organic Vegetable</h2>
										<span>
											<img src={cruve} alt='' />
											<a href='#'>
												CALL FOR Enquiry <img src={icon07} alt='' />
											</a>
										</span>
									</div>
								</div>
							</div>

							<div className='item'>
								<div className='boxx_sg'>
									<img src={icon08} alt='' />
									<div className='containtt_two'>
										<span>
											<h1>Simply dummy Offer text here</h1>
											<h2>100% Organic Vegetable</h2>
											<a href='#'>Call For Enquiry</a>
										</span>
									</div>
								</div>
							</div>

							<div className='item'>
								<div className='boxx_sg'>
									<img src={icon33} alt='' />
									<div className='containtt_one'>
										<h1>Simply dummy Offer text here</h1>
										<h2>100% Organic Vegetable</h2>
										<span>
											<img src='images/cruve.png' alt='' />
											<a href='#'>
												CALL FOR Enquiry <img src='images/icon07.png' alt='' />
											</a>
										</span>
									</div>
								</div>
							</div>

							<div className='item'>
								<div className='boxx_sg'>
									<img src={icon34} alt='' />
									<div className='containtt_two'>
										<span>
											<h1>Simply dummy Offer text here</h1>
											<h2>100% Organic Vegetable</h2>
											<a href='#'>Call For Enquiry</a>
										</span>
									</div>
								</div>
							</div>

							<div className='item'>
								<div className='boxx_sg'>
									<img src={icon35} alt='' />
									<div className='containtt_one'>
										<h1>Simply dummy Offer text here</h1>
										<h2>100% Organic Vegetable</h2>
										<span>
											<img src='images/cruve.png' alt='' />
											<a href='#'>
												CALL FOR Enquiry <img src='images/icon07.png' alt='' />
											</a>
										</span>
									</div>
								</div>
							</div>

							<div className='item'>
								<div className='boxx_sg'>
									<img src={icon36} alt='' />
									<div className='containtt_two'>
										<span>
											<h1>Simply dummy Offer text here</h1>
											<h2>100% Organic Vegetable</h2>
											<a href='#'>Call For Enquiry</a>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!--slider END--> */}
		</>
	);
};

export default Slider;
