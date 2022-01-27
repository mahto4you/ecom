import React, { useState } from 'react';
import Footer from '../components/reusableComponents/Footer';
import Header from '../components/reusableComponents/Header';
import dachprofi from '../assets/images/dachprofi.jpg';
import star1 from '../assets/images/star1.png';
import star2 from '../assets/images/star2.png';
import dashico1 from '../assets/images/dashico1.png';
import dashico2 from '../assets/images/dashico2.png';
import dashico3 from '../assets/images/dashico3.png';
import dashico10 from '../assets/images/dashico10.png';
import dashico4 from '../assets/images/dashico4.png';
import dashico7 from '../assets/images/dashico7.png';
import dashico8 from '../assets/images/dashico8.png';
import dashico9 from '../assets/images/dashico9.png';
import uplodimg from '../assets/images/uplodimg.jpg';
import clickhe from '../assets/images/clickhe.png';
import imageToBase64 from 'image-to-base64/browser';
import { useDispatch, useSelector } from 'react-redux';
import { editUserProfileDispatch } from '../reducers/UsersReducer';
const Dashboard = () => {
	const { userInfo } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	// const fileInputRef = React.createRef();
	const [gender, setGender] = useState(
		userInfo &&
			userInfo.result &&
			userInfo.result.userdata &&
			userInfo.result.userdata.gender
	);
	const [upload, setUpload] = useState('');
	const handleGender1 = () => {
		setGender('M');
	};
	const handleGender2 = () => {
		setGender('F');
	};
	// const fileChange = (event) => {
	// 	event.preventDefault();
	// 	const fileToUpload = event.target.files;
	// 	console.log(fileToUpload[0]);
	// 	// setUpload(fileToUpload[0]);
	// 	setUpload(URL.createObjectURL(fileToUpload[0]));
	// 	imageToBase64(URL.createObjectURL(fileToUpload[0]))
	// 		.then((response) => {
	// 			// setUpload(`data:${fileToUpload['0'].type};base64,` + response); // "cGF0aC90by9maWxlLmpwZw=="
	// 			setUpload(fileToUpload['0'].type); // "cGF0aC90by9maWxlLmpwZw=="
	// 		})
	// 		.catch((error) => {
	// 			console.log(error); // Logs an error if there was one
	// 		});
	// };
	console.log(upload);
	const [data, setData] = useState({
		name:
			userInfo &&
			userInfo.result &&
			userInfo.result.userdata &&
			userInfo.result.userdata.name,
		email:
			userInfo &&
			userInfo.result &&
			userInfo.result.userdata &&
			userInfo.result.userdata.email,
		phone:
			userInfo &&
			userInfo.result &&
			userInfo.result.userdata &&
			userInfo.result.userdata.phone,
		about_me:
			userInfo &&
			userInfo.result &&
			userInfo.result.userdata &&
			userInfo.result.userdata.about_me,
		date_of_birth:
			userInfo &&
			userInfo.result &&
			userInfo.result.userdata &&
			userInfo.result.userdata.date_of_birth,
		password: '',
		state:
			userInfo &&
			userInfo.result &&
			userInfo.result.userdata &&
			userInfo.result.userdata.state,
		city:
			userInfo &&
			userInfo.result &&
			userInfo.result.userdata &&
			userInfo.result.userdata.city,
		password_confirmation: '',
	});

	const handleChange = (e) => {
		setData({ [e.target.name]: [e.target.value] });
	};
	const handleSubmit = (e) => {
		// console.log(e.target[0].value);
		// console.log(e.target[1].value);
		// console.log(e.target[2].value);
		// console.log(e.target[3].value);
		// console.log(e.target[4].value);
		// console.log(e.target[14].value);
		// console.log(e.target[15].value);
		// console.log(e.target[16].value);
		// console.log(e.target[17].value);
		// console.log(e.target[18].value);

		// console.log(e);
		// console.log(gender);
		e.preventDefault();
		const formDat = new FormData();
		formDat.append('image', upload);
		formDat.append('name', e.target[0].value);
		formDat.append('email', e.target[1].value);
		formDat.append('phone', e.target[2].value);
		formDat.append('gender', gender);
		formDat.append('about_me', e.target[3].value);
		formDat.append('date_of_birth', e.target[4].value);
		formDat.append('state', e.target[14].value);
		formDat.append('city', e.target[15].value);
		formDat.append('password', e.target[16].value);
		formDat.append('new_password', e.target[17].value);
		formDat.append('confirm_password', e.target[18].value);
		// formDat.append('file', upload);
		// formDat.append('file', upload);
		// formDat.append('file', upload);
		// formDat.append('file', upload);
		// let formData = {
		// 	// params: {
		// 	name: e.target[0].value,
		// 	email: e.target[1].value,
		// 	phone: e.target[2].value,
		// 	gender: gender,
		// 	about_me: e.target[3].value,
		// 	date_of_birth: e.target[4].value,
		// 	country_id: 1,
		// 	state: e.target[14].value,
		// 	city: e.target[15].value,
		// 	password: e.target[16].value,
		// 	new_password: e.target[17].value,
		// 	confirm_password: e.target[18].value,
		// 	image: formDat,
		// 	// },
		// };
		console.log(formDat);
		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target[1].value)) {
			alert('Invalid email');
		} else {
			dispatch(
				editUserProfileDispatch(
					formDat,
					userInfo && userInfo.result && userInfo.result.token
				)
			);
		}
	};
	return (
		<>
			<div className='wrapper'>
				<Header />
				<section className='mainDasbordsec'>
					<div className='container'>
						<div className='mainDasbordInr'>
							<div className='row'>
								<div className='col-lg-3 col-md-12 col-sm-12 pl-0'>
									<div className='dasbordLeftsec'>
										<a
											href='#url'
											className='showmeu'
											data-toggle='collapse'
											data-target='#demo'>
											<i className='fa fa-bars'></i>Show Menus
										</a>
										<div className='dasbordLeft '>
											<div className='profibx'>
												<em>
													<img
														// src={
														// 	'https://phpwebdevelopmentservices.com/project-react-backend/' +
														// 		userInfo &&
														// 	userInfo.result &&
														// 	userInfo.result.userdata &&
														// 	userInfo.result.userdata.image
														// }
														src={dachprofi}
														alt=''
													/>
												</em>
												<strong>Rabin Mnna</strong>
												<ul>
													<li>
														<a href='#'>
															<img src={star1} alt='' />
														</a>
													</li>
													<li>
														<a href='#'>
															<img src={star1} alt='' />
														</a>
													</li>
													<li>
														<a href='#'>
															<img src={star1} alt='' />
														</a>
													</li>
													<li>
														<a href='#'>
															<img src={star1} alt='' />
														</a>
													</li>
													<li>
														<a href='#'>
															<img src={star2} alt='' />
														</a>
													</li>
													<li>
														<span>(410)</span>
													</li>
												</ul>
											</div>
											<div className='dasbordLeftlink'>
												<ul>
													<li>
														<a href='#'>
															<span>
																<img
																	src={dashico1}
																	alt=''
																	className='dashico1'
																/>
															</span>
															Dashboard
														</a>
													</li>
													<li>
														<a href='#' className='activ'>
															<span>
																<img
																	src={dashico2}
																	alt=''
																	className='dashico1'
																/>
															</span>
															Edit Profile
														</a>
													</li>
													<li>
														<a href='#'>
															<span>
																<img
																	src={dashico3}
																	alt=''
																	className='dashico1'
																/>
															</span>
															My Order
														</a>
													</li>
													<li>
														<a href='#'>
															<span>
																<img
																	src={dashico10}
																	alt=''
																	className='dashico1'
																/>
															</span>
															My Favorite
														</a>
													</li>
													<li>
														<a href='#'>
															<span>
																<img
																	src={dashico4.png}
																	alt=''
																	className='dashico1'
																/>
															</span>
															Reviews
														</a>
													</li>

													<li>
														<a href='#'>
															<span>
																<img
																	src={dashico7}
																	alt=''
																	className='dashico1'
																/>
															</span>
															Messages<em>10</em>
														</a>
													</li>
													<li>
														<a href='#'>
															<span>
																<img
																	src={dashico8}
																	alt=''
																	className='dashico1'
																/>
															</span>
															Notifications
															<em>14</em>
														</a>
													</li>
													<li>
														<a href='login.html'>
															<span>
																<img
																	src={dashico9}
																	alt=''
																	className='dashico1'
																/>
															</span>
															Log Out
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className='col-lg-9 col-md-12 col-sm-12 pr-0'>
									<div className='dasbordRightlink'>
										<h1>Edit Profile</h1>
										<div className='dasbordRightBody'>
											<div className='editProformBx'>
												<form action='' onSubmit={handleSubmit}>
													<div className='editProformir'>
														<div className='row'>
															<div className='col-md-4 col-sm-12'>
																<div className='iputBx'>
																	<label>Name</label>
																	<input
																		type='text'
																		placeholder='Enter here'
																		name='name'
																		onChange={handleChange}
																		value={data.name}
																	/>
																</div>
															</div>
															<div className='col-md-4 col-sm-12'>
																<div className='iputBx'>
																	<label>Email</label>
																	<input
																		type='email'
																		placeholder='Enter here'
																		name='email'
																		onChange={handleChange}
																		value={data.email}
																	/>
																</div>
															</div>
															<div className='col-md-4 col-sm-12'>
																<div className='iputBx'>
																	<label>Phone</label>
																	<input
																		type='text'
																		placeholder='Enter here'
																		name='phone'
																		onChange={handleChange}
																		value={data.phone}
																	/>
																</div>
															</div>
															<div className='col-sm-12'>
																<div className='iputBx'>
																	<label>About me</label>
																	<textarea
																		placeholder='Enter your description here...'
																		name='about_me'
																		onChange={handleChange}
																		value={data.about_me}></textarea>
																</div>
															</div>

															<div className='col-md-5 col-sm-6'>
																<div className='iputBx'>
																	<label>Date of Birth</label>
																	<input
																		type='date'
																		className='datepicker'
																		// placeholder='Enter here'
																		name='date_of_birth'
																		onChange={handleChange}
																		value={data.date_of_birth}
																	/>
																</div>
															</div>

															<div className='col-md-4 col-sm-6'>
																<div className='genfil'>
																	<span>Gender</span>
																	<ul>
																		<li>
																			<input
																				type='radio'
																				id='radio1'
																				name='male'
																				onClick={handleGender1}
																				checked={gender === 'M' ? true : false}
																			/>
																			<label for='radio1'>Male</label>
																		</li>
																		<li>
																			<input
																				type='radio'
																				id='radio2'
																				name='female'
																				onClick={handleGender2}
																				checked={gender === 'F' ? true : false}
																			/>
																			<label for='radio2'>Female</label>
																		</li>
																	</ul>
																</div>
															</div>

															<div className='col-sm-12'>
																<div className='form_group edt_checkk'>
																	<label className='search_label'>Travel</label>
																	<ul className='c_ul'>
																		<li>
																			<label className='contect_container_checkBox'>
																				Bus
																				<input
																					type='checkbox'
																					checked={true}
																					// name='text'
																					name='bus'
																					onChange={handleChange}
																					value={data.bus}
																				/>
																				<span className='contect_checkmark'></span>
																			</label>
																		</li>
																		<li>
																			<label className='contect_container_checkBox'>
																				Car
																				<input
																					type='checkbox'
																					name='car'
																					onChange={handleChange}
																					value={data.car}
																				/>
																				<span className='contect_checkmark'></span>
																			</label>
																		</li>
																		<li>
																			<label className='contect_container_checkBox'>
																				Track
																				<input
																					type='checkbox'
																					// name='text'
																					name='track'
																					onChange={handleChange}
																					value={data.track}
																				/>
																				<span className='contect_checkmark'></span>
																			</label>
																		</li>
																		<li>
																			<label className='contect_container_checkBox'>
																				Walk
																				<input
																					type='checkbox'
																					name='walk'
																					onChange={handleChange}
																					value={data.walk}
																				/>
																				<span className='contect_checkmark'></span>
																			</label>
																		</li>
																		<li>
																			<label className='contect_container_checkBox'>
																				Scooter
																				<input
																					type='checkbox'
																					name='scooter'
																					onChange={handleChange}
																					value={data.scooter}
																				/>
																				<span className='contect_checkmark'></span>
																			</label>
																		</li>
																	</ul>
																</div>
															</div>

															<div className='col-sm-12'>
																{/* <div className='form_fild_area_m frm_grp arro'>
																	<label>Language </label>
																	<select
																		data-placeholder='Select'
																		className='chosen-select'
																		multiple
																		tabindex='4'>
																		<option value=''></option>
																		<option value=''>
																			Htmuyyiyyuyu uyytuyl
																		</option>
																		<option value=''>
																			Htmuyyiyyuyu uyytuyl
																		</option>
																		<option value=''>
																			Htmuyyiyyuyu uyytuyl
																		</option>
																		<option value=''>
																			Htmuyyiyyuyu uyytuyl
																		</option>
																	</select>
																</div> */}
															</div>

															<div className='col-sm-12'>
																<div className='uplodimg'>
																	<span>Profile Image</span>
																	<div className='uplodimgfil'>
																		<input
																			// ref={fileInputRef}
																			type='file'
																			accept='image/*'
																			hidden
																			onChange={(e) =>
																				setUpload(e.target.files[0])
																			}
																			// onChange={fileChange}
																			name='file'
																			id='file-1'
																			className='inputfile inputfile-1'
																			// data-multiple-caption='{count} files selected'
																			// multiple
																		/>
																		<label for='file-1'>
																			Click here to Upload Profile Image
																			<img src={clickhe} alt='' />
																		</label>
																	</div>
																	<div className='uplodimgfilimg'>
																		<em>
																			<img src={uplodimg} alt='' />
																		</em>
																	</div>
																</div>
															</div>
														</div>

														<div className='locatioSec'>
															<h3>Location</h3>
															<div className='row'>
																<div className='col-md-4 col-sm-6'>
																	<div className='iputBx'>
																		<label>Country</label>
																		<select
																			name='country'
																			value={data.country}
																			onChange={handleChange}>
																			<option>India</option>
																			<option>Bangladesh</option>
																		</select>
																	</div>
																</div>
																<div className='col-md-4 col-sm-6'>
																	<div className='iputBx'>
																		<label>State</label>
																		<input
																			type='text'
																			placeholder='Enter here'
																			name='state'
																			value={data.state}
																			onChange={handleChange}
																		/>
																	</div>
																</div>
																<div className='col-md-4 col-sm-12'>
																	<div className='iputBx'>
																		<label>City</label>
																		<input
																			type='text'
																			placeholder='Enter your full address'
																			name='city'
																			value={data.city}
																			onChange={handleChange}
																		/>
																	</div>
																</div>
															</div>
														</div>

														<div className='locatioSec'>
															<h3>Change password</h3>
															<div className='row'>
																<div className='col-md-4 col-sm-6'>
																	<div className='iputBx'>
																		<label>Current password</label>
																		<input
																			type='password'
																			placeholder='Enter here'
																			name='password'
																			value={data.password}
																			onChange={handleChange}
																		/>
																	</div>
																</div>
																<div className='col-md-4 col-sm-6'>
																	<div className='iputBx'>
																		<label>New password</label>
																		<input
																			type='password'
																			placeholder='Enter here'
																			name='new_password'
																			value={data.new_password}
																			onChange={handleChange}
																		/>
																	</div>
																</div>
																<div className='col-md-4 col-sm-12'>
																	<div className='iputBx'>
																		<label>Confirm password</label>
																		<input
																			type='password'
																			placeholder='Enter here'
																			name='confirm_password'
																			value={data.confirm_password}
																			onChange={handleChange}
																		/>
																	</div>
																</div>
															</div>
														</div>

														<div className='footdashSec'>
															<input
																type='submit'
																value='Save all changes'
																className='subbtn'
															/>
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

				<Footer />
			</div>
		</>
	);
};

export default Dashboard;
