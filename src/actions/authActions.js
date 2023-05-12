import { clearSavedActivities } from "../reducers/activitiesSlice";
import { loginError, loginSuccess, logout } from "../reducers/authSlice";
import axiosWithAuth from "../utils/axiosWithAuth";

export const loginUser = (credentials) => (dispatch) => {
  axiosWithAuth()
    .post("/api/login", credentials)
    .then((res) => {
      dispatch(loginSuccess(res.data));
    })
    .catch((err) => dispatch(loginError(err.response.data.message)));
};

export const registerUser = (userData) => (dispatch) => {
  axiosWithAuth()
    .post("/api/register", userData)
    .then((res) => dispatch(loginSuccess(res.data)))
    .catch((err) => dispatch(loginError(err.response.data.message)));
};

export const logoutUser = () => (dispatch) => {
  dispatch(logout());
  dispatch(clearSavedActivities());
};
