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

export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUREST:
    case REGISTER_REQUREST:
    case LOAD_REQUREST:
      return {
        loading: true,
        isAutenticated: false,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        isAutenticated: true,
        user: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        loading: false,
        isAutenticated: false,
        user: null,
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        isAutenticated: false,
        user: null,
        error: action.payload,
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        isAutenticated: false,
        user: null,
        error: action.payload,
      };

    case LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const profileResucer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUREST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case UPDATE_PROFILE_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case UPDATE_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
