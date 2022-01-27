import { axiosInstance } from '../Axios';
const { createSlice } = require('@reduxjs/toolkit');

const UsersReducer = createSlice({
	name: 'user',
	initialState: {
		userInfo: null,

		success: false,

		error: null,
		loading: false,
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
} = actions;

export const loginDispatch = (bodyData) => async (dispatch) => {
	try {
		dispatch(userLoginRequest());
		const config = { headers: { 'Content-Type': 'application/json' } };
		const { data } = await axiosInstance.post('/api/login', bodyData, config);
		dispatch(userLoginSuccess(data));
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
