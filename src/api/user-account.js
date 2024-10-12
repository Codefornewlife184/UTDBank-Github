import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const createAccount = (account) => {
  return axios.post(`${API_URL}account/create`, account, {
    headers: authHeader(),
  });
};

const getAccounts = () => {
  return axios.get(`${API_URL}account`, {
    headers: authHeader(),
  });
};

const getAccountByAccountNo = (accountNo) => {
  return axios.get(`${API_URL}account/${accountNo}/user`, {
    headers: authHeader(),
  });
};

const updateAccountByAccountNo = (id, account) => {
  return axios.put(`${API_URL}account/${id}/update`, account, {
    headers: authHeader(),
  });
};

const deleteAccountByAccountNo = (id) => {
  return axios.delete(`${API_URL}account/${id}`, {
    headers: authHeader(),
  });
};

export { createAccount, getAccounts, getAccountByAccountNo, updateAccountByAccountNo, deleteAccountByAccountNo };
