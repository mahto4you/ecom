import { axiosInstance } from '../Axios';
export const storeData = async (key, value) => {
	try {
		const jsonValue = JSON.stringify(value);
		localStorage.setItem(`${key}`, jsonValue);
	} catch (e) {
		// saving error
	}
};
export const getData = async (key) => {
	try {
		const jsonValue = localStorage.getItem(`${key}`);
		return jsonValue != null ? JSON.parse(jsonValue) : null;
	} catch (e) {
		// error reading value
	}
};

const { createSlice } = require('@reduxjs/toolkit');

const UsersReducer = createSlice({
	name: 'user',
	initialState: {
		userInfo: localStorage.getItem('userInfo')
			? JSON.parse(localStorage.getItem('userInfo'))
			: null,
		success: false,

		error: null,
		loading: false,
		categ: null,
	},
	reducers: {
		userLoginRequest(state) {
			state.loading = true;
		},
		userLoginSuccess(state, action) {
			state.loading = false;
			state.userInfo = action.payload;
			state.error = null;
		},
		userLoginFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},

		addNewUserRequest(state, action) {
			state.loading = true;
		},
		addNewUserSuccess(state, action) {
			state.loading = false;
			state.success = action.payload;
			state.error = null;
		},
		addNewUserFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		categRequest(state, action) {
			state.loading = true;
		},
		categSuccess(state, action) {
			state.loading = false;
			state.categ = action.payload;
			state.error = null;
		},
		categFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		editUserProfileRequest(state, action) {
			state.loading = true;
		},
		editUserProfileSuccess(state, action) {
			state.loading = false;
			state.success = action.payload;
			state.error = null;
		},
		editUserProfileFail(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

const { actions } = UsersReducer;

export const {
	userLoginRequest,
	userLoginSuccess,
	userLoginFail,
	editUserProfileRequest,
	editUserProfileSuccess,
	editUserProfileFail,
	addNewUserRequest,
	addNewUserSuccess,
	addNewUserFail,
	categRequest,
	categSuccess,
	categFail,
} = actions;

export const loginDispatch = (bodyData) => async (dispatch) => {
	try {
		dispatch(userLoginRequest());
		const config = { headers: { 'Content-Type': 'application/json' } };
		const { data } = await axiosInstance.post('/api/login', bodyData, config);
		dispatch(userLoginSuccess(data));
		storeData('userInfo', data);
		if (data.result) {
			alert('Login Successfully');
		} else {
			alert('Invalid login credentials');
		}
	} catch (error) {
		dispatch(
			userLoginFail(
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.detail
			)
		);
	}
};

export const addNewUserDispatch = (bodyData, history) => async (dispatch) => {
	try {
		dispatch(addNewUserRequest());
		const config = { headers: { 'Content-Type': 'application/json' } };
		const { data } = await axiosInstance.post(
			'/api/register',
			bodyData,
			config
		);
		dispatch(addNewUserSuccess(data));
		alert('Signup Successfully');
		history.push('/login');
	} catch (error) {
		dispatch(
			addNewUserFail(
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
			)
		);
	}
};
export const categDispatch = (bodyData) => async (dispatch) => {
	try {
		dispatch(categRequest());
		const config = { headers: { 'Content-Type': 'application/json' } };
		const { data } = await axiosInstance.post(
			'/api/search-data',
			bodyData,
			config
		);
		dispatch(categSuccess(data));
		console.log(data);
	} catch (error) {
		dispatch(
			categFail(
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
			)
		);
	}
};

export const editUserProfileDispatch =
	(bodyData, token) => async (dispatch) => {
		try {
			dispatch(editUserProfileRequest());
			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			const { data } = await axiosInstance.post(
				'/api/edit-profile',
				bodyData,
				config
			);
			dispatch(editUserProfileSuccess(data));
			alert('Profile Update Successfully');
		} catch (error) {
			dispatch(
				editUserProfileFail(
					error.response && error.response.data.message
						? error.response.data.message
						: error.message
				)
			);
		}
	};

export default UsersReducer;
