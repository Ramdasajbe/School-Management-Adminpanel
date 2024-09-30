import axios from "axios";
import {
  authRequest,
  authSuccess,
  authFailed,
  authError,
  authLogout,
} from "./userSlice";

export const loginUser = (fields, role) => async (dispatch) => {
  dispatch(authRequest());

  try {
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/${role}Login`,
      fields,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    if (result.data.role) {
      dispatch(authSuccess(result.data));
    } else {
      dispatch(authFailed(result.data.message));
    }
  } catch (error) {
    dispatch(authError(error));
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch(authLogout());
};
