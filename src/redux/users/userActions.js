import axios from "axios";

import {
	FETCH_USERS_REQUEST,
	FETCH_USERS_SUCCESS,
	FETCH_USERS_FAILURE,
} from "./userActType";

const fetchUsersRequest = () => {
	return {
		loading: true,
		type: FETCH_USERS_REQUEST,
		error: "",
	};
};

const fetchUsersSuccess = (users) => {
	return {
		loading: false,
		type: FETCH_USERS_SUCCESS,
		payload: users,
	};
};
const fetchUsersFailure = (error) => {
	return {
		loading: false,
		type: FETCH_USERS_FAILURE,
		payload: error,
	};
};
export const fetchUsers = () => {
	return (dispatch) => {
		dispatch(fetchUsersRequest);
		axios.get("https://jsonplaceholder.typicode.com/users").then(
			((res) => {
				const resdata = res.data;
				dispatch(fetchUsersSuccess(resdata));
			}).catch((error) => {
				const err = error.message;
				dispatch(fetchUsersFailure(err));
			})
		);
	};
};
