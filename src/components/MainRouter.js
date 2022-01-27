import React from 'react';
import { useSelector } from 'react-redux';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Product from '../pages/Product';
import Register from '../pages/Register';

const MainRouter = () => {
	const { userInfo } = useSelector((state) => state.user);
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path={'/'}>
						<Home />
					</Route>
					<Route exact path={'/signup'}>
						<Register />
					</Route>
					<Route exact path={'/login'}>
						{userInfo && userInfo.result ? (
							<Redirect to='/dashboard'></Redirect>
						) : (
							<Login />
						)}
					</Route>
					<Route exact path={'/dashboard'}>
						<Dashboard />
					</Route>
					<Route exact path={'/product'}>
						<Product />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default MainRouter;
