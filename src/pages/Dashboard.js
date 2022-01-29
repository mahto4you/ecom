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
import { Link } from 'react-router-dom';
import { Formik } from 'formik';

import { useDispatch, useSelector } from 'react-redux';
import {
	editUserProfileDispatch,
	userLoginSuccess,
} from '../reducers/UsersReducer';
const Dashboard = () => {
	const { userInfo } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const [email, setEmail] = useState(false);
	const [n, setReqn] = useState(false);
	const [e, setReqe] = useState(false);
	const [p, setReqp] = useState(false);
	const [ab, setReqab] = useState(false);
	const [dob, setReqdob] = useState(false);
	const [s, setReqs] = useState(false);
	const [c, setReqc] = useState(false);

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
		if (
			e.target[0].value == '' ||
			e.target[1].value == '' ||
			e.target[2].value == '' ||
			e.target[3].value == '' ||
			e.target[4].value == '' ||
			e.target[14].value == '' ||
			e.target[15].value == '' ||
			e.target[16].value == '' ||
			e.target[17].value == '' ||
			e.target[18].value == ''
		) {
			setReqn(true);
			setReqe(true);
			setReqp(true);
			setReqab(true);
			setReqdob(true);
			setReqs(true);
			setReqc(true);
		} else if (e.target[17].value === e.target[18].value) {
			if (
				!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target[1].value)
			) {
				setEmail(true);
			} else {
				dispatch(
					editUserProfileDispatch(
						formDat,
						userInfo && userInfo.result && userInfo.result.token
					)
				);
			}
		} else {
			alert('Password Mismatch');
		}
		console.log(formDat);

		// if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target[1].value)) {
		// 	alert('Invalid email');
		// } else {
		// 	dispatch(
		// 		editUserProfileDispatch(
		// 			formDat,
		// 			userInfo && userInfo.result && userInfo.result.token
		// 		)
		// 	);
		// }
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
														src={
															'https://phpwebdevelopmentservices.com/project-react-backend/storage/app/public/customer/profile_pics/' +
															userInfo.result.userdata.image
														}
														alt=''
													/>
												</em>
												<strong>
													{userInfo &&
														userInfo.result &&
														userInfo.result.userdata &&
														userInfo.result.userdata.name}
												</strong>
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
													<li
														onClick={() => {
															dispatch(userLoginSuccess(null));
															localStorage.clear();
														}}>
														<Link to='/login'>
															<span>
																<img
																	src={dashico9}
																	alt=''
																	className='dashico1'
																/>
															</span>
															Log Out
														</Link>
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
												<Formik
													initialValues={{
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
													}}
													validate={(values) => {
														const errors = {};
														if (!values.email) {
															errors.email = 'Required';
														} else if (
															!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
																values.email
															)
														) {
															errors.email = 'Invalid email address';
														}

														if (!values.name) {
															errors.name = 'Required';
														}
														if (!values.city) {
															errors.city = 'Required';
														}
														if (!values.about_me) {
															errors.about_me = 'Required';
														}
														if (!values.state) {
															errors.state = 'Required';
														}
														if (!values.phone) {
															errors.phone = 'Required';
														}
														if (values.password !== values.confirm_password) {
															errors.confirm_password = 'Password Mismatch';
														}
														return errors;
													}}
													onSubmit={(values, { setSubmitting }, e) => {
														console.log(values);
														const formDat = new FormData();
														formDat.append('image', upload);
														formDat.append('name', values.name);
														formDat.append('email', values.email);
														formDat.append('phone', values.phone);
														formDat.append('gender', gender);
														formDat.append('about_me', values.about_me);
														formDat.append(
															'date_of_birth',
															values.date_of_birth
														);
														formDat.append('state', values.state);
														formDat.append('city', values.city);
														formDat.append('password', values.password);
														formDat.append('new_password', values.new_password);
														formDat.append(
															'confirm_password',
															values.confirm_password
														);
														console.log(formDat);
														dispatch(
															editUserProfileDispatch(
																formDat,
																userInfo &&
																	userInfo.result &&
																	userInfo.result.token
															)
														);
													}}>
													{({
														values,
														errors,
														touched,
														handleChange,
														handleBlur,
														handleSubmit,
														isSubmitting,
													}) => (
														<form onSubmit={handleSubmit}>
															<div className='editProformir'>
																<div className='row'>
																	<div className='col-md-4 col-sm-12'>
																		<div className='iputBx'>
																			<label>Name</label>
																			<input
																				type='text'
																				className='login-type'
																				placeholder='Full name'
																				name='name'
																				onChange={handleChange}
																				onBlur={handleBlur}
																				value={values.name}
																			/>
																			<span style={{ color: 'red' }}>
																				{errors.name &&
																					touched.name &&
																					errors.name}
																			</span>
																		</div>
																	</div>
																	<div className='col-md-4 col-sm-12'>
																		<div className='iputBx'>
																			<label>Email</label>
																			<input
																				type='email'
																				name='email'
																				className='login-type'
																				placeholder='Email or mobile number'
																				onChange={handleChange}
																				onBlur={handleBlur}
																				value={values.email}
																			/>
																			<span style={{ color: 'red' }}>
																				{errors.email &&
																					touched.email &&
																					errors.email}
																			</span>
																		</div>
																	</div>
																	<div className='col-md-4 col-sm-12'>
																		<div className='iputBx'>
																			<label>Phone</label>
																			<input
																				type='number'
																				className='login-type'
																				name='phone'
																				placeholder='Phone'
																				onChange={handleChange}
																				onBlur={handleBlur}
																				value={values.phone}
																			/>
																			<span style={{ color: 'red' }}>
																				{errors.phone &&
																					touched.phone &&
																					errors.phone}
																			</span>
																		</div>
																	</div>
																	<div className='col-sm-12'>
																		<div className='iputBx'>
																			<label>About me</label>
																			<textarea
																				placeholder='Enter your description here...'
																				name='about_me'
																				onChange={handleChange}
																				onBlur={handleBlur}
																				value={values.about_me}></textarea>
																			<span style={{ color: 'red' }}>
																				{errors.about_me &&
																					touched.about_me &&
																					errors.about_me}
																			</span>
																		</div>
																	</div>
																	<div className='col-md-5 col-sm-6'>
																		<div className='iputBx'>
																			<label>Date of Birth</label>
																			<input
																				type='date'
																				className='datepicker'
																				name='date_of_birth'
																				onChange={handleChange}
																				onBlur={handleBlur}
																				value={values.date_of_birth}
																			/>
																			<span style={{ color: 'red' }}>
																				{errors.date_of_birth &&
																					touched.date_of_birth &&
																					errors.date_of_birth}
																			</span>
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
																						checked={
																							gender === 'M' ? true : false
																						}
																					/>
																					<label for='radio1'>Male</label>
																				</li>
																				<li>
																					<input
																						type='radio'
																						id='radio2'
																						name='female'
																						onClick={handleGender2}
																						checked={
																							gender === 'F' ? true : false
																						}
																					/>
																					<label for='radio2'>Female</label>
																				</li>
																			</ul>
																		</div>
																	</div>
																	<div className='col-sm-12'>
																		<div className='form_group edt_checkk'>
																			<label className='search_label'>
																				Travel
																			</label>
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
																					<img
																						src={
																							'https://phpwebdevelopmentservices.com/project-react-backend/storage/app/public/customer/profile_pics/' +
																							userInfo.result.userdata.image
																						}
																						style={{ width: 30, height: 30 }}
																						alt=''
																					/>{' '}
																				</em>
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
																						value={values.country}
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
																						value={values.state}
																						onChange={handleChange}
																					/>
																					<span style={{ color: 'red' }}>
																						{errors.state &&
																							touched.state &&
																							errors.state}
																					</span>
																				</div>
																			</div>
																			<div className='col-md-4 col-sm-12'>
																				<div className='iputBx'>
																					<label>City</label>
																					<input
																						type='text'
																						placeholder='Enter your full address'
																						name='city'
																						value={values.city}
																						onChange={handleChange}
																					/>
																					<span style={{ color: 'red' }}>
																						{errors.city &&
																							touched.city &&
																							errors.city}
																					</span>
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
																						value={values.password}
																						onChange={handleChange}
																					/>
																					<span style={{ color: 'red' }}>
																						{errors.password &&
																							touched.password &&
																							errors.password}
																					</span>
																				</div>
																			</div>
																			<div className='col-md-4 col-sm-6'>
																				<div className='iputBx'>
																					<label>New password</label>
																					<input
																						type='password'
																						placeholder='Enter here'
																						name='new_password'
																						value={values.new_password}
																						onChange={handleChange}
																					/>
																					<span style={{ color: 'red' }}>
																						{errors.new_password &&
																							touched.new_password &&
																							errors.new_password}
																					</span>
																				</div>
																			</div>
																			<div className='col-md-4 col-sm-12'>
																				<div className='iputBx'>
																					<label>Confirm password</label>
																					<input
																						type='password'
																						placeholder='Enter here'
																						name='confirm_password'
																						value={values.confirm_password}
																						onChange={handleChange}
																					/>
																					<span style={{ color: 'red' }}>
																						{errors.confirm_password &&
																							touched.confirm_password &&
																							errors.confirm_password}
																					</span>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>

															<button
																type='submit'
																className='subbtn'
																// disabled={isSubmitting}
															>
																Save all changes
															</button>
														</form>
													)}
												</Formik>
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
