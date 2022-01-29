import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { categDispatch } from '../reducers/UsersReducer';

import ProductCard from '../components/reusableComponents/ProductCard';
const Product = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state);
	const { categ } = useSelector((state) => state.user);
	const [page, setPage] = useState(1);
	const [val, setVal] = useState('');
	const [sub, setSub] = useState('');
	const [data, setData] = useState('');
	let employees = [
		{ name: 'John', salary: 90000, hireDate: 'July 1, 2010' },
		{ name: 'David', salary: 75000, hireDate: 'August 15, 2009' },
		{ name: 'Ana', salary: 80000, hireDate: 'December 12, 2011' },
	];
	// let am = document.getElementById('slider-range').slider('values', 0);
	// console.log(am);
	const handleSort = (e) => {
		// console.log(e.target[1].value);
		console.log(e.target.value);

		setVal(e.target.value);
		// // console.log(user.categ.result.products.sort());
		if (e.target.value === '2') {
			let results = [];
			results =
				user &&
				user.categ &&
				user.categ.result &&
				user.categ.result.products.slice().sort((a, b) => {
					return a.price - b.price;
				});
			setData(results);
		} else if (e.target.value === '3') {
			let results = [];
			results =
				user &&
				user.categ &&
				user.categ.result &&
				user.categ.result.products.slice().sort((a, b) => {
					return b.price - a.price;
				});
			setData(results);
			console.log(results);
		}
		// console.log(results);
		// results =
		// 	user &&
		// 	user.categ &&
		// 	user.categ.result &&
		// 	user.categ.result.products.sort((a, b) => {
		// 		return a.price - b.price;
		// 	});
		// setData(results);
	};
	const handleCat = (e) => {
		console.log(e.target.value);
		let formData = {
			params: {
				category_id: e.target.value ? e.target.value : 1,
			},
		};
		dispatch(categDispatch(formData));
	};
	let formData2 = {
		params: {
			category_id: 1,
		},
	};
	const handleAmt = (e) => {
		console.log(e);
	};
	const handelSub = (id) => {
		let formD = {
			params: {
				category_id: id,
			},
		};
		dispatch(categDispatch(formD));
	};
	useEffect(() => {
		dispatch(categDispatch(formData2));
	}, []);
	const handleSearch = (event) => {
		let value = event.target.value.toLowerCase();
		let results = [];
		console.log(value);
		setVal(value);

		results =
			user &&
			user.categ &&
			user.categ.result &&
			user.categ.result.products.filter((data) => {
				return data.slug.search(value) != -1;
			});
		setData(results);
		console.log(data);
	};
	console.log(document.getElementById('amount'));
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
										onChange={handleSearch}
										className='search-input'
									/>
									<img src={icon36} className='search_icon' />
								</div>

								<div className='form_group'>
									<label className='search_label'>Category</label>
									<select className='slectt' onChange={handleCat}>
										<option value='1'>Vegetable</option>
										<option value='2'>Fruits</option>
										<option value='3'>Dairy products</option>
										<option value='4'>Organic Products</option>
										<option value='5'>Grocery Items</option>
									</select>
								</div>

								<div className='form_group'>
									<label className='search_label'>Sub Category</label>
									<ul className='c_ul'>
										<li>
											<label className='contect_container_checkBox'>
												Sub Category one
												<input
													type='checkbox'
													name='text'
													value='6'
													checked={sub === 1 ? 'checked' : ''}
													onClick={() => {
														handelSub(1);
														setSub(1);
													}}
												/>
												<span className='contect_checkmark'></span>
											</label>
										</li>
										<li>
											<label className='contect_container_checkBox'>
												Sub Category two
												<input
													type='checkbox'
													checked={sub === 2 ? 'checked' : ''}
													onClick={() => {
														handelSub(2);
														setSub(2);
													}}
													name='text'
												/>
												<span className='contect_checkmark'></span>
											</label>
										</li>
										<li>
											<label className='contect_container_checkBox'>
												Sub Category
												<input
													type='checkbox'
													checked={sub === 3 ? 'checked' : ''}
													onClick={() => {
														handelSub(3);
														setSub(3);
													}}
													name='text'
												/>
												<span className='contect_checkmark'></span>
											</label>
										</li>
										<li>
											<label className='contect_container_checkBox'>
												Sub Categoru name here
												<input
													type='checkbox'
													checked={sub === 4 ? 'checked' : ''}
													onClick={() => {
														handelSub(4);
														setSub(4);
													}}
													name='text'
												/>
												<span className='contect_checkmark'></span>
											</label>
										</li>
										<li>
											<label className='contect_container_checkBox'>
												Sub Category
												<input
													type='checkbox'
													checked={sub === 5 ? 'checked' : ''}
													onClick={() => {
														handelSub(5);
														setSub(5);
													}}
													name='text'
												/>
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
												onChange={handleAmt}
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
										<select className='sort-select' onChange={handleSort}>
											<option value='1'>Select</option>
											<option value='2'>Price - Low to High</option>
											<option value='3'>Price - High to Low </option>
										</select>
									</div>
								</div>
								{val
									? data.map((item, index) => {
											if (index < 4 && page === 1) {
												return (
													<>
														<ProductCard item={item} />
													</>
												);
											} else if (index > 4 && page === 2) {
												return (
													<>
														<ProductCard item={item} />
													</>
												);
											}
									  })
									: user &&
									  user.categ &&
									  user.categ.result &&
									  user.categ.result.products.length > 0 &&
									  user.categ.result.products.map((item, index) => {
											if (index < 4 && page === 1) {
												return (
													<>
														<ProductCard item={item} />
													</>
												);
											} else if (index > 4 && page === 2) {
												return (
													<>
														<ProductCard item={item} />
													</>
												);
											}
									  })}

								<div className='w-100'></div>

								<div className='pagination_area'>
									<ul>
										<li>
											<a
												href='#'
												onClick={() => (page == 2 ? setPage(page - 1) : '')}>
												<i className='fa fa-angle-left' aria-hidden='true'></i>{' '}
											</a>
										</li>
										<li className={page === 1 ? 'active' : ''}>
											<a href='#' onClick={() => setPage(1)}>
												1
											</a>
										</li>
										<li className={page === 2 ? 'active' : ''}>
											<a href='#' onClick={() => setPage(2)}>
												2
											</a>
										</li>
										{/* <li className='active' onClick={() => setPage(3)}>
											<a href='#'>3</a>
										</li> */}
										{/* <li>
											<a href='#'>4</a>
										</li>
										<li>
											<a href='#'>...</a>
										</li>
										<li>
											<a href='#'>25</a>
										</li> */}
										<li>
											<a
												href='#'
												onClick={() => (page < 2 ? setPage(page + 1) : '')}>
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
