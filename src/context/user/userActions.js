import { types } from "../types";

export const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailed = () => ({
  type: types.LOGIN_FAILED,
});

export const loginLogout = () => ({
  type: types.LOGOUT,
});
export const userUpdated = (user)=>({
    type:types.USER_UPDATED,
    payload:user
})