import React from 'react';
import Footer from '../components/reusableComponents/Footer';
import Header from '../components/reusableComponents/Header';
import icon36 from '../assets/images/icon36.png';
import search01 from '../assets/images/search01.jpg';
import search02 from '../assets/images/search02.jpg';
import search03 from '../assets/images/search03.JPG';
import search04 from '../assets/images/search04.jpg';
import search05 from '../assets/images/search05.jpg';
import search06 from '../assets/images/search06.jpg';
import search07 from '../assets/images/search07.jpg';
import search08 from '../assets/images/search08.jpg';
import search09 from '../assets/images/search09.jpg';
import search10 from '../assets/images/search10.jpg';
import search11 from '../assets/images/search11.jpg';
import search12 from '../assets/images/search12.jpg';
const Product = () => {
	return (
		<>
			<div className='wrapper'>
				<Header />
				<div className='search_main_section'>
					<div className='container'>
						<div className='row res_padd'>
							<div className='bread_crumb'>
								<a href='#'>Home</a>
								<span>
									<i className='fa fa-angle-right' aria-hidden='true'></i>
								</span>
								<a href='#'>Vegetables</a>
							</div>

							<div className='mobile_filter'>
								{' '}
								<i className='fa fa-filter' aria-hidden='true'></i>
								<p>Show Filter</p>
							</div>

							<div className='laft_search_panel'>
								<h3>Filter Options</h3>

								<div className='form_group' style={{ position: 'relative' }}>
									<input
										type='text'
										placeholder='Keyword'
										className='search-input'
									/>
									<img src={icon36} className='search_icon' />
								</div>

								<div className='form_group'>
									<label className='search_label'>Category</label>
									<select className='slectt'>
										<option>Vegetable</option>
										<option>Fruits</option>
										<option>Dairy products</option>
										<option>Organic Products</option>
										<option>Grocery Items</option>
									</select>
								</div>

								<div className='form_group'>
									<label className='search_label'>Sub Category</label>
									<ul className='c_ul'>
										<li>
											<label className='contect_container_checkBox'>
												Sub Category one
												<input type='checkbox' checked='checked' name='text' />
												<span className='contect_checkmark'></span>
											</label>
										</li>
										<li>
											<label className='contect_container_checkBox'>
												Sub Category two
												<input type='checkbox' checked='checked' name='text' />
												<span className='contect_checkmark'></span>
											</label>
										</li>
										<li>
											<label className='contect_container_checkBox'>
												Sub Category
												<input type='checkbox' checked='checked' name='text' />
												<span className='contect_checkmark'></span>
											</label>
										</li>
										<li>
											<label className='contect_container_checkBox'>
												Sub Categoru name here
												<input type='checkbox' checked='checked' name='text' />
												<span className='contect_checkmark'></span>
											</label>
										</li>
										<li>
											<label className='contect_container_checkBox'>
												Sub Category
												<input type='checkbox' checked='checked' name='text' />
												<span className='contect_checkmark'></span>
											</label>
										</li>
									</ul>
								</div>

								<div className='form_group'>
									<label className='search_label'>Price Range</label>
									<div className='slider_rnge'>
										<div
											id='slider-range'
											className='ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all'>
											<div
												className='ui-slider-range ui-widget-header ui-corner-all'
												style={{ left: '0%', width: '100%' }}></div>
											<span
												tabindex='0'
												className='ui-slider-handle ui-state-default ui-corner-all'
												style={{ left: '0%' }}></span>
											<span
												tabindex='0'
												className='ui-slider-handle ui-state-default ui-corner-all'
												style={{ left: '100%' }}></span>
										</div>
										<span className='range-text'>
											<input
												type='text'
												className='price_numb'
												readonly
												id='amount'
											/>
										</span>
									</div>
								</div>

								<button type='submit' className='search-submit1'>
									Filter
								</button>
							</div>
							{/* <!----> */}

							{/* <!--right--> */}
							<div className='right_search_panel'>
								<div className='evnt_shot_by_main'>
									<label className='event-sort'>
										Showing 1-20 out of 100 product for Vegetable
									</label>
									<div className='sort-filter'>
										<p>Sort by :</p>
										<select className='sort-select'>
											<option>Select</option>
											<option>Price - Low to High</option>
											<option>Price - High to Low </option>
										</select>
									</div>
								</div>

								<div className='search_proo'>
									<div className='srch_pic_box'>
										<img src={search01} alt='' />
										<span>
											<a href='#'>Call For Enquiry</a>
										</span>
									</div>
									<div className='srch_dtls_box'>
										<a href='#'>Fresh Onion</a>
										<p>Rs.40.00</p>
									</div>
								</div>

								<div className='search_proo'>
									<div className='srch_pic_box'>
										<img src={search02} alt='' />
										<span>
											<a href='#'>Call For Enquiry</a>
										</span>
									</div>
									<div className='srch_dtls_box'>
										<a href='#'>Fresh Onion</a>
										<p>Rs.20.00</p>
									</div>
								</div>

								<div className='search_proo'>
									<div className='srch_pic_box'>
										<img src={search03} alt='' />
										<span>
											<a href='#'>Call For Enquiry</a>
										</span>
									</div>
									<div className='srch_dtls_box'>
										<a href='#'>Fresh Onion</a>
										<p>Rs.40.00</p>
									</div>
								</div>

								<div className='search_proo'>
									<div className='srch_pic_box'>
										<img src={search04} alt='' />
										<span>
											<a href='#'>Call For Enquiry</a>
										</span>
									</div>
									<div className='srch_dtls_box'>
										<a href='#'>Fresh Onion</a>
										<p>Rs.30.00</p>
									</div>
								</div>

								<div className='search_proo'>
									<div className='srch_pic_box'>
										<img src={search05} alt='' />
										<span>
											<a href='#'>Call For Enquiry</a>
										</span>
									</div>
									<div className='srch_dtls_box'>
										<a href='#'>Fresh Onion</a>
										<p>Rs.80.00</p>
									</div>
								</div>

								<div className='search_proo'>
									<div className='srch_pic_box'>
										<img src={search06} alt='' />
										<span>
											<a href='#'>Call For Enquiry</a>
										</span>
									</div>
									<div className='srch_dtls_box'>
										<a href='#'>Fresh Onion</a>
										<p>Rs.80.00</p>
									</div>
								</div>

								<div className='search_proo'>
									<div className='srch_pic_box'>
										<img src={search07} alt='' />
										<span>
											<a href='#'>Call For Enquiry</a>
										</span>
									</div>
									<div className='srch_dtls_box'>
										<a href='#'>Fresh Onion</a>
										<p>Rs.80.00</p>
									</div>
								</div>

								<div className='search_proo'>
									<div className='srch_pic_box'>
										<img src={search08} alt='' />
										<span>
											<a href='#'>Call For Enquiry</a>
										</span>
									</div>
									<div className='srch_dtls_box'>
										<a href='#'>Fresh Onion</a>
										<p>Rs.80.00</p>
									</div>
								</div>

								<div className='search_proo'>
									<div className='srch_pic_box'>
										<img src={search09} alt='' />
										<span>
											<a href='#'>Call For Enquiry</a>
										</span>
									</div>
									<div className='srch_dtls_box'>
										<a href='#'>Fresh Onion</a>
										<p>Rs.80.00</p>
									</div>
								</div>

								<div className='search_proo'>
									<div className='srch_pic_box'>
										<img src={search10} alt='' />
										<span>
											<a href='#'>Call For Enquiry</a>
										</span>
									</div>
									<div className='srch_dtls_box'>
										<a href='#'>Fresh Onion</a>
										<p>Rs.80.00</p>
									</div>
								</div>

								<div className='search_proo'>
									<div className='srch_pic_box'>
										<img src={search11} alt='' />
										<span>
											<a href='#'>Call For Enquiry</a>
										</span>
									</div>
									<div className='srch_dtls_box'>
										<a href='#'>Fresh Onion</a>
										<p>Rs.80.00</p>
									</div>
								</div>

								<div className='search_proo'>
									<div className='srch_pic_box'>
										<img src={search12} alt='' />
										<span>
											<a href='#'>Call For Enquiry</a>
										</span>
									</div>
									<div className='srch_dtls_box'>
										<a href='#'>Fresh Onion</a>
										<p>Rs.80.00</p>
									</div>
								</div>

								<div className='search_proo'>
									<div className='srch_pic_box'>
										<img src={search01} alt='' />
										<span>
											<a href='#'>Call For Enquiry</a>
										</span>
									</div>
									<div className='srch_dtls_box'>
										<a href='#'>Fresh Onion</a>
										<p>Rs.40.00</p>
									</div>
								</div>

								<div className='search_proo'>
									<div className='srch_pic_box'>
										<img src={search02} alt='' />
										<span>
											<a href='#'>Call For Enquiry</a>
										</span>
									</div>
									<div className='srch_dtls_box'>
										<a href='#'>Fresh Onion</a>
										<p>Rs.20.00</p>
									</div>
								</div>

								<div className='search_proo'>
									<div className='srch_pic_box'>
										<img src={search03} alt='' />
										<span>
											<a href='#'>Call For Enquiry</a>
										</span>
									</div>
									<div className='srch_dtls_box'>
										<a href='#'>Fresh Onion</a>
										<p>Rs.40.00</p>
									</div>
								</div>

								<div className='search_proo'>
									<div className='srch_pic_box'>
										<img src={search04} alt='' />
										<span>
											<a href='#'>Call For Enquiry</a>
										</span>
									</div>
									<div className='srch_dtls_box'>
										<a href='#'>Fresh Onion</a>
										<p>Rs.30.00</p>
									</div>
								</div>

								<div className='search_proo'>
									<div className='srch_pic_box'>
										<img src={search05} alt='' />
										<span>
											<a href='#'>Call For Enquiry</a>
										</span>
									</div>
									<div className='srch_dtls_box'>
										<a href='#'>Fresh Onion</a>
										<p>Rs.80.00</p>
									</div>
								</div>

								<div className='search_proo'>
									<div className='srch_pic_box'>
										<img src={search06} alt='' />
										<span>
											<a href='#'>Call For Enquiry</a>
										</span>
									</div>
									<div className='srch_dtls_box'>
										<a href='#'>Fresh Onion</a>
										<p>Rs.80.00</p>
									</div>
								</div>

								<div className='search_proo'>
									<div className='srch_pic_box'>
										<img src={search07} alt='' />
										<span>
											<a href='#'>Call For Enquiry</a>
										</span>
									</div>
									<div className='srch_dtls_box'>
										<a href='#'>Fresh Onion</a>
										<p>Rs.80.00</p>
									</div>
								</div>

								<div className='search_proo'>
									<div className='srch_pic_box'>
										<img src={search08} alt='' />
										<span>
											<a href='#'>Call For Enquiry</a>
										</span>
									</div>
									<div className='srch_dtls_box'>
										<a href='#'>Fresh Onion</a>
										<p>Rs.80.00</p>
									</div>
								</div>

								<div className='w-100'></div>

								<div className='pagination_area'>
									<ul>
										<li>
											<a href='#'>
												<i className='fa fa-angle-left' aria-hidden='true'></i>{' '}
											</a>
										</li>
										<li>
											<a href='#'>1</a>
										</li>
										<li>
											<a href='#'>2</a>
										</li>
										<li className='active'>
											<a href='#'>3</a>
										</li>
										<li>
											<a href='#'>4</a>
										</li>
										<li>
											<a href='#'>...</a>
										</li>
										<li>
											<a href='#'>25</a>
										</li>
										<li>
											<a href='#'>
												{' '}
												<i className='fa fa-angle-right' aria-hidden='true'></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</>
	);
};

export default Product;
