import React from 'react';
import { Formik } from 'formik';
import Footer from '../components/reusableComponents/Footer';
import Header from '../components/reusableComponents/Header';
import loginfacebook from '../assets/images/login-facebook.png';
import logingoogle from '../assets/images/login-google.png';
import { addNewUserDispatch } from '../reducers/UsersReducer';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

const Register = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	return (
		<div className='wrapper'>
			<Header />
			<div className='search_main_section'>
				<div className='container'>
					<div className='row res_padd'>
						<div className='main-center-div'>
							<div className='top-border-div'>
								<div className='login-from-area'>
									<h2>Create Account</h2>
									<Formik
										initialValues={{
											name: '',
											email: '',
											phone: '',
											password: '',
											password_confirmation: '',
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
											if (!values.password) {
												errors.password = 'Required';
											}
											if (!values.name) {
												errors.name = 'Required';
											}
											if (!values.phone) {
												errors.phone = 'Required';
											}
											if (!values.password_confirmation) {
												errors.password_confirmation = 'Required';
											} else if (
												values.password !== values.password_confirmation
											) {
												errors.password_confirmation = 'Password Mismatch';
											}
											return errors;
										}}
										onSubmit={(values, { setSubmitting }, e) => {
											let formData = {
												params: {
													name: values.name,
													email: values.email,
													phone: values.phone,
													password: values.password,
													password_confirmation: values.password_confirmation,
												},
											};
											console.log(formData);
											dispatch(addNewUserDispatch(formData, history));
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
												<div>
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
														{errors.name && touched.name && errors.name}
													</span>
													<div className='clearfix'></div>
												</div>
												<div>
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
														{errors.email && touched.email && errors.email}
													</span>
													<div className='clearfix'></div>
												</div>
												<div>
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
														{errors.phone && touched.phone && errors.phone}
													</span>
													<div className='clearfix'></div>
												</div>
												<div>
													<input
														type='password'
														name='password'
														id='password-field'
														// type={eye ? 'text' : 'password'}
														className='login-type'
														placeholder='password'
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.password}
													/>
													<span style={{ color: 'red' }}>
														{errors.password &&
															touched.password &&
															errors.password}
													</span>

													<div className='clearfix'></div>
												</div>
												<div>
													<input
														type='password'
														name='password_confirmation'
														id='password-field'
														// type={eye ? 'text' : 'password'}
														className='login-type'
														placeholder='password'
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.password_confirmation}
													/>
													<span style={{ color: 'red' }}>
														{errors.password_confirmation &&
															touched.password_confirmation &&
															errors.password_confirmation}
													</span>

													<div className='clearfix'></div>
												</div>

												{/* <div className='clearfix'></div> */}

												{/* {true ? (
													<span
														toggle='#password-field'
														// onClick={() => setEye(false)}
														className='field-icon fa fa-fw fa-eye toggle-password'></span>
												) : (
													<span
														toggle='#password-field'
														// onClick={() => setEye(true)}
														className='field-icon fa fa-eye-slash toggle-password'></span>
												)} */}
												{/* {errors.password && touched.password && errors.password}
												<div className='remmber-area'>
													<label className='list_checkBox'>
														Remember me
														<input type='checkbox' name='text' />
														<span className='list_checkmark'></span>
													</label>
													<a className='forgot-passwords' href='#'>
														Forgot Password?
													</a>
												</div> */}

												{/* <button
													type='submit'
													className='login-submit'
													disabled={isSubmitting}>
													Sign In
												</button> */}
												<p>
													By clicking Sign In or continue with Facebook or
													Google, you agree to all{' '}
													<a href=''> Terms of Service</a> and{' '}
													<a href='#'> Privacy Policy</a>
												</p>
												<button type='submit' className='login-submit'>
													Sign up
												</button>
											</form>
										)}
									</Formik>
									<div className='or-area'>
										<span>Or Continue with</span>
									</div>
									<div className='login-socials-area'>
										<div className='socials-btns'>
											<a href='#' className='common-btns facebook-btn'>
												<img src={loginfacebook} alt='' /> Facebook
											</a>
											<a href='#' className='common-btns google-btn'>
												<img src={logingoogle} alt='' /> Google
											</a>
										</div>
									</div>
									<div className='bottom-account-div'>
										<p>
											Already have an account? <Link to='/login'>Login</Link>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Register;
