import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_BYID_REQUEST,
  GET_USER_BYID_SUCCESS,
  GET_USER_BYID_FAILURE,
  UPDATE_USER_BYID_REQUEST,
  UPDATE_USER_BYID_SUCCESS,
  UPDATE_USER_BYID_FAILURE,
  DELETE_USER_BYID_REQUEST,
  DELETE_USER_BYID_SUCCESS,
  DELETE_USER_BYID_FAILURE,
} from "./../types/user";
import {
  createUserAPI,
  getUsersAPI,
  getUserByIdAPI,
  updateUserByIdAPI,
  deleteUserByIdAPI,
} from "./../services/user";
import { toast } from "react-toastify";

export function createUser(data, history) {
  return async (dispatch) => {
    dispatch({ type: CREATE_USER_REQUEST });
    try {
      const user = await createUserAPI(data);
      console.log(user);
      dispatch({ type: CREATE_USER_SUCCESS });
      toast(user.data.message);
      setTimeout(() => {
        history.push("/");
      }, 2000);
    } catch (error) {
      const { response } = error;
      console.error(response);
      dispatch({ type: CREATE_USER_FAILURE });
      toast(response.data.message);
    }
  };
}

export function getUsers() {
  return async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
      const user = await getUsersAPI();
      console.log(user);
      dispatch({ type: GET_USER_SUCCESS, payload: user.data.results });
    } catch (error) {
      const { response } = error;
      console.error(response);
      dispatch({ type: GET_USER_FAILURE, payload: response.data.message });
    }
  };
}

export function getUserById(id) {
  return async (dispatch) => {
    dispatch({ type: GET_USER_BYID_REQUEST });
    try {
      const user = await getUserByIdAPI(id);
      console.log(user);
      dispatch({ type: GET_USER_BYID_SUCCESS, payload: user.data.response });
    } catch (error) {
      const { response } = error;
      console.error(response);
      dispatch({ type: GET_USER_BYID_FAILURE, payload: response.data.message });
    }
  };
}

export function updateUserById(id, data, history) {
  return async (dispatch) => {
    dispatch({ type: UPDATE_USER_BYID_REQUEST });
    try {
      const user = await updateUserByIdAPI(id, data);
      console.log(user);
      dispatch({ type: UPDATE_USER_BYID_SUCCESS });
      toast(user.data.message);
      setTimeout(() => {
        history.push("/");
      }, 2000);
    } catch (error) {
      const { response } = error;
      console.error(response);
      dispatch({ type: UPDATE_USER_BYID_FAILURE });
      toast(response.data.message);
    }
  };
}

export function deleteUserById(id) {
  return async (dispatch) => {
    dispatch({ type: DELETE_USER_BYID_REQUEST });
    try {
      const user = await deleteUserByIdAPI(id);
      console.log(user);
      dispatch({ type: DELETE_USER_BYID_SUCCESS, payload: id });
      toast(user.data.message);
    } catch (error) {
      const { response } = error;
      console.error(response);
      dispatch({ type: DELETE_USER_BYID_FAILURE });
      toast(response.data.message);
    }
  };
}
