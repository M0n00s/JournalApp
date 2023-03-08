import { singInWithGoogle } from "../../firebase/provider";
import { chekingCredentials } from "./AuthSlice";

export const chekingAuthentication = () => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
  };
};
export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
    const result = await singInWithGoogle();
    console.log(result);
  };
};
