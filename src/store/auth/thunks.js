import { singInWithGoogle } from "../../firebase/provider";
import { chekingCredentials, login, logout } from "./AuthSlice";

export const chekingAuthentication = () => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
  };
};
export const startGoogleSignIn = () => {
  return async (dispatch) => {
    //status cheking
    dispatch(chekingCredentials());
    //start google sign in
    const result = await singInWithGoogle();
    // console.log(result);
    //if not ok -> logout
    if (!result.ok) return dispatch(logout(result));
    //if ok -> login
    dispatch(login(result));
  };
};
