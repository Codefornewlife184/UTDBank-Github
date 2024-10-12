import axios from 'axios'
import authHeader from './auth-header'

const API_URL = process.env.REACT_APP_API_URL

/***********************CUSTOMER,MANAGER/EMPLOYEE(JUST FOR OWN)************************/
const createAccount = (account) => {
  return axios.post(`${API_URL}account/create`, account, {
    headers: authHeader(),

  });
};

const getAccounts = () => {
  return axios.get(`${API_URL}account`, { headers: authHeader() })
}
const getAccountByAccountNo = (accountNo) => {
  return axios.get(`${API_URL}account/${accountNo}/user`, {
    headers: authHeader(),

  });
};
const updateAccountByAccountNo = (accountNo, account) => {
  return axios.put(`${API_URL}account/${accountNo}/update`, account, {
    headers: authHeader(),
  });
};
const deleteAccountByAccountNo = (accountNo) => {
  return axios.delete(`${API_URL}account/${accountNo}`, {
    headers: authHeader(),
  });
};

/******************* MANAGER/EMPLOYEE(RESTRICTED) ************************************/
const createAccountByUserId = (userId, account) => {
  return axios.post(`${API_URL}account/${userId}/create`, account, {
    headers: authHeader(),
  })
}
const getAllAccounts = () => {
  return axios.get(`${API_URL}account/auth/all`, { headers: authHeader() })
}
const getAccountsByUserId = (userId) => {
  return axios.get(`${API_URL}account/user/${userId}/auth`, {
    headers: authHeader(),

  });
};
const getAccountByAccountIdAuth = (accountId) => {
  return axios.get(`${API_URL}account/${accountId}/auth`, {
    headers: authHeader(),
  });
};
const updateAccountByAccountIdAuth = (accountId, account) => {
  return axios.put(`${API_URL}account/${accountId}/auth`, account, {
    headers: authHeader(),
  });
};
const deleteAccountByAccountIdAuth = (accountId) => {
  return axios.delete(`${API_URL}account/${accountId}/auth`, {
    headers: authHeader(),
  });
};

export {
  createAccount,
  createAccountByUserId,
  getAccounts,
  getAccountByAccountNo,
  updateAccountByAccountNo,
  deleteAccountByAccountNo,
  getAllAccounts,
  getAccountsByUserId,
  getAccountByAccountIdAuth,
  updateAccountByAccountIdAuth,
  deleteAccountByAccountIdAuth,
}
