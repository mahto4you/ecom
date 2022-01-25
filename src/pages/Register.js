import React, { useState } from 'react';
import Footer from '../components/reusableComponents/Footer';
import Header from '../components/reusableComponents/Header';
import loginfacebook from '../assets/images/login-facebook.png';
import logingoogle from '../assets/images/login-google.png';
import { addNewUserDispatch } from '../reducers/UsersReducer';
import { useDispatch } from 'react-redux';
const Register = () => {
	const dispatch = useDispatch();
	const [data, setData] = useState({
		name: '',
		email: '',
		phone: '',
		password: '',
		password_confirmation: '',
	});

	const handleChange = (e) => {
		setData({ [e.target.name]: [e.target.value] });
	};
	const handleSubmit = (e) => {
		// console.log(e.target[0].value);
		e.preventDefault();
		let formData = {
			params: {
				name: e.target[0].value,
				email: e.target[1].value,
				phone: e.target[2].value,
				password: e.target[3].value,
				password_confirmation: e.target[4].value,
			},
		};
		console.log(formData);
		if (formData.params.password === formData.params.password_confirmation) {
			dispatch(addNewUserDispatch(formData));
		} else {
			alert('Password Mismatch');
		}
	};
	return (
		<>
			<div className='wrapper'>
				<Header />
				<div className='search_main_section'>
					<div className='container'>
						<div className='row res_padd'>
							<div className='main-center-div'>
								<div className='top-border-div'>
									<div className='login-from-area'>
										<h2>Create Account</h2>
										<form onSubmit={handleSubmit} action=''>
											<div>
												<input
													type='text'
													className='login-type'
													placeholder='Full name'
													name='name'
													onChange={handleChange}
													value={data.name}
													required
												/>
												<div className='clearfix'></div>
											</div>

											<div>
												<input
													type='email'
													className='login-type'
													placeholder='Email'
													name='email'
													onChange={handleChange}
													value={data.email}
													required
												/>
												<div className='clearfix'></div>
											</div>

											<div>
												<input
													type='number'
													className='login-type'
													name='phone'
													placeholder='Phone'
													onChange={handleChange}
													value={data.phone}
													required
												/>
												<div className='clearfix'></div>
											</div>

											<div className='password-in'>
												<input
													id='password-field'
													type='password'
													className='login-type'
													name='password'
													onChange={handleChange}
													value={data.password}
													placeholder='password'
													required
												/>
												<div className='clearfix'></div>
												<span
													toggle='#password-field'
													className='field-icon fa fa-fw fa-eye toggle-password'></span>
											</div>
											<div className='password-in'>
												<input
													id='password-field'
													type='password'
													className='login-type'
													name='password_confirmation'
													value={data.password_confirmation}
													onChange={handleChange}
													required
													placeholder='Confirm password'
												/>
												<div className='clearfix'></div>
												<span
													toggle='#password-field'
													className='field-icon fa fa-fw fa-eye toggle-password'></span>
											</div>
											<p>
												By clicking Sign In or continue with Facebook or Google,
												you agree to all <a href=''> Terms of Service</a> and{' '}
												<a href='#'> Privacy Policy</a>
											</p>
											<button type='submit' className='login-submit'>
												Sign up
											</button>
										</form>
									</div>

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
								</div>
								<div className='bottom-account-div'>
									<p>
										Already have an account? <a href='login.html'>Login</a>
									</p>
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

export default Register;
