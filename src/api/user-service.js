import axios from "axios";
import authHeader from "./auth-header";
const API_URL = process.env.REACT_APP_API_URL;
/********************************VISITOR*********************************************/
const login = (credentials) => {
  return axios.post(`${API_URL}login`, credentials);
};
const register = (user) => {
  return axios.post(`${API_URL}register`, user);
};
/******************* MANAGER/EMPLOYEE(RESTRICTED) ************************************/
const getAllUser = () => {
  return axios.get(`${API_URL}user/auth/all`, { headers: authHeader() });
};
const getUserById = (userId) => {
  return axios.get(`${API_URL}user/${userId}/auth`, { headers: authHeader() });
};
const updateUserById = (userId, user) => {
  return axios.put(`${API_URL}user/${userId}/auth`, user, {
    headers: authHeader(),
  });
};
const deleteUserById = (userId) => {
  return axios.delete(`${API_URL}user/${userId}/auth`, {
    headers: authHeader(),
  });
};
/******************* CUSTOMER,MANAGER/EMPLOYEE(JUST FOR OWN) ************************************/
const getUser = () => {
  return axios.get(`${API_URL}user`, { headers: authHeader() });
};
const updateUser = (user) => {
  return axios.put(`${API_URL}user/update`, user, { headers: authHeader() });
};
const updatePassword = (credentials) => {
  return axios.patch(`${API_URL}user/password`, credentials, { headers: authHeader() });
};
export {
  login,
  register,
  getUser,
  updateUser,
  updatePassword,
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
