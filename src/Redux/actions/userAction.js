import axios from "axios";
import {
  LOGIN_REQUREST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUREST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOAD_REQUREST,
  LOAD_SUCCESS,
  LOAD_FAIL,
  CLEAR_ERRORS,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_PROFILE_REQUREST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_RESET,
} from "../constants/userConstant";

//Login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUREST });
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `http://localhost:5000/api/v1/login`,
      { email, password },
      config
    );
    console.log(data);

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.massage,
    });
  }
};

//Register

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUREST });
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.post(
      `http://localhost:5000/api/v1/register`,
      userData,
      config
    );

    dispatch({ type: REGISTER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.massage,
    });
  }
};

// Load User

export const LoadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_REQUREST });

    const { data } = await axios.get(`http://localhost:5000/api/v1/me`);

    dispatch({ type: LOAD_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: LOAD_FAIL,
      payload: error.response.data.massage,
    });
  }
};

//Logout User

export const logout = () => async (dispatch) => {
  try {
    await axios.get(`http://localhost:5000/api/v1/logout`);

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error.response.data.massage,
    });
  }
};

//Update Profile

export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUREST });
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.put(
      `http://localhost:5000/api/v1/me/update`,
      userData,
      config
    );

    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.massage,
    });
  }
};

//Clearing Error

export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
