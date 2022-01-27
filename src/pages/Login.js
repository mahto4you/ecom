import React, { useState } from 'react';
import Footer from '../components/reusableComponents/Footer';
import Header from '../components/reusableComponents/Header';
import loginfacebook from '../assets/images/login-facebook.png';
import logingoogle from '../assets/images/login-google.png';
import { loginDispatch } from '../reducers/UsersReducer';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Login = () => {
	const [data, setData] = useState({
		email: '',
		password: '',
	});
	const dispatch = useDispatch();
	const [eye, setEye] = useState(false);
	const history = useHistory();
	const handleChange = (e) => {
		setData({ [e.target.name]: [e.target.value] });
	};
	const { userInfo } = useSelector((state) => state.user);
	const handleSubmit = (e) => {
		// console.log(e.target[0].value);
		e.preventDefault();
		let formData = {
			params: {
				email: e.target[0].value,
				password: e.target[1].value,
			},
		};
		console.log(formData);
		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target[0].value)) {
			alert('Invalid email');
		} else {
			dispatch(loginDispatch(formData));
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
										<h2>Sign In</h2>
										<form onSubmit={handleSubmit} action=''>
											<div>
												<input
													type='text'
													className='login-type'
													placeholder='Email or mobile number'
													name='email'
													onChange={handleChange}
													value={data.email}
													required
												/>
												<div className='clearfix'></div>
											</div>
											<div className='password-in'>
												<input
													id='password-field'
													type={eye ? 'text' : 'password'}
													className='login-type'
													name='password'
													onChange={handleChange}
													value={data.password}
													required
													placeholder='password'
												/>
												<div className='clearfix'></div>
												{eye ? (
													<span
														toggle='#password-field'
														onClick={() => setEye(false)}
														className='field-icon fa fa-fw fa-eye toggle-password'></span>
												) : (
													<span
														toggle='#password-field'
														onClick={() => setEye(true)}
														className='field-icon fa fa-eye-slash toggle-password'></span>
												)}
											</div>
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
											{/* <!--<p>By clicking Sign In or continue with Facebook or Google, you agree to all <a href=""> Terms of Service</a> and <a href="#"> Privacy Policy</a></p>--> */}
											<button type='submit' className='login-submit'>
												Sign In
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
										Don't have an account?{' '}
										<Link to='/signup'>Create Account</Link>
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

export default Login;
