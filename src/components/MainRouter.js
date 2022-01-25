import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Product from '../pages/Product';
import Register from '../pages/Register';

const MainRouter = () => {
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
						<Login />
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
