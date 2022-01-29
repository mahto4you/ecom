import React from 'react';
import { Formik } from 'formik';
import Header from '../components/reusableComponents/Header';
import loginfacebook from '../assets/images/login-facebook.png';
import logingoogle from '../assets/images/login-google.png';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginDispatch } from '../reducers/UsersReducer';
import Footer from '../components/reusableComponents/Footer';

const Login = () => {
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
									<h2>Sign In</h2>
									<Formik
										initialValues={{ email: '', password: '' }}
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
											return errors;
										}}
										onSubmit={(values, { setSubmitting }, e) => {
											let formData = {
												params: {
													email: values.email,
													password: values.password,
												},
											};
											console.log(formData);
											dispatch(loginDispatch(formData));
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
												<span style={{ color: 'red' }}>
													{errors.password &&
														touched.password &&
														errors.password}
												</span>
												<div className='remmber-area'>
													<label className='list_checkBox'>
														Remember me
														<input type='checkbox' name='text' />
														<span className='list_checkmark'></span>
													</label>
													<a className='forgot-passwords' href='#'>
														Forgot Password?
													</a>
												</div>

												<button
													type='submit'
													className='login-submit'
													disabled={isSubmitting}>
													Sign In
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
											Don't have an account?{' '}
											<Link to='/signup'>Create Account</Link>
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

export default Login;
